import { Extension } from "./Extension"
import { Element } from "./Element"
import { CodeableConcept } from "./CodeableConcept"
import { SubstanceSpecification_Official } from "./SubstanceSpecification_Official"
import { Reference } from "./Reference"
/**
* The detailed description of a substance, typically at a level beyond what is used for prescribing.
*/
export interface SubstanceSpecification_Name {
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
  * The actual name.
  */
  name?: string;

  /**
  * Extensions for name
  */
  _name?: Element;

  /**
  * Name type.
  */
  type?: CodeableConcept;

  /**
  * The status of the name.
  */
  status?: CodeableConcept;

  /**
  * If this is the preferred name for this substance.
  */
  preferred?: boolean;

  /**
  * Extensions for preferred
  */
  _preferred?: Element;

  /**
  * Language of the name.
  */
  language?: CodeableConcept[];

  /**
  * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
  */
  domain?: CodeableConcept[];

  /**
  * The jurisdiction where this name applies.
  */
  jurisdiction?: CodeableConcept[];

  /**
  * A synonym of this name.
  */
  synonym?: SubstanceSpecification_Name[];

  /**
  * A translation for this name.
  */
  translation?: SubstanceSpecification_Name[];

  /**
  * Details of the official nature of this name.
  */
  official?: SubstanceSpecification_Official[];

  /**
  * Supporting literature.
  */
  source?: Reference[];

}
