import  '@google-cloud/firestore';

declare module '@google-cloud/firestore' {
  /**
   * An object.
   */
  export interface FirestoreObject {
    oldValue: Document;
    updateMask: any;
    value: Document;
  }


  export interface Document {
    name: string
    fields: unknown
    createTime: Date
    updateTime: Date
  }
}
