import { Extension } from "./Extension"
import { Element } from "./Element"
import { CodeableConcept } from "./CodeableConcept"
import { SubstancePolymer_RepeatUnit } from "./SubstancePolymer_RepeatUnit"
/**
* Properties of a substance specific to it being a polymer.
*/
export interface SubstancePolymer_Repeat {
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
  * A representation of an (average) molecular formula from a polymer.
  */
  averageMolecularFormula?: string;

  /**
  * Extensions for averageMolecularFormula
  */
  _averageMolecularFormula?: Element;

  /**
  * How the quantitative amount of Structural Repeat Units is captured (e.g. Exact, Numeric, Average).
  */
  repeatUnitAmountType?: CodeableConcept;

  /**
  * An SRU - Structural Repeat Unit.
  */
  repeatUnit?: SubstancePolymer_RepeatUnit[];

}
