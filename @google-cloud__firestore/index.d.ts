import  '@google-cloud/firestore';

declare module '@google-cloud/firestore' {
  import { DocumentReference } from '@google-cloud/firestore';
  /**
   * An object.
   */
  export interface FirestoreObject {
    triggerResource: string;
    eventType: string;
    data: {
      oldValue: DocumentReference;
      updateMask: any;
      value: DocumentReference;
    };
  }
}
