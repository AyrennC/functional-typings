declare module '@google-cloud/vision' {
  export class ImageAnnotatorClient {
    labelDetection: (
      request: AnnotateImageRequest | string | Buffer,
      callOptions?: unknown,
      callback?: Function
    ) => Promise<Array<AnnotateImageResponse>>;

    textDetection: (
      request: AnnotateImageRequest | string | Buffer,
      callOptions?: unknown,
      callback?: Function
    ) => Promise<Array<AnnotateImageResponse>>;

    documentTextDetection: (
      request: AnnotateImageRequest | string | Buffer,
      callOptions?: unknown,
      callback?: Function
    ) => Promise<Array<AnnotateImageResponse>>;

    asyncBatchAnnotateFiles: (
      request: {
        requests: Array<AsyncAnnotateFileRequest>;
      },
      options?: unknown,
      callback?: Function
    ) => Promise<Array<unknown>>;
  }
}
