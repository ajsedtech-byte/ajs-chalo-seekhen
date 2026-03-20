/**
 * Production-grade Image-to-SVG Worker v2
 *
 * Modes:
 *   embed       — Pixel-perfect: wraps original image as base64 inside SVG
 *   photo       — High-fidelity photo vectorization (many color layers, minimal filtering)
 *   stylized    — Artistic vector with bold color regions
 *   color       — Balanced color vectorization
 *   illustration— Flat-color artwork
 *   logo        — Sharp B&W (Potrace)
 *   sketch      — Line art B&W (Potrace)
 *   simplified  — Minimal poster-style
 */
const { vectorizeSync } = require("@neplex/vectorizer");
const potrace = require("potrace");
const sharp = require("sharp");
const { optimize } = require("svgo");
const fs = require("fs");

/* ------------------------------------------------------------------ */
/*  SVGO                                                               */
/* ------------------------------------------------------------------ */
function svgoOptimize(svg, precision) {
  return optimize(svg, {
    multipass: true,
    floatPrecision: precision,
    plugins: [
      { name: "preset-default", params: { overrides: { cleanupIds: { minify: true } } } },
      { name: "removeViewBox", active: false },
    ],
  }).data;
}

/* ------------------------------------------------------------------ */
/*  Potrace B&W                                                        */
/* ------------------------------------------------------------------ */
function traceBW(filePath, opts) {
  return new Promise((resolve, reject) => {
    potrace.trace(filePath, opts, (err, svg) => {
      if (err) reject(err); else resolve(svg);
    });
  });
}

/* ------------------------------------------------------------------ */
/*  Embed mode — pixel-perfect SVG with base64 image                   */
/* ------------------------------------------------------------------ */
async function embedMode(inputPath) {
  const image = sharp(inputPath);
  const meta = await image.metadata();
  const w = meta.width || 100;
  const h = meta.height || 100;

  let buf, mime;
  if (meta.hasAlpha) {
    buf = await image.png({ compressionLevel: 9 }).toBuffer();
    mime = "image/png";
  } else {
    buf = await image.webp({ quality: 92 }).toBuffer();
    mime = "image/webp";
  }
  const b64 = buf.toString("base64");

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
<image width="${w}" height="${h}" xlink:href="data:${mime};base64,${b64}"/>
</svg>`;
}

/* ------------------------------------------------------------------ */
/*  Mode configs                                                       */
/* ------------------------------------------------------------------ */
function getConfig(mode, userParams) {
  const fp = userParams.filterSpeckle;
  const pp = userParams.pathPrecision;
  const cp = userParams.colorPrecision;

  const configs = {
    // Photo: high fidelity — more color layers, low speckle, good precision
    photo: {
      colorMode: 0,       // Color
      hierarchical: 0,    // Stacked
      mode: 2,            // Spline
      colorPrecision: cp || 7,
      filterSpeckle: fp || 3,
      layerDifference: 20,
      cornerThreshold: 60,
      lengthThreshold: 3.5,
      maxIterations: 10,
      spliceThreshold: 42,
      pathPrecision: pp || 4,
    },
    // Stylized: bold artistic look
    stylized: {
      colorMode: 0,
      hierarchical: 0,
      mode: 2,
      colorPrecision: cp || 6,
      filterSpeckle: fp || 10,
      layerDifference: 40,
      cornerThreshold: 80,
      lengthThreshold: 5.0,
      maxIterations: 8,
      spliceThreshold: 50,
      pathPrecision: pp || 3,
    },
    // Color: good balance
    color: {
      colorMode: 0,
      hierarchical: 0,
      mode: 2,
      colorPrecision: cp || 7,
      filterSpeckle: fp || 4,
      layerDifference: 24,
      cornerThreshold: 60,
      lengthThreshold: 3.5,
      maxIterations: 12,
      spliceThreshold: 45,
      pathPrecision: pp || 4,
    },
    // Illustration: flat-color
    illustration: {
      colorMode: 0,
      hierarchical: 0,
      mode: 2,
      colorPrecision: cp || 6,
      filterSpeckle: fp || 6,
      layerDifference: 28,
      cornerThreshold: 80,
      lengthThreshold: 4.0,
      maxIterations: 10,
      spliceThreshold: 45,
      pathPrecision: pp || 3,
    },
    // Simplified: poster style
    simplified: {
      colorMode: 0,
      hierarchical: 0,
      mode: 2,
      colorPrecision: cp || 4,
      filterSpeckle: fp || 20,
      layerDifference: 56,
      cornerThreshold: 100,
      lengthThreshold: 6.0,
      maxIterations: 5,
      spliceThreshold: 55,
      pathPrecision: pp || 2,
    },
  };

  return configs[mode] || configs.color;
}

/* ------------------------------------------------------------------ */
/*  Preprocessing per mode                                             */
/* ------------------------------------------------------------------ */
async function preprocess(inputPath, mode) {
  let image = sharp(inputPath);
  const meta = await image.metadata();

  // Mode-specific max dimensions — photos get more pixels for detail
  const maxDims = {
    photo: 900,
    stylized: 800,
    color: 900,
    illustration: 800,
    simplified: 500,
    logo: 800,
    sketch: 800,
  };
  const maxDim = maxDims[mode] || 800;

  if ((meta.width || 0) > maxDim || (meta.height || 0) > maxDim) {
    image = image.resize(maxDim, maxDim, { fit: "inside", withoutEnlargement: true });
  }

  switch (mode) {
    case "photo":
      // Minimal processing — just light sharpen, NO blur/median
      image = image.sharpen({ sigma: 0.5 });
      break;
    case "stylized":
      // Strong posterization: heavy median + saturation boost
      image = image.median(5).modulate({ saturation: 1.4 }).sharpen({ sigma: 1.5 });
      break;
    case "color":
      // Light denoise only
      image = image.median(1).sharpen({ sigma: 0.3 });
      break;
    case "illustration":
      image = image.median(3).sharpen({ sigma: 0.8 });
      break;
    case "simplified":
      image = image.blur(3).median(5);
      break;
    case "logo":
      image = image.greyscale().normalize().sharpen({ sigma: 2.0 }).threshold(128);
      break;
    case "sketch":
      image = image.greyscale().normalize().median(1);
      break;
    default:
      image = image.sharpen({ sigma: 0.3 });
      break;
  }

  return image.png().toBuffer();
}

/* ------------------------------------------------------------------ */
/*  Main                                                               */
/* ------------------------------------------------------------------ */
async function main() {
  const [, , inputPath, mode = "color", , thresholdArg, turdSizeArg, optToleranceArg, filterSpeckleArg, pathPrecisionArg] = process.argv;

  if (!inputPath || !fs.existsSync(inputPath)) {
    process.stderr.write("Missing or invalid input file\n");
    process.exit(1);
  }

  const threshold = Number(thresholdArg) || 128;
  const turdSize = Number(turdSizeArg) || 2;
  const optTolerance = Number(optToleranceArg) || 0.2;
  const filterSpeckle = Number(filterSpeckleArg) || 0;
  const pathPrecision = Number(pathPrecisionArg) || 0;

  let svg;

  // --- Embed mode: pixel-perfect SVG ---
  if (mode === "embed") {
    svg = await embedMode(inputPath);
    process.stdout.write(svg);
    return;
  }

  // --- B&W modes: Potrace ---
  if (mode === "logo" || mode === "sketch") {
    const preprocessed = await preprocess(inputPath, mode);
    const os = require("os");
    const path = require("path");
    const tmpPath = path.join(os.tmpdir(), `trace-bw-${Date.now()}.png`);
    fs.writeFileSync(tmpPath, preprocessed);
    try {
      svg = await traceBW(tmpPath, {
        turnPolicy: potrace.Potrace.TURNPOLICY_MINORITY,
        turdSize: mode === "logo" ? 4 : turdSize,
        optTolerance: mode === "logo" ? 0.1 : optTolerance,
        threshold: mode === "logo" ? potrace.Potrace.THRESHOLD_AUTO : threshold,
        color: "black",
        background: mode === "logo" ? "transparent" : "white",
      });
    } finally {
      try { fs.unlinkSync(tmpPath); } catch {}
    }
    process.stdout.write(svgoOptimize(svg, 2));
    return;
  }

  // --- Color modes: VTracer ---
  const preprocessed = await preprocess(inputPath, mode);
  const config = getConfig(mode, { filterSpeckle, pathPrecision, colorPrecision: 0 });

  process.stderr.write(`Mode: ${mode}, Config: ${JSON.stringify(config)}\n`);

  svg = vectorizeSync(preprocessed, config);

  const precision = mode === "photo" ? 5 : mode === "color" ? 4 : 2;
  process.stdout.write(svgoOptimize(svg, precision));
}

main().catch((err) => {
  process.stderr.write(err.message + "\n");
  process.exit(1);
});
