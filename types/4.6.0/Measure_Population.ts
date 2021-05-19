import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Element } from "./Element"
import { Expression } from "./Expression"
/**
* The Measure resource provides the definition of a quality measure.
*/
export interface Measure_Population {
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
  * The type of population criteria.
  */
  code?: CodeableConcept;

  /**
  * The human readable description of this population criteria.
  */
  description?: string;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * An expression that specifies the criteria for the population, typically the name of an expression in a library.
  */
  criteria: Expression;

  /**
  * The id of a population element in this measure that provides the input for this population criteria. In most cases, the scoring structure of the measure implies specific relationships (e.g. the Numerator uses the Denominator as the source in a proportion scoring). In some cases, however, multiple possible choices exist and must be resolved explicitly. For example in a ratio measure with multiple initial populations, the denominator must specify which population should be used as the starting point.
  */
  inputPopulationId?: string;

  /**
  * Extensions for inputPopulationId
  */
  _inputPopulationId?: Element;

  /**
  * Specifies which method should be used to aggregate measure observation values. For most scoring types, this is implied by scoring (e.g. a proportion measure counts members of the populations). For continuous variables, however, this information must be specified to ensure correct calculation.
  */
  aggregateMethod?: CodeableConcept;

}
