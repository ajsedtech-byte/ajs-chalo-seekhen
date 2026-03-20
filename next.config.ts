import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["potrace", "sharp", "@neplex/vectorizer", "svgo"],
};

export default nextConfig;
