import { Extension } from "./Extension"
import { id } from "./id"
import { Element } from "./Element"
import { uri } from "./uri"
/**
* A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
*/
export interface StructureDefinition_Mapping {
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
  * An Internal id that is used to identify this mapping set when specific mappings are made.
  */
  identity?: id;

  /**
  * Extensions for identity
  */
  _identity?: Element;

  /**
  * An absolute URI that identifies the specification that this mapping is expressed to.
  */
  uri?: uri;

  /**
  * Extensions for uri
  */
  _uri?: Element;

  /**
  * A name for the specification that is being mapped to.
  */
  name?: string;

  /**
  * Extensions for name
  */
  _name?: Element;

  /**
  * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
  */
  comment?: string;

  /**
  * Extensions for comment
  */
  _comment?: Element;

}
