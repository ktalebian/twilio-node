/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { MessageInteractionList } from './participant/messageInteraction';
import { MessageInteractionListInstance } from './participant/messageInteraction';
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the ParticipantList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param sessionSid - Session Sid.
 */
declare function ParticipantList(version: V1, serviceSid: string, sessionSid: string): ParticipantListInstance;

interface ParticipantListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ParticipantContext;
  /**
   * create a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ParticipantListInstanceCreateOptions, callback?: (error: Error | null, item: ParticipantInstance) => any): Promise<ParticipantInstance>;
  /**
   * Streams ParticipantInstance records from the API.
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
  each(opts?: ParticipantListInstanceEachOptions, callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a participant
   *
   * @param sid - A string that uniquely identifies this Participant.
   */
  get(sid: string): ParticipantContext;
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ParticipantListInstanceOptions, callback?: (error: Error | null, items: ParticipantInstance[]) => any): Promise<ParticipantInstance[]>;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ParticipantListInstancePageOptions, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - A human-readable description of this resource.
 * @property identifier - The phone number of this Participant.
 * @property proxyIdentifier - The proxy phone number to use for this Participant.
 * @property proxyIdentifierSid - The proxy_identifier_sid
 */
interface ParticipantListInstanceCreateOptions {
  friendlyName?: string;
  identifier: string;
  proxyIdentifier?: string;
  proxyIdentifierSid?: string;
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
interface ParticipantListInstanceEachOptions {
  callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void;
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
interface ParticipantListInstanceOptions {
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
interface ParticipantListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ParticipantPayload extends ParticipantResource, Page.TwilioResponsePayload {
}

interface ParticipantResource {
  account_sid: string;
  date_created: Date;
  date_deleted: Date;
  date_updated: Date;
  friendly_name: string;
  identifier: string;
  links: string;
  proxy_identifier: string;
  proxy_identifier_sid: string;
  service_sid: string;
  session_sid: string;
  sid: string;
  url: string;
}

interface ParticipantSolution {
  serviceSid?: string;
  sessionSid?: string;
}


declare class ParticipantContext {
  /**
   * Initialize the ParticipantContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param sid - A string that uniquely identifies this Participant.
   */
  constructor(version: V1, serviceSid: string, sessionSid: string, sid: string);

  /**
   * fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ParticipantInstance) => any): Promise<ParticipantInstance>;
  messageInteractions: MessageInteractionListInstance;
  /**
   * remove a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ParticipantInstance) => any): void;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class ParticipantInstance extends SerializableClass {
  /**
   * Initialize the ParticipantContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param sid - A string that uniquely identifies this Participant.
   */
  constructor(version: V1, payload: ParticipantPayload, serviceSid: string, sessionSid: string, sid: string);

  private _proxy: ParticipantContext;
  accountSid: string;
  dateCreated: Date;
  dateDeleted: Date;
  dateUpdated: Date;
  /**
   * fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ParticipantInstance) => any): void;
  friendlyName: string;
  identifier: string;
  links: string;
  /**
   * Access the messageInteractions
   */
  messageInteractions(): MessageInteractionListInstance;
  proxyIdentifier: string;
  proxyIdentifierSid: string;
  /**
   * remove a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ParticipantInstance) => any): void;
  serviceSid: string;
  sessionSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class ParticipantPage extends Page<V1, ParticipantPayload, ParticipantResource, ParticipantInstance> {
  /**
   * Initialize the ParticipantPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ParticipantSolution);

  /**
   * Build an instance of ParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ParticipantPayload): ParticipantInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ParticipantContext, ParticipantInstance, ParticipantList, ParticipantListInstance, ParticipantListInstanceCreateOptions, ParticipantListInstanceEachOptions, ParticipantListInstanceOptions, ParticipantListInstancePageOptions, ParticipantPage, ParticipantPayload, ParticipantResource, ParticipantSolution }
