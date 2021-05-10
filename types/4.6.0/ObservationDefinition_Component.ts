import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { code } from "./code"
import { Element } from "./Element"
import { ObservationDefinition_QuantitativeDetails } from "./ObservationDefinition_QuantitativeDetails"
import { ObservationDefinition_QualifiedValue } from "./ObservationDefinition_QualifiedValue"
/**
* Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
*/
export interface ObservationDefinition_Component {
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
  * Describes what will be observed.
  */
  code: CodeableConcept;

  /**
  * The data types allowed for the value element of the instance of this component observations.
  */
  permittedDataType?: code[];

  /**
  * Extensions for permittedDataType
  */
  _permittedDataType?: Element[];

  /**
  * Characteristics for quantitative results of this observation.
  */
  quantitativeDetails?: ObservationDefinition_QuantitativeDetails;

  /**
  * A set of qualified values associated with a context and a set of conditions -  provides a range for quantitative and ordinal observations and a collection of value sets for qualitative observations.
  */
  qualifiedValue?: ObservationDefinition_QualifiedValue[];

}
