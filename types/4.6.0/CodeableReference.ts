import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Reference } from "./Reference"
/**
* A reference to a resource (by instance), or instead, a reference to a cencept defined in a terminology or ontology (by class).
*/
export interface CodeableReference {
  /**
  * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
  */
  id?: string;

  /**
  * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
  */
  extension?: Extension[];

  /**
  * A reference to a concept - e.g. the information is identified by it's general classto the degree of precision found in the terminology.
  */
  concept?: CodeableConcept;

  /**
  * A reference to a resource the provides exact details about the information being referenced.
  */
  reference?: Reference;

}
