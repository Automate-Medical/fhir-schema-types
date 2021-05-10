import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Quantity } from "./Quantity"
import { Element } from "./Element"
import { Range } from "./Range"
import { Ratio } from "./Ratio"
import { SampledData } from "./SampledData"
import { Period } from "./Period"
import { Attachment } from "./Attachment"
import { Observation_ReferenceRange } from "./Observation_ReferenceRange"
/**
* Measurements and simple assertions made about a patient, device or other subject.
*/
export interface Observation_Component {
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
  * Describes what was observed. Sometimes this is called the observation "code".
  */
  code: CodeableConcept;

  /**
  * The information determined as a result of making the observation, if the information has a simple value.
  */
  valueQuantity?: Quantity;

  /**
  * The information determined as a result of making the observation, if the information has a simple value.
  */
  valueCodeableConcept?: CodeableConcept;

  /**
  * The information determined as a result of making the observation, if the information has a simple value.
  */
  valueString?: string;

  /**
  * Extensions for valueString
  */
  _valueString?: Element;

  /**
  * The information determined as a result of making the observation, if the information has a simple value.
  */
  valueBoolean?: boolean;

  /**
  * Extensions for valueBoolean
  */
  _valueBoolean?: Element;

  /**
  * The information determined as a result of making the observation, if the information has a simple value.
  */
  valueInteger?: number;

  /**
  * Extensions for valueInteger
  */
  _valueInteger?: Element;

  /**
  * The information determined as a result of making the observation, if the information has a simple value.
  */
  valueRange?: Range;

  /**
  * The information determined as a result of making the observation, if the information has a simple value.
  */
  valueRatio?: Ratio;

  /**
  * The information determined as a result of making the observation, if the information has a simple value.
  */
  valueSampledData?: SampledData;

  /**
  * The information determined as a result of making the observation, if the information has a simple value.
  */
  valueTime?: string;

  /**
  * Extensions for valueTime
  */
  _valueTime?: Element;

  /**
  * The information determined as a result of making the observation, if the information has a simple value.
  */
  valueDateTime?: string;

  /**
  * Extensions for valueDateTime
  */
  _valueDateTime?: Element;

  /**
  * The information determined as a result of making the observation, if the information has a simple value.
  */
  valuePeriod?: Period;

  /**
  * The information determined as a result of making the observation, if the information has a simple value.
  */
  valueAttachment?: Attachment;

  /**
  * Provides a reason why the expected value in the element Observation.component.value[x] is missing.
  */
  dataAbsentReason?: CodeableConcept;

  /**
  * A categorical assessment of an observation value.  For example, high, low, normal.
  */
  interpretation?: CodeableConcept[];

  /**
  * Guidance on how to interpret the value by comparison to a normal or recommended range.
  */
  referenceRange?: Observation_ReferenceRange[];

}
