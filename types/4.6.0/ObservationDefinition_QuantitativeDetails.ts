import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { decimal } from "./decimal"
import { Element } from "./Element"
import { integer } from "./integer"
/**
* Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
*/
export interface ObservationDefinition_QuantitativeDetails {
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
  * Primary unit used to report quantitative results of observations conforming to this ObservationDefinition.
  */
  unit?: CodeableConcept;

  /**
  * Secondary unit used to report quantitative results of observations conforming to this ObservationDefinition.
  */
  customaryUnit?: CodeableConcept;

  /**
  * Factor for converting value expressed with primary unit to value expressed with secondary unit.
  */
  conversionFactor?: decimal;

  /**
  * Extensions for conversionFactor
  */
  _conversionFactor?: Element;

  /**
  * Number of digits after decimal separator when the results of such observations are of type Quantity.
  */
  decimalPrecision?: integer;

  /**
  * Extensions for decimalPrecision
  */
  _decimalPrecision?: Element;

}
