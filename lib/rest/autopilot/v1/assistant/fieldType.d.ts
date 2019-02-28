/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { FieldValueList } from './fieldType/fieldValue';
import { FieldValueListInstance } from './fieldType/fieldValue';
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the FieldTypeList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The unique ID of the Assistant.
 */
declare function FieldTypeList(version: V1, assistantSid: string): FieldTypeListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A user-provided string that identifies this resource. It is non-unique and can be up to 255 characters long.
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 */
interface FieldTypeInstanceUpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
}

interface FieldTypeListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FieldTypeContext;
  /**
   * create a FieldTypeInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: FieldTypeListInstanceCreateOptions, callback?: (error: Error | null, item: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
  /**
   * Streams FieldTypeInstance records from the API.
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
  each(opts?: FieldTypeListInstanceEachOptions, callback?: (item: FieldTypeInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a field_type
   *
   * @param sid - A 34-character string that uniquely identifies this resource.
   */
  get(sid: string): FieldTypeContext;
  /**
   * Retrieve a single target page of FieldTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FieldTypePage) => any): Promise<FieldTypePage>;
  /**
   * Lists FieldTypeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: FieldTypeListInstanceOptions, callback?: (error: Error | null, items: FieldTypeInstance[]) => any): Promise<FieldTypeInstance[]>;
  /**
   * Retrieve a single page of FieldTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: FieldTypeListInstancePageOptions, callback?: (error: Error | null, items: FieldTypePage) => any): Promise<FieldTypePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - A user-provided string that identifies this resource. It is non-unique and can be up to 255 characters long.
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 */
interface FieldTypeListInstanceCreateOptions {
  friendlyName?: string;
  uniqueName: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface FieldTypeListInstanceEachOptions {
  callback?: (item: FieldTypeInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface FieldTypeListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface FieldTypeListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface FieldTypePayload extends FieldTypeResource, Page.TwilioResponsePayload {
}

interface FieldTypeResource {
  account_sid: string;
  assistant_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface FieldTypeSolution {
  assistantSid?: string;
}


declare class FieldTypeContext {
  /**
   * Initialize the FieldTypeContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The unique ID of the Assistant.
   * @param sid - A 34-character string that uniquely identifies this resource.
   */
  constructor(version: V1, assistantSid: string, sid: string);

  /**
   * fetch a FieldTypeInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
  fieldValues: FieldValueListInstance;
  /**
   * remove a FieldTypeInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FieldTypeInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a FieldTypeInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: FieldTypeInstanceUpdateOptions, callback?: (error: Error | null, items: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
}


declare class FieldTypeInstance extends SerializableClass {
  /**
   * Initialize the FieldTypeContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The unique ID of the Assistant.
   * @param sid - A 34-character string that uniquely identifies this resource.
   */
  constructor(version: V1, payload: FieldTypePayload, assistantSid: string, sid: string);

  private _proxy: FieldTypeContext;
  accountSid: string;
  assistantSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a FieldTypeInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FieldTypeInstance) => any): void;
  /**
   * Access the fieldValues
   */
  fieldValues(): FieldValueListInstance;
  friendlyName: string;
  links: string;
  /**
   * remove a FieldTypeInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FieldTypeInstance) => any): void;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a FieldTypeInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: FieldTypeInstanceUpdateOptions, callback?: (error: Error | null, items: FieldTypeInstance) => any): void;
  url: string;
}


declare class FieldTypePage extends Page<V1, FieldTypePayload, FieldTypeResource, FieldTypeInstance> {
  /**
   * Initialize the FieldTypePage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: FieldTypeSolution);

  /**
   * Build an instance of FieldTypeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FieldTypePayload): FieldTypeInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { FieldTypeContext, FieldTypeInstance, FieldTypeList, FieldTypeListInstance, FieldTypeListInstanceCreateOptions, FieldTypeListInstanceEachOptions, FieldTypeListInstanceOptions, FieldTypeListInstancePageOptions, FieldTypePage, FieldTypePayload, FieldTypeResource, FieldTypeSolution }
