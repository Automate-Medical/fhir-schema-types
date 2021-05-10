import { Extension } from "./Extension"
import { Element } from "./Element"
import { CodeableConcept } from "./CodeableConcept"
import { integer } from "./integer"
import { SubstancePolymer_DegreeOfPolymerisation } from "./SubstancePolymer_DegreeOfPolymerisation"
import { SubstancePolymer_StructuralRepresentation } from "./SubstancePolymer_StructuralRepresentation"
/**
* Properties of a substance specific to it being a polymer.
*/
export interface SubstancePolymer_RepeatUnit {
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
  * Structural repeat units are essential elements for defining polymers.
  */
  unit?: string;

  /**
  * Extensions for unit
  */
  _unit?: Element;

  /**
  * The orientation of the polymerisation, e.g. head-tail, head-head, random.
  */
  orientation?: CodeableConcept;

  /**
  * Number of repeats of this unit.
  */
  amount?: integer;

  /**
  * Extensions for amount
  */
  _amount?: Element;

  /**
  * Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described.
  */
  degreeOfPolymerisation?: SubstancePolymer_DegreeOfPolymerisation[];

  /**
  * A graphical structure for this SRU.
  */
  structuralRepresentation?: SubstancePolymer_StructuralRepresentation[];

}
