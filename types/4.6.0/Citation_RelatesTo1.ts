import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Element } from "./Element"
import { Identifier } from "./Identifier"
import { Reference } from "./Reference"
import { Attachment } from "./Attachment"
/**
* The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.
*/
export interface Citation_RelatesTo1 {
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
  * How the cited artifact resource relates to the target artifact.
  */
  relationshipType: CodeableConcept;

  /**
  * The clasification of the related artifact.
  */
  targetClassifier?: CodeableConcept[];

  /**
  * The article or artifact that the cited artifact is related to.
  */
  targetUri?: string;

  /**
  * Extensions for targetUri
  */
  _targetUri?: Element;

  /**
  * The article or artifact that the cited artifact is related to.
  */
  targetIdentifier?: Identifier;

  /**
  * The article or artifact that the cited artifact is related to.
  */
  targetReference?: Reference;

  /**
  * The article or artifact that the cited artifact is related to.
  */
  targetAttachment?: Attachment;

}
