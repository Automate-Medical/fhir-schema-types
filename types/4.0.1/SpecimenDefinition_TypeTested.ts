import { Extension } from "./Extension"
import { Element } from "./Element"
import { CodeableConcept } from "./CodeableConcept"
import { SpecimenDefinition_Container } from "./SpecimenDefinition_Container"
import { Duration } from "./Duration"
import { SpecimenDefinition_Handling } from "./SpecimenDefinition_Handling"
/**
* A kind of specimen with associated set of requirements.
*/
export interface SpecimenDefinition_TypeTested {
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
  * Primary of secondary specimen.
  */
  isDerived?: boolean;

  /**
  * Extensions for isDerived
  */
  _isDerived?: Element;

  /**
  * The kind of specimen conditioned for testing expected by lab.
  */
  type?: CodeableConcept;

  /**
  * The preference for this type of conditioned specimen.
  */
  preference?: "preferred" | "alternate";

  /**
  * Extensions for preference
  */
  _preference?: Element;

  /**
  * The specimen's container.
  */
  container?: SpecimenDefinition_Container;

  /**
  * Requirements for delivery and special handling of this kind of conditioned specimen.
  */
  requirement?: string;

  /**
  * Extensions for requirement
  */
  _requirement?: Element;

  /**
  * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
  */
  retentionTime?: Duration;

  /**
  * Criterion for rejection of the specimen in its container by the laboratory.
  */
  rejectionCriterion?: CodeableConcept[];

  /**
  * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
  */
  handling?: SpecimenDefinition_Handling[];

}
