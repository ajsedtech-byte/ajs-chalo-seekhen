import { NextRequest, NextResponse } from "next/server";
import { writeFileSync, unlinkSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { randomUUID } from "crypto";
import { execFile } from "child_process";

export const runtime = "nodejs";

const WORKER = join(process.cwd(), "scripts", "trace-worker.js");

function runWorker(args: string[]): Promise<string> {
  return new Promise((resolve, reject) => {
    execFile(
      "node",
      [WORKER, ...args],
      { maxBuffer: 100 * 1024 * 1024, timeout: 180000 },
      (err, stdout, stderr) => {
        if (err) reject(new Error(stderr || err.message));
        else resolve(stdout);
      }
    );
  });
}

export async function POST(req: NextRequest) {
  const id = randomUUID();
  const tmpPath = join(tmpdir(), `trace-upload-${id}.png`);

  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;
    const mode = (formData.get("mode") as string) || "color";
    const colors = (formData.get("colors") as string) || "0";
    const threshold = (formData.get("threshold") as string) || "128";
    const turdSize = (formData.get("turdSize") as string) || "2";
    const optTolerance = (formData.get("optTolerance") as string) || "0.2";
    const filterSpeckle = (formData.get("filterSpeckle") as string) || "0";
    const pathPrecision = (formData.get("pathPrecision") as string) || "0";

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const arrayBuf = await file.arrayBuffer();
    writeFileSync(tmpPath, Buffer.from(arrayBuf));

    const svg = await runWorker([
      tmpPath,
      mode,
      colors,
      threshold,
      turdSize,
      optTolerance,
      filterSpeckle,
      pathPrecision,
    ]);

    return NextResponse.json({ svg });
  } catch (e) {
    console.error("Trace error:", e);
    return NextResponse.json(
      { error: "Conversion failed: " + (e as Error).message },
      { status: 500 }
    );
  } finally {
    try {
      unlinkSync(tmpPath);
    } catch {
      /* already cleaned */
    }
  }
}
