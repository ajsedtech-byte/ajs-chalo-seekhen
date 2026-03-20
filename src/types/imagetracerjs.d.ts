declare module "imagetracerjs" {
  interface ImageTracer {
    imagedataToTracedata(
      imageData: ImageData,
      options?: Record<string, unknown>
    ): unknown;
    getsvgstring(traceData: unknown, options?: Record<string, unknown>): string;
  }
  const imagetracer: ImageTracer;
  export default imagetracer;
}
