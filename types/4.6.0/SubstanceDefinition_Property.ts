import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Element } from "./Element"
import { CodeableReference } from "./CodeableReference"
import { Quantity } from "./Quantity"
import { Range } from "./Range"
import { Reference } from "./Reference"
/**
* The detailed description of a substance, typically at a level beyond what is used for prescribing.
*/
export interface SubstanceDefinition_Property {
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
  * A category for this property, e.g. Physical, Chemical, Enzymatic.
  */
  category?: CodeableConcept;

  /**
  * Property type e.g. viscosity, pH, isoelectric point.
  */
  code?: CodeableConcept;

  /**
  * Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1).
  */
  parameters?: string;

  /**
  * Extensions for parameters
  */
  _parameters?: Element;

  /**
  * A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol).
  */
  definingSubstance?: CodeableReference;

  /**
  * Quantitative value for this property.
  */
  amountQuantity?: Quantity;

  /**
  * Quantitative value for this property.
  */
  amountString?: string;

  /**
  * Extensions for amountString
  */
  _amountString?: Element;

  /**
  * Range of typical values.
  */
  referenceRange?: Range;

  /**
  * Supporting literature.
  */
  source?: Reference[];

}
