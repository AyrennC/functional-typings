/*
 * Type bindings for Google Cloud Vision API interface
 * Reference to
 * https://googleapis.dev/nodejs/vision/latest/google.cloud.vision.v1.html#.TextAnnotation
 */
/* eslint @typescript-eslint/ban-types: 0 */
declare module '@google-cloud/vision' {
  export interface AsyncAnnotateFileRequest {
    inputConfig: InputConfig;
    features: Array<Feature>;
    imageContext?: ImageContext;
    outputConfig: OutputConfig;
  }

  export interface InputConfig {
    gcsSource: GcsSource;
    content?: Buffer;
    mimeType: string;
  }

  export interface GcsSource {
    uri: string;
  }

  export interface OutputConfig {
    /*
     * The max number of response protos to put into each output
     * JSON file on Google Cloud Storage. The valid range is [1, 100].
     * If not specified, the default value is 20.
     */
    batchSize?: number;
    gcsDestination: GcsDestination;
  }

  export interface GcsDestination {
    uri: string;
  }

  export interface AnnotateImageRequest {
    image: Image;
    features?: Array<Feature>;
    imageContext?: ImageContext;
  }

  export interface AnnotateImageResponse {
    // If present, label detection has completed successfully.
    labelAnnotations?: Array<EntityAnnotation>;

    // If present, text (OCR) detection has completed successfully.
    textAnnotaions?: Array<EntityAnnotation>;

    /*
     * If present, text (OCR) detection or document (OCR) text detection has completed successfully.
     * This annotation provides the structural hierarchy for the OCR detected text.
     */
    fullTextAnnotation?: TextAnnotation;
  }

  export interface Image {
    content?: Buffer;
    source?: ImageSource;
  }

  export interface ImageSource {
    gcsImageUri?: string;
    imageUri?: string;
  }

  export interface Feature {
    type: Type;
    maxResult?: number;
    model?: 'builtin/stable' | 'builtin/latest';
  }

  export type Type = string;

  export interface ImageContext {
    latLongRect: unknown;
    languageHints: Array<string>;
    cropHintsParams: unknown;
    productSearchParams: unknown;
    webDetectionParams: unknown;
  }

  export interface EntityAnnotation {
    mid: string;
    locale: string;
    description: string;
    score: number;
    confidence: number;
    topicality: number;
    boundingPoly?: BoundingPoly;
    locations: Array<LocationInfo>;
    properties: Array<Property>;
  }

  /*
   * TextAnnotation contains a structured representation of OCR extracted text.
   * The hierarchy of an OCR extracted text structure is like this:
   * TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol
   */
  export interface TextAnnotation {
    pages: Array<Page>;

    // UTF-8 text detected on the pages.
    text: string;
  }

  // Detected page from OCR.
  export interface Page {
    property: TextProperty;

    /*
     * Page width and height.
     * For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
     */
    width: number;
    height: number;

    blocks: Array<Block>;

    // Confidence of the OCR results on the page. Range [0, 1].
    confidence?: number;
  }

  export interface TextProperty {
    detectedLanguages: Array<DetectedLanguage>;
    detectedBreak?: DetectedBreak;
  }

  export interface Block {
    property?: TextProperty;

    /*
     * The bounding box for the block. The vertices are
     * in the order of top-left, top-right, bottom-right, bottom-left.
     * When a rotation of the bounding box is detected the rotation is represented
     * as around the top-left corner as defined when the text is read in the 'natural' orientation.
     * For example: * when the text is horizontal it might look like:
     *  0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner
     * it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).
     */
    boundingBox: BoundingPoly;
    paragraphs: Array<Paragraph>;
    blockType: BlockType;
    confidence?: number;
  }

  export interface Paragraph {
    property?: TextProperty;
    boundingBox: BoundingPoly;
    words: Array<Word>;
    confidence: number;
  }

  export type BlockType =
    | 'UNKNOWN'
    | 'TEXT'
    | 'TABLE'
    | 'PICTURE'
    | 'RULER'
    | 'BARCODE'
    | string;

  export interface Word {
    property?: TextProperty;
    boundingBox: BoundingPoly;
    symbols: Array<Symbol>;
    confidence: number;
  }

  export interface Symbol {
    property: TextProperty;
    boundingBox?: BoundingPoly;
    text: string;
    confidence: number;
  }

  export interface DetectedLanguage {
    /*
     * The BCP-47 language code, such as "en-US" or "sr-Latn".
     * For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode: string;
    confidence?: number;
  }

  export interface DetectedBreak {
    type: BreakType;

    // True if break prepends the element.
    isPrefix?: boolean;
  }

  export type BreakType =
    | 'UNKNOWN'
    | 'SPACE'
    | 'SURE_SPACE' // Sure space (very wide)
    | 'EOL_SURE_SPACE' // Line-wrapping break
    | 'HYPHEN' // End-line hyphen that is not present in text
    | 'LINE_BREAK';

  export interface BoundingPoly {
    vertices?: Array<Vertex>;
    normalizedVertices?: Array<NormalizedVertex>;
  }

  export interface LocationInfo {
    latLng: LatLng;
  }

  export interface Property {
    name: string;
    value: string;
    uint64Value: number;
  }

  /*
   * A vertex represents a 2D point in the image.
   * NOTE: the vertex coordinates are in the same scale as the original image.
   */
  export interface Vertex {
    x: number;
    y: number;
  }

  /*
   * A vertex represents a 2D point in the image.
   * NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface NormalizedVertex extends Vertex {
    x: number;
    y: number;
  }

  /*
   * An object representing a latitude/longitude pair. This is expressed as a pair of
   * (doubles representing degrees latitude and degrees longitude. Unless specified otherwise,
   * this must conform to the WGS84 standard. Values must be within normalized ranges.
   */
  export interface LatLng {
    // The latitude in degrees. It must be in the range [-90.0, +90.0].
    latitude: number;
    // The longitude in degrees. It must be in the range [-180.0, +180.0].
    longitude: number;
  }
}
