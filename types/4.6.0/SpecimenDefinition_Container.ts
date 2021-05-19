import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Element } from "./Element"
import { Quantity } from "./Quantity"
import { SpecimenDefinition_Additive } from "./SpecimenDefinition_Additive"
/**
* A kind of specimen with associated set of requirements.
*/
export interface SpecimenDefinition_Container {
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
  * The type of material of the container.
  */
  material?: CodeableConcept;

  /**
  * The type of container used to contain this kind of specimen.
  */
  type?: CodeableConcept;

  /**
  * Color of container cap.
  */
  cap?: CodeableConcept;

  /**
  * The textual description of the kind of container.
  */
  description?: string;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * The capacity (volume or other measure) of this kind of container.
  */
  capacity?: Quantity;

  /**
  * The minimum volume to be conditioned in the container.
  */
  minimumVolumeQuantity?: Quantity;

  /**
  * The minimum volume to be conditioned in the container.
  */
  minimumVolumeString?: string;

  /**
  * Extensions for minimumVolumeString
  */
  _minimumVolumeString?: Element;

  /**
  * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
  */
  additive?: SpecimenDefinition_Additive[];

  /**
  * Special processing that should be applied to the container for this kind of specimen.
  */
  preparation?: string;

  /**
  * Extensions for preparation
  */
  _preparation?: Element;

}
