import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { code } from "./code"
import { Element } from "./Element"
import { Range } from "./Range"
import { canonical } from "./canonical"
/**
* Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
*/
export interface ObservationDefinition_QualifiedValue {
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
  * A concept defining the context for this set of qualified values.
  */
  context?: CodeableConcept;

  /**
  * The target population this  set of qualified values applies to.
  */
  appliesTo?: CodeableConcept[];

  /**
  * The gender this  set of qualified values applies to.
  */
  gender?: code;

  /**
  * Extensions for gender
  */
  _gender?: Element;

  /**
  * The age range this  set of qualified values applies to.
  */
  age?: Range;

  /**
  * The gestational age this  set of qualified values applies to.
  */
  gestationalAge?: Range;

  /**
  * Text based condition for which the the set of qualified values is valid.
  */
  condition?: string;

  /**
  * Extensions for condition
  */
  _condition?: Element;

  /**
  * The category of range of values for continuous or ordinal observations that match the criteria of this set of qualified values.
  */
  rangeCategory?: code;

  /**
  * Extensions for rangeCategory
  */
  _rangeCategory?: Element;

  /**
  * The range of values defined for continuous or ordinal observations that match the criteria of this set of qualified values.
  */
  range?: Range;

  /**
  * The set of valid coded results for qualitative observations  that match the criteria of this set of qualified values.
  */
  validCodedValueSet?: canonical;

  /**
  * The set of normal coded results for qualitative observations  that match the criteria of this set of qualified values.
  */
  normalCodedValueSet?: canonical;

  /**
  * The set of abnormal coded results for qualitative observations  that match the criteria of this set of qualified values.
  */
  abnormalCodedValueSet?: canonical;

  /**
  * The set of critical coded results for qualitative observations  that match the criteria of this set of qualified values.
  */
  criticalCodedValueSet?: canonical;

}
