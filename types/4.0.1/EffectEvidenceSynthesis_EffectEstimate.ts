import { Extension } from "./Extension"
import { Element } from "./Element"
import { CodeableConcept } from "./CodeableConcept"
import { decimal } from "./decimal"
import { EffectEvidenceSynthesis_PrecisionEstimate } from "./EffectEvidenceSynthesis_PrecisionEstimate"
/**
* The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
*/
export interface EffectEvidenceSynthesis_EffectEstimate {
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
  * Human-readable summary of effect estimate.
  */
  description?: string;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * Examples include relative risk and mean difference.
  */
  type?: CodeableConcept;

  /**
  * Used to define variant exposure states such as low-risk state.
  */
  variantState?: CodeableConcept;

  /**
  * The point estimate of the effect estimate.
  */
  value?: decimal;

  /**
  * Extensions for value
  */
  _value?: Element;

  /**
  * Specifies the UCUM unit for the outcome.
  */
  unitOfMeasure?: CodeableConcept;

  /**
  * A description of the precision of the estimate for the effect.
  */
  precisionEstimate?: EffectEvidenceSynthesis_PrecisionEstimate[];

}
