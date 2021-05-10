import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Identifier } from "./Identifier"
import { instant } from "./instant"
import { unsignedInt } from "./unsignedInt"
import { Bundle_Link } from "./Bundle_Link"
import { Bundle_Entry } from "./Bundle_Entry"
import { Signature } from "./Signature"
/**
* A container for a collection of resources.
*/
export interface Bundle {
  /**
  * This is a Bundle resource
  */
  resourceType: "Bundle";

  /**
  * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
  */
  id?: id;

  /**
  * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
  */
  meta?: Meta;

  /**
  * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
  */
  implicitRules?: uri;

  /**
  * Extensions for implicitRules
  */
  _implicitRules?: Element;

  /**
  * The base language in which the resource is written.
  */
  language?: code;

  /**
  * Extensions for language
  */
  _language?: Element;

  /**
  * A persistent identifier for the bundle that won't change as a bundle is copied from server to server.
  */
  identifier?: Identifier;

  /**
  * Indicates the purpose of this bundle - how it is intended to be used.
  */
  type?: "document" | "message" | "transaction" | "transaction-response" | "batch" | "batch-response" | "history" | "searchset" | "collection";

  /**
  * Extensions for type
  */
  _type?: Element;

  /**
  * The date/time that the bundle was assembled - i.e. when the resources were placed in the bundle.
  */
  timestamp?: instant;

  /**
  * Extensions for timestamp
  */
  _timestamp?: Element;

  /**
  * If a set of search matches, this is the total number of entries of type 'match' across all pages in the search.  It does not include search.mode = 'include' or 'outcome' entries and it does not provide a count of the number of entries in the Bundle.
  */
  total?: unsignedInt;

  /**
  * Extensions for total
  */
  _total?: Element;

  /**
  * A series of links that provide context to this bundle.
  */
  link?: Bundle_Link[];

  /**
  * An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
  */
  entry?: Bundle_Entry[];

  /**
  * Digital Signature - base64 encoded. XML-DSig or a JWT.
  */
  signature?: Signature;

}
