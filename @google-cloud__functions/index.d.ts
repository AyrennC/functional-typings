declare module '@google-cloud/functions' {
  import { StorageObject } from '@google-cloud/storage';
  export type StorageEventHandler = (
    data: StorageObject,
    context: unknown
  ) => unknown;
}
