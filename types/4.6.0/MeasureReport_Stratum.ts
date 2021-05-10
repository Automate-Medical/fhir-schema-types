import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Element } from "./Element"
import { Quantity } from "./Quantity"
import { Range } from "./Range"
import { Reference } from "./Reference"
import { MeasureReport_Component } from "./MeasureReport_Component"
import { MeasureReport_Population1 } from "./MeasureReport_Population1"
import { Period } from "./Period"
import { Duration } from "./Duration"
/**
* The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
*/
export interface MeasureReport_Stratum {
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
  * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
  */
  valueCodeableConcept?: CodeableConcept;

  /**
  * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
  */
  valueBoolean?: boolean;

  /**
  * Extensions for valueBoolean
  */
  _valueBoolean?: Element;

  /**
  * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
  */
  valueQuantity?: Quantity;

  /**
  * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
  */
  valueRange?: Range;

  /**
  * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
  */
  valueReference?: Reference;

  /**
  * A stratifier component value.
  */
  component?: MeasureReport_Component[];

  /**
  * The populations that make up the stratum, one for each type of population appropriate to the measure.
  */
  population?: MeasureReport_Population1[];

  /**
  * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
  */
  measureScoreQuantity?: Quantity;

  /**
  * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
  */
  measureScoreDateTime?: string;

  /**
  * Extensions for measureScoreDateTime
  */
  _measureScoreDateTime?: Element;

  /**
  * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
  */
  measureScoreCodeableConcept?: CodeableConcept;

  /**
  * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
  */
  measureScorePeriod?: Period;

  /**
  * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
  */
  measureScoreRange?: Range;

  /**
  * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
  */
  measureScoreDuration?: Duration;

}
