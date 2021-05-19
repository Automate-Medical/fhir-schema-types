import { Extension } from "./Extension"
import { positiveInt } from "./positiveInt"
import { Element } from "./Element"
import { Reference } from "./Reference"
/**
* The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
*/
export interface CoverageEligibilityRequest_SupportingInfo {
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
  * A number to uniquely identify supporting information entries.
  */
  sequence?: positiveInt;

  /**
  * Extensions for sequence
  */
  _sequence?: Element;

  /**
  * Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.
  */
  information: Reference;

  /**
  * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
  */
  appliesToAll?: boolean;

  /**
  * Extensions for appliesToAll
  */
  _appliesToAll?: Element;

}
