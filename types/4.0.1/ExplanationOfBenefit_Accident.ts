import { Extension } from "./Extension"
import { date } from "./date"
import { Element } from "./Element"
import { CodeableConcept } from "./CodeableConcept"
import { Address } from "./Address"
import { Reference } from "./Reference"
/**
* This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
*/
export interface ExplanationOfBenefit_Accident {
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
  * Date of an accident event  related to the products and services contained in the claim.
  */
  date?: date;

  /**
  * Extensions for date
  */
  _date?: Element;

  /**
  * The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers.
  */
  type?: CodeableConcept;

  /**
  * The physical location of the accident event.
  */
  locationAddress?: Address;

  /**
  * The physical location of the accident event.
  */
  locationReference?: Reference;

}
