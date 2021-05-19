import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Element } from "./Element"
import { ExplanationOfBenefit_Financial } from "./ExplanationOfBenefit_Financial"
/**
* This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
*/
export interface ExplanationOfBenefit_BenefitBalance {
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
  * Code to identify the general type of benefits under which products and services are provided.
  */
  category: CodeableConcept;

  /**
  * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
  */
  excluded?: boolean;

  /**
  * Extensions for excluded
  */
  _excluded?: Element;

  /**
  * A short name or tag for the benefit.
  */
  name?: string;

  /**
  * Extensions for name
  */
  _name?: Element;

  /**
  * A richer description of the benefit or services covered.
  */
  description?: string;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
  */
  network?: CodeableConcept;

  /**
  * Indicates if the benefits apply to an individual or to the family.
  */
  unit?: CodeableConcept;

  /**
  * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
  */
  term?: CodeableConcept;

  /**
  * Benefits Used to date.
  */
  financial?: ExplanationOfBenefit_Financial[];

}
