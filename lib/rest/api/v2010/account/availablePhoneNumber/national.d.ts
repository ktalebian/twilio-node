/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the NationalList
 *
 * @param version - Version of the resource
 * @param accountSid - The account_sid
 * @param countryCode - The ISO-3166-1 country code of the country.
 */
declare function NationalList(version: V2010, accountSid: string, countryCode: string): NationalListInstance;

interface NationalListInstance {
  /**
   * Streams NationalInstance records from the API.
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
  each(opts?: NationalListInstanceEachOptions, callback?: (item: NationalInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of NationalInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: NationalPage) => any): Promise<NationalPage>;
  /**
   * Lists NationalInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: NationalListInstanceOptions, callback?: (error: Error | null, items: NationalInstance[]) => any): Promise<NationalInstance[]>;
  /**
   * Retrieve a single page of NationalInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: NationalListInstancePageOptions, callback?: (error: Error | null, items: NationalPage) => any): Promise<NationalPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property areaCode - The area code of the phone numbers to read
 * @property beta - Whether to read phone numbers new to the Twilio platform
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property contains - The pattern on which to match phone numbers
 * @property distance - The search radius, in miles, for a near_ query. (US/Canada only)
 * @property done - Function to be called upon completion of streaming
 * @property excludeAllAddressRequired - Whether to exclude phone numbers that require an Address
 * @property excludeForeignAddressRequired - Whether to exclude phone numbers that require a foreign address
 * @property excludeLocalAddressRequired - Whether to exclude phone numbers that require a local address
 * @property faxEnabled - Whether the phone numbers can receive faxes
 * @property inLata - Limit results to a specific local access and transport area. (US/Canada only)
 * @property inLocality - Limit results to a particular locality
 * @property inPostalCode - Limit results to a particular postal code. (US/Canada only)
 * @property inRateCenter - Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
 * @property inRegion - Limit results to a particular region. (US/Canada only)
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property mmsEnabled - Whether the phone numbers can receive MMS messages
 * @property nearLatLong - Given a latitude/longitude pair lat,long find geographically close numbers within distance miles. (US/Canada only)
 * @property nearNumber - Given a phone number, find a geographically close number within distance miles. (US/Canada only)
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property smsEnabled - Whether the phone numbers can receive text messages
 * @property voiceEnabled - Whether the phone numbers can receive calls.
 */
interface NationalListInstanceEachOptions {
  areaCode?: number;
  beta?: boolean;
  callback?: (item: NationalInstance, done: (err?: Error) => void) => void;
  contains?: string;
  distance?: number;
  done?: Function;
  excludeAllAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  faxEnabled?: boolean;
  inLata?: string;
  inLocality?: string;
  inPostalCode?: string;
  inRateCenter?: string;
  inRegion?: string;
  limit?: number;
  mmsEnabled?: boolean;
  nearLatLong?: string;
  nearNumber?: string;
  pageSize?: number;
  smsEnabled?: boolean;
  voiceEnabled?: boolean;
}

/**
 * Options to pass to list
 *
 * @property areaCode - The area code of the phone numbers to read
 * @property beta - Whether to read phone numbers new to the Twilio platform
 * @property contains - The pattern on which to match phone numbers
 * @property distance - The search radius, in miles, for a near_ query. (US/Canada only)
 * @property excludeAllAddressRequired - Whether to exclude phone numbers that require an Address
 * @property excludeForeignAddressRequired - Whether to exclude phone numbers that require a foreign address
 * @property excludeLocalAddressRequired - Whether to exclude phone numbers that require a local address
 * @property faxEnabled - Whether the phone numbers can receive faxes
 * @property inLata - Limit results to a specific local access and transport area. (US/Canada only)
 * @property inLocality - Limit results to a particular locality
 * @property inPostalCode - Limit results to a particular postal code. (US/Canada only)
 * @property inRateCenter - Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
 * @property inRegion - Limit results to a particular region. (US/Canada only)
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property mmsEnabled - Whether the phone numbers can receive MMS messages
 * @property nearLatLong - Given a latitude/longitude pair lat,long find geographically close numbers within distance miles. (US/Canada only)
 * @property nearNumber - Given a phone number, find a geographically close number within distance miles. (US/Canada only)
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property smsEnabled - Whether the phone numbers can receive text messages
 * @property voiceEnabled - Whether the phone numbers can receive calls.
 */
interface NationalListInstanceOptions {
  areaCode?: number;
  beta?: boolean;
  contains?: string;
  distance?: number;
  excludeAllAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  faxEnabled?: boolean;
  inLata?: string;
  inLocality?: string;
  inPostalCode?: string;
  inRateCenter?: string;
  inRegion?: string;
  limit?: number;
  mmsEnabled?: boolean;
  nearLatLong?: string;
  nearNumber?: string;
  pageSize?: number;
  smsEnabled?: boolean;
  voiceEnabled?: boolean;
}

/**
 * Options to pass to page
 *
 * @property areaCode - The area code of the phone numbers to read
 * @property beta - Whether to read phone numbers new to the Twilio platform
 * @property contains - The pattern on which to match phone numbers
 * @property distance - The search radius, in miles, for a near_ query. (US/Canada only)
 * @property excludeAllAddressRequired - Whether to exclude phone numbers that require an Address
 * @property excludeForeignAddressRequired - Whether to exclude phone numbers that require a foreign address
 * @property excludeLocalAddressRequired - Whether to exclude phone numbers that require a local address
 * @property faxEnabled - Whether the phone numbers can receive faxes
 * @property inLata - Limit results to a specific local access and transport area. (US/Canada only)
 * @property inLocality - Limit results to a particular locality
 * @property inPostalCode - Limit results to a particular postal code. (US/Canada only)
 * @property inRateCenter - Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
 * @property inRegion - Limit results to a particular region. (US/Canada only)
 * @property mmsEnabled - Whether the phone numbers can receive MMS messages
 * @property nearLatLong - Given a latitude/longitude pair lat,long find geographically close numbers within distance miles. (US/Canada only)
 * @property nearNumber - Given a phone number, find a geographically close number within distance miles. (US/Canada only)
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property smsEnabled - Whether the phone numbers can receive text messages
 * @property voiceEnabled - Whether the phone numbers can receive calls.
 */
interface NationalListInstancePageOptions {
  areaCode?: number;
  beta?: boolean;
  contains?: string;
  distance?: number;
  excludeAllAddressRequired?: boolean;
  excludeForeignAddressRequired?: boolean;
  excludeLocalAddressRequired?: boolean;
  faxEnabled?: boolean;
  inLata?: string;
  inLocality?: string;
  inPostalCode?: string;
  inRateCenter?: string;
  inRegion?: string;
  mmsEnabled?: boolean;
  nearLatLong?: string;
  nearNumber?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  smsEnabled?: boolean;
  voiceEnabled?: boolean;
}

interface NationalPayload extends NationalResource, Page.TwilioResponsePayload {
}

interface NationalResource {
  address_requirements: string;
  beta: boolean;
  capabilities: string;
  friendly_name: string;
  iso_country: string;
  lata: string;
  latitude: number;
  locality: string;
  longitude: number;
  phone_number: string;
  postal_code: string;
  rate_center: string;
  region: string;
}

interface NationalSolution {
  accountSid?: string;
  countryCode?: string;
}


declare class NationalInstance extends SerializableClass {
  /**
   * Initialize the NationalContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param countryCode - The ISO-3166-1 country code of the country.
   */
  constructor(version: V2010, payload: NationalPayload, accountSid: string, countryCode: string);

  addressRequirements: string;
  beta: boolean;
  capabilities: string;
  friendlyName: string;
  isoCountry: string;
  lata: string;
  latitude: number;
  locality: string;
  longitude: number;
  phoneNumber: string;
  postalCode: string;
  rateCenter: string;
  region: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class NationalPage extends Page<V2010, NationalPayload, NationalResource, NationalInstance> {
  /**
   * Initialize the NationalPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: NationalSolution);

  /**
   * Build an instance of NationalInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NationalPayload): NationalInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { NationalInstance, NationalList, NationalListInstance, NationalListInstanceEachOptions, NationalListInstanceOptions, NationalListInstancePageOptions, NationalPage, NationalPayload, NationalResource, NationalSolution }
