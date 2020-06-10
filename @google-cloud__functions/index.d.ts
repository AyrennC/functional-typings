declare module '@google-cloud/functions' {
  import { StorageObject } from '@google-cloud/storage';
  import { FirestoreObject } from '@google-cloud/firestore';

  export type StorageEventHandler = (
    data: StorageObject,
    context: unknown
  ) => unknown;

  export type FirestoreEventHandler = (
    data: FirestoreObject,
    context: unknown
  ) => unknown;
}
