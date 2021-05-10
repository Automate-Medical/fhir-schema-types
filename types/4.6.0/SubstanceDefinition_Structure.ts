import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Element } from "./Element"
import { SubstanceDefinition_Isotope } from "./SubstanceDefinition_Isotope"
import { SubstanceDefinition_MolecularWeight } from "./SubstanceDefinition_MolecularWeight"
import { Reference } from "./Reference"
import { SubstanceDefinition_Representation } from "./SubstanceDefinition_Representation"
/**
* The detailed description of a substance, typically at a level beyond what is used for prescribing.
*/
export interface SubstanceDefinition_Structure {
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
  * Stereochemistry type.
  */
  stereochemistry?: CodeableConcept;

  /**
  * Optical activity type.
  */
  opticalActivity?: CodeableConcept;

  /**
  * Molecular formula of this substance, typically using the Hill system.
  */
  molecularFormula?: string;

  /**
  * Extensions for molecularFormula
  */
  _molecularFormula?: Element;

  /**
  * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot.
  */
  molecularFormulaByMoiety?: string;

  /**
  * Extensions for molecularFormulaByMoiety
  */
  _molecularFormulaByMoiety?: Element;

  /**
  * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
  */
  isotope?: SubstanceDefinition_Isotope[];

  /**
  * The molecular weight or weight range (for proteins, polymers or nucleic acids).
  */
  molecularWeight?: SubstanceDefinition_MolecularWeight;

  /**
  * The method used to elucidate the structure or characterization of the drug substance. Examples: X-ray, HPLC, NMR, Peptide mapping, Ligand binding assay.
  */
  technique?: CodeableConcept[];

  /**
  * Supporting literature about the source of information.
  */
  sourceDocument?: Reference[];

  /**
  * A depiction of the structure or characterization of the substance.
  */
  representation?: SubstanceDefinition_Representation[];

}
