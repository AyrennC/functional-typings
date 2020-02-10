import '@google-cloud/storage';

declare module '@google-cloud/storage' {
  /**
   * An object.
   */
  export interface StorageObject {
    /**
     * Access controls on the object.
     */
    acl?: StorageObjectAccessControl[];
    /**
     * The name of the bucket containing this object.
     */
    bucket?: string;
    /**
     * Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.
     */
    cacheControl?: string;
    /**
     * Number of underlying components that make up this object. Components are accumulated by compose operations.
     */
    componentCount?: number;
    /**
     * Content-Disposition of the object data.
     */
    contentDisposition?: string;
    /**
     * Content-Encoding of the object data.
     */
    contentEncoding?: string;
    /**
     * Content-Language of the object data.
     */
    contentLanguage?: string;
    /**
     * Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream.
     */
    contentType?: string;
    /**
     * CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see Hashes and ETags: Best Practices.
     */
    crc32c?: string;
    /**
     * Metadata of customer-supplied encryption key, if the object is encrypted by such a key.
     */
    customerEncryption?: {
      encryptionAlgorithm?: string;
      keySha256?: string;
    };
    /**
     * HTTP 1.1 Entity tag for the object.
     */
    etag?: string;
    /**
     * Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold&#39;s release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is the loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false.
     */
    eventBasedHold?: boolean;
    /**
     * The content generation of this object. Used for object versioning.
     */
    generation?: string;
    /**
     * The ID of the object, including the bucket name, object name, and generation number.
     */
    id?: string;
    /**
     * The kind of item this is. For objects, this is always storage#object.
     */
    kind?: string;
    /**
     * Cloud KMS Key used to encrypt this object, if the object is encrypted by such a key.
     */
    kmsKeyName?: string;
    /**
     * MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.
     */
    md5Hash?: string;
    /**
     * Media download link.
     */
    mediaLink?: string;
    /**
     * User-provided metadata, in key/value pairs.
     */
    metadata?: {
      [key: string]: string;
    };
    /**
     * The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object.
     */
    metageneration?: string;
    /**
     * The name of the object. Required if not specified by URL parameter.
     */
    name?: string;
    /**
     * The owner of the object. This will always be the uploader of the object.
     */
    owner?: {
      entity?: string;
      entityId?: string;
    };
    /**
     * A server-determined value that specifies the earliest time that the object&#39;s retention period expires. This value is in RFC 3339 format. Note 1: This field is not provided for objects with an active event-based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when temporary hold is set (so that the user can reason about policy without having to first unset the temporary hold).
     */
    retentionExpirationTime?: string;
    /**
     * The link to this object.
     */
    selfLink?: string;
    /**
     * Content-Length of the data in bytes.
     */
    size?: string;
    /**
     * Storage class of the object.
     */
    storageClass?: string;
    /**
     * Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing. Note that unlike event-based hold, temporary hold does not impact retention expiration time of an object.
     */
    temporaryHold?: boolean;
    /**
     * The creation time of the object in RFC 3339 format.
     */
    timeCreated?: string;
    /**
     * The deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.
     */
    timeDeleted?: string;
    /**
     * The time at which the object&#39;s storage class was last changed. When the object is initially created, it will be set to timeCreated.
     */
    timeStorageClassUpdated?: string;
    /**
     * The modification time of the object metadata in RFC 3339 format.
     */
    updated?: string;
  }
  /**
   * An access-control entry.
   */
  export interface StorageObjectAccessControl {
    /**
     * The name of the bucket.
     */
    bucket?: string;
    /**
     * The domain associated with the entity, if any.
     */
    domain?: string;
    /**
     * The email address associated with the entity, if any.
     */
    email?: string;
    /**
     * The entity holding the permission, in one of the following forms:  - user-userId  - user-email  - group-groupId  - group-email  - domain-domain  - project-team-projectId  - allUsers  - allAuthenticatedUsers Examples:  - The user liz@example.com would be user-liz@example.com.  - The group example@googlegroups.com would be group-example@googlegroups.com.  - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
     */
    entity?: string;
    /**
     * The ID for the entity, if any.
     */
    entityId?: string;
    /**
     * HTTP 1.1 Entity tag for the access-control entry.
     */
    etag?: string;
    /**
     * The content generation of the object, if applied to an object.
     */
    generation?: string;
    /**
     * The ID of the access-control entry.
     */
    id?: string;
    /**
     * The kind of item this is. For object access control entries, this is always storage#objectAccessControl.
     */
    kind?: string;
    /**
     * The name of the object, if applied to an object.
     */
    object?: string;
    /**
     * The project team associated with the entity, if any.
     */
    projectTeam?: {
      projectNumber?: string;
      team?: string;
    };
    /**
     * The access permission for the entity.
     */
    role?: string;
    /**
     * The link to this access-control entry.
     */
    selfLink?: string;
  }
  /**
   * An access-control list.
   */
  export interface StorageObjectAccessControls {
    /**
     * The list of items.
     */
    items?: StorageObjectAccessControl[];
    /**
     * The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls.
     */
    kind?: string;
  }
}
