/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

type RecordingCodec = 'VP8'|'H264'|'OPUS'|'PCMU';

type RecordingFormat = 'mka'|'mkv';

type RecordingStatus = 'processing'|'completed'|'deleted'|'failed';

type RecordingType = 'audio'|'video'|'data';

/**
 * Initialize the RecordingList
 *
 * @param version - Version of the resource
 */
declare function RecordingList(version: V1): RecordingListInstance;

interface RecordingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): RecordingContext;
  /**
   * Streams RecordingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: RecordingListInstanceEachOptions, callback?: (item: RecordingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a recording
   *
   * @param sid - The Recording Sid that uniquely identifies the Recording to fetch.
   */
  get(sid: string): RecordingContext;
  /**
   * Retrieve a single target page of RecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
  /**
   * Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: RecordingListInstanceOptions, callback?: (error: Error | null, items: RecordingInstance[]) => any): Promise<RecordingInstance[]>;
  /**
   * Retrieve a single page of RecordingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: RecordingListInstancePageOptions, callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dateCreatedAfter - Only show Recordings that started on or after this ISO8601 date-time with timezone.
 * @property dateCreatedBefore - Only show Recordings that started before this ISO8601 date-time with timezone.
 * @property done - Function to be called upon completion of streaming
 * @property groupingSid - Only show Recordings that have this GroupingSid.
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property mediaType - Only show Recordings that have this media type.
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property sourceSid - Only show the Recordings with the given source Sid.
 * @property status - Only show Recordings with the given status.
 */
interface RecordingListInstanceEachOptions {
  callback?: (item: RecordingInstance, done: (err?: Error) => void) => void;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  done?: Function;
  groupingSid?: string[];
  limit?: number;
  mediaType?: RecordingType;
  pageSize?: number;
  sourceSid?: string;
  status?: RecordingStatus;
}

/**
 * Options to pass to list
 *
 * @property dateCreatedAfter - Only show Recordings that started on or after this ISO8601 date-time with timezone.
 * @property dateCreatedBefore - Only show Recordings that started before this ISO8601 date-time with timezone.
 * @property groupingSid - Only show Recordings that have this GroupingSid.
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property mediaType - Only show Recordings that have this media type.
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property sourceSid - Only show the Recordings with the given source Sid.
 * @property status - Only show Recordings with the given status.
 */
interface RecordingListInstanceOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  groupingSid?: string[];
  limit?: number;
  mediaType?: RecordingType;
  pageSize?: number;
  sourceSid?: string;
  status?: RecordingStatus;
}

/**
 * Options to pass to page
 *
 * @property dateCreatedAfter - Only show Recordings that started on or after this ISO8601 date-time with timezone.
 * @property dateCreatedBefore - Only show Recordings that started before this ISO8601 date-time with timezone.
 * @property groupingSid - Only show Recordings that have this GroupingSid.
 * @property mediaType - Only show Recordings that have this media type.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property sourceSid - Only show the Recordings with the given source Sid.
 * @property status - Only show Recordings with the given status.
 */
interface RecordingListInstancePageOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  groupingSid?: string[];
  mediaType?: RecordingType;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  sourceSid?: string;
  status?: RecordingStatus;
}

interface RecordingPayload extends RecordingResource, Page.TwilioResponsePayload {
}

interface RecordingResource {
  account_sid: string;
  codec: RecordingCodec;
  container_format: RecordingFormat;
  date_created: Date;
  duration: number;
  grouping_sids: string;
  links: string;
  offset: number;
  sid: string;
  size: number;
  source_sid: string;
  status: RecordingStatus;
  track_name: string;
  type: RecordingType;
  url: string;
}

interface RecordingSolution {
}


declare class RecordingContext {
  /**
   * Initialize the RecordingContext
   *
   * @param version - Version of the resource
   * @param sid - The Recording Sid that uniquely identifies the Recording to fetch.
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RecordingInstance) => any): Promise<RecordingInstance>;
  /**
   * remove a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RecordingInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class RecordingInstance extends SerializableClass {
  /**
   * Initialize the RecordingContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The Recording Sid that uniquely identifies the Recording to fetch.
   */
  constructor(version: V1, payload: RecordingPayload, sid: string);

  private _proxy: RecordingContext;
  accountSid: string;
  codec: RecordingCodec;
  containerFormat: RecordingFormat;
  dateCreated: Date;
  duration: number;
  /**
   * fetch a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RecordingInstance) => any): void;
  groupingSids: string;
  links: string;
  offset: number;
  /**
   * remove a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RecordingInstance) => any): void;
  sid: string;
  size: number;
  sourceSid: string;
  status: RecordingStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  trackName: string;
  type: RecordingType;
  url: string;
}


declare class RecordingPage extends Page<V1, RecordingPayload, RecordingResource, RecordingInstance> {
  /**
   * Initialize the RecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: RecordingSolution);

  /**
   * Build an instance of RecordingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RecordingPayload): RecordingInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { RecordingContext, RecordingInstance, RecordingList, RecordingListInstance, RecordingListInstanceEachOptions, RecordingListInstanceOptions, RecordingListInstancePageOptions, RecordingPage, RecordingPayload, RecordingResource, RecordingSolution }
