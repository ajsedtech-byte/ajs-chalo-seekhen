import type { Metadata } from "next";
import ImageToSvg from "@/components/ImageToSvg";

export const metadata: Metadata = {
  title: "Image to SVG Converter",
  description:
    "Convert photos, logos, illustrations, icons, and sketches to clean SVG vector graphics — pixel-perfect or simplified.",
};

export default function ImageToSvgPage() {
  return (
    <main className="bg-black min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Image to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              SVG
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Convert any image — photos, logos, illustrations, icons, or
            hand-drawn sketches — into clean, scalable SVG vector graphics.
            Everything runs in your browser. No uploads, no servers.
          </p>
        </div>
        <ImageToSvg />
      </div>
    </main>
  );
}
