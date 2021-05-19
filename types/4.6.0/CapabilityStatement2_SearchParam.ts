import { Extension } from "./Extension"
import { Element } from "./Element"
import { canonical } from "./canonical"
import { code } from "./code"
import { markdown } from "./markdown"
import { CapabilityStatement2_Feature } from "./CapabilityStatement2_Feature"
/**
* A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
*/
export interface CapabilityStatement2_SearchParam {
  /**
  * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
  */
  id?: string;

  /**
  * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
  */
  extension?: Extension[];

  /**
  * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
  * 
  * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
  */
  modifierExtension?: Extension[];

  /**
  * The name of the search parameter used in the interface.
  */
  name?: string;

  /**
  * Extensions for name
  */
  _name?: Element;

  /**
  * An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [SearchParameter.url](searchparameter-definitions.html#SearchParameter.url)). This element SHALL be populated if the search parameter refers to a SearchParameter defined by the FHIR core specification or externally defined IGs.
  */
  definition?: canonical;

  /**
  * The type of value a search parameter refers to, and how the content is interpreted.
  */
  type?: code;

  /**
  * Extensions for type
  */
  _type?: Element;

  /**
  * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
  */
  documentation?: markdown;

  /**
  * Extensions for documentation
  */
  _documentation?: Element;

  /**
  * A statement that affirms support for a feature, in this context.
  */
  feature?: CapabilityStatement2_Feature[];

}
