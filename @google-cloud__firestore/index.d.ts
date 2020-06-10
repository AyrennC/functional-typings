import  '@google-cloud/firestore';

declare module '@google-cloud/firestore' {
  import { DocumentReference } from '@google-cloud/firestore';
  /**
   * An object.
   */
  export interface FirestoreObject {
    oldValue: DocumentReference;
    updateMask: any;
    value: DocumentReference;
  }
}
