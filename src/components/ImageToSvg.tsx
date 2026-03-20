"use client";

import { useState, useRef, useCallback } from "react";

const MODES = [
  { key: "photo", label: "Photo HD", description: "High-fidelity photo vectorization — max color layers, minimal filtering, closest to original", icon: "📷", tag: "BEST QUALITY" },
  { key: "embed", label: "Pixel-Perfect", description: "100% exact reproduction — embeds original image as base64 inside SVG wrapper", icon: "🎯", tag: "EXACT COPY" },
  { key: "color", label: "Color Trace", description: "Balanced color vectorization — good for colorful artwork and illustrations", icon: "🎨", tag: null },
  { key: "stylized", label: "Stylized", description: "Artistic vector interpretation with bold colors — looks intentionally designed", icon: "🎭", tag: null },
  { key: "illustration", label: "Illustration", description: "Flat-color artwork, cartoons, vector art", icon: "🖌", tag: null },
  { key: "logo", label: "Logo", description: "Sharp B&W trace — logos, icons, text", icon: "✦", tag: null },
  { key: "sketch", label: "Sketch", description: "Line art and hand-drawn images", icon: "✏", tag: null },
  { key: "simplified", label: "Simplified", description: "Clean, minimal, poster-style output", icon: "◐", tag: null },
];

export default function ImageToSvg() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageName, setImageName] = useState("");
  const [svgString, setSvgString] = useState("");
  const [converting, setConverting] = useState(false);
  const [activeMode, setActiveMode] = useState("photo");
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [conversionTime, setConversionTime] = useState(0);

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [threshold, setThreshold] = useState(128);
  const [turdSize, setTurdSize] = useState(2);
  const [optTolerance, setOptTolerance] = useState(0.2);
  const [filterSpeckle, setFilterSpeckle] = useState(4);
  const [pathPrecision, setPathPrecision] = useState(3);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    setImageFile(file);
    setImageName(file.name.replace(/\.[^.]+$/, ""));
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target?.result as string);
      setSvgString("");
      setError("");
    };
    reader.readAsDataURL(file);
  }, []);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const onDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      const file = e.dataTransfer.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const convert = useCallback(async () => {
    if (!imageFile) return;
    setConverting(true);
    setSvgString("");
    setError("");
    const start = Date.now();

    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("mode", activeMode);
      if (showAdvanced) {
        formData.append("threshold", String(threshold));
        formData.append("turdSize", String(turdSize));
        formData.append("optTolerance", String(optTolerance));
        formData.append("filterSpeckle", String(filterSpeckle));
        formData.append("pathPrecision", String(pathPrecision));
      }

      const res = await fetch("/api/trace", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Conversion failed");
      } else {
        setSvgString(data.svg);
        setConversionTime(Date.now() - start);
      }
    } catch (err) {
      setError("Network error: " + (err as Error).message);
    } finally {
      setConverting(false);
    }
  }, [imageFile, activeMode, showAdvanced, threshold, turdSize, optTolerance, filterSpeckle, pathPrecision]);

  const downloadSvg = () => {
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${imageName || "converted"}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copySvg = () => {
    navigator.clipboard.writeText(svgString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => {
    setImageSrc(null);
    setImageFile(null);
    setImageName("");
    setSvgString("");
    setError("");
    setConversionTime(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const svgSize = svgString ? (new Blob([svgString]).size / 1024).toFixed(1) : "0";

  const checkerBg =
    "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWExYTFhIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiMxYTFhMWEiLz48cmVjdCB4PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMjIyIi8+PHJlY3QgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzIyMiIvPjwvc3ZnPg==')]";

  return (
    <div className="space-y-8">
      <input ref={fileInputRef} type="file" accept="image/*" onChange={onFileChange} className="hidden" />

      {/* Upload zone */}
      {!imageSrc && (
        <div
          onDragEnter={onDrag}
          onDragLeave={onDrag}
          onDragOver={onDrag}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-16 text-center cursor-pointer transition-all duration-300 ${
            dragActive
              ? "border-purple-500 bg-purple-500/10"
              : "border-zinc-700 hover:border-zinc-500 bg-zinc-900/50"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <svg className="w-16 h-16 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <div>
              <p className="text-xl font-semibold text-white">Drop an image here or click to upload</p>
              <p className="text-sm text-zinc-500 mt-1">PNG, JPG, WEBP, BMP, GIF — any size, native resolution preserved</p>
            </div>
          </div>
        </div>
      )}

      {imageSrc && (
        <>
          {/* Mode selector */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Conversion Mode</h3>
              <div className="flex items-center gap-2 text-xs text-zinc-600">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                Powered by VTracer + Potrace + SVGO
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {MODES.map((mode) => (
                <button
                  key={mode.key}
                  onClick={() => setActiveMode(mode.key)}
                  className={`relative px-3 py-3 rounded-xl text-sm font-medium transition-all text-center ${
                    activeMode === mode.key
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25 ring-2 ring-purple-400/30"
                      : "bg-zinc-800/80 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                  }`}
                >
                  {mode.tag && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-bold bg-emerald-500 text-black px-1.5 py-0.5 rounded-full whitespace-nowrap">
                      {mode.tag}
                    </span>
                  )}
                  <span className="text-lg block mb-1">{mode.icon}</span>
                  {mode.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-zinc-500 mt-2">{MODES.find((m) => m.key === activeMode)?.description}</p>
          </div>

          {/* Advanced controls — not shown for embed/stylized */}
          {activeMode !== "embed" && <div>
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-sm text-zinc-500 hover:text-zinc-300 flex items-center gap-1 transition-colors"
            >
              <svg className={`w-4 h-4 transition-transform ${showAdvanced ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              Fine-Tune Settings
            </button>

            {showAdvanced && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 p-5 bg-zinc-900/80 rounded-xl border border-zinc-800">
                <div>
                  <label className="text-xs text-zinc-400 block mb-2">
                    Noise Filter: <span className="text-white font-medium">{filterSpeckle}</span>
                  </label>
                  <input type="range" min={1} max={40} value={filterSpeckle} onChange={(e) => setFilterSpeckle(Number(e.target.value))} className="w-full accent-purple-500" />
                  <p className="text-[10px] text-zinc-600 mt-1">Remove small specks (higher = cleaner)</p>
                </div>
                <div>
                  <label className="text-xs text-zinc-400 block mb-2">
                    Path Precision: <span className="text-white font-medium">{pathPrecision}</span>
                  </label>
                  <input type="range" min={1} max={8} value={pathPrecision} onChange={(e) => setPathPrecision(Number(e.target.value))} className="w-full accent-purple-500" />
                  <p className="text-[10px] text-zinc-600 mt-1">Decimal places for coordinates (higher = more precise)</p>
                </div>
                <div>
                  <label className="text-xs text-zinc-400 block mb-2">
                    B&W Threshold: <span className="text-white font-medium">{threshold}</span>
                  </label>
                  <input type="range" min={0} max={255} value={threshold} onChange={(e) => setThreshold(Number(e.target.value))} className="w-full accent-purple-500" />
                  <p className="text-[10px] text-zinc-600 mt-1">Cutoff for Logo/Sketch modes</p>
                </div>
                <div>
                  <label className="text-xs text-zinc-400 block mb-2">
                    Speck Size: <span className="text-white font-medium">{turdSize}</span>
                  </label>
                  <input type="range" min={0} max={20} value={turdSize} onChange={(e) => setTurdSize(Number(e.target.value))} className="w-full accent-purple-500" />
                  <p className="text-[10px] text-zinc-600 mt-1">B&W noise removal (Potrace)</p>
                </div>
                <div>
                  <label className="text-xs text-zinc-400 block mb-2">
                    Curve Smoothing: <span className="text-white font-medium">{optTolerance}</span>
                  </label>
                  <input type="range" min={0} max={2} step={0.05} value={optTolerance} onChange={(e) => setOptTolerance(Number(e.target.value))} className="w-full accent-purple-500" />
                  <p className="text-[10px] text-zinc-600 mt-1">B&W curve optimization (Potrace)</p>
                </div>
              </div>
            )}
          </div>}

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 items-center">
            <button
              onClick={convert}
              disabled={converting}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2 text-base"
            >
              {converting ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Vectorizing…
                </>
              ) : (
                "Convert to SVG"
              )}
            </button>

            <button onClick={() => fileInputRef.current?.click()} className="px-5 py-3 bg-zinc-800 text-white font-medium rounded-xl hover:bg-zinc-700 transition-colors">
              Change Image
            </button>

            <button onClick={reset} className="px-5 py-3 bg-zinc-800 text-zinc-400 font-medium rounded-xl hover:bg-zinc-700 hover:text-white transition-colors">
              Reset
            </button>

            {conversionTime > 0 && (
              <span className="text-xs text-zinc-600 ml-2">
                Converted in {(conversionTime / 1000).toFixed(1)}s
              </span>
            )}
          </div>

          {error && (
            <div className="p-4 bg-red-900/30 border border-red-800 rounded-xl text-red-400 text-sm">{error}</div>
          )}

          {/* Preview panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-400">Original Image</span>
                <span className="text-xs text-zinc-600">{imageName}</span>
              </div>
              <div className={`p-4 flex items-center justify-center min-h-[300px] ${checkerBg}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageSrc} alt="Original" className="max-w-full max-h-[500px] object-contain" />
              </div>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-400">SVG Output</span>
                {svgString && (
                  <div className="flex items-center gap-3 text-xs text-zinc-600">
                    <span>{svgSize} KB</span>
                    <span className="text-emerald-500 font-medium">
                      {activeMode === "embed" ? "Pixel-Perfect" : activeMode === "photo" ? "Photo HD" : "SVGO optimized"}
                    </span>
                  </div>
                )}
              </div>
              <div className={`p-4 flex items-center justify-center min-h-[300px] ${checkerBg}`}>
                {svgString ? (
                  <div
                    className="max-w-full max-h-[500px] overflow-auto [&>svg]:max-w-full [&>svg]:h-auto"
                    dangerouslySetInnerHTML={{ __html: svgString }}
                  />
                ) : (
                  <p className="text-zinc-600 text-sm">{converting ? "Vectorizing with VTracer engine…" : 'Click "Convert to SVG" to see the result'}</p>
                )}
              </div>
            </div>
          </div>

          {/* Download / Copy */}
          {svgString && (
            <div className="flex flex-wrap gap-3">
              <button onClick={downloadSvg} className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-500 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download SVG
              </button>
              <button onClick={copySvg} className="px-6 py-3 bg-zinc-800 text-white font-medium rounded-xl hover:bg-zinc-700 transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copied ? "Copied!" : "Copy SVG Code"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
