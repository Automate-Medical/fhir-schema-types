import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Identifier } from "./Identifier"
import { Element } from "./Element"
import { Reference } from "./Reference"
/**
* The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.
*/
export interface Citation_PublishedIn {
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
  * Kind of container (e.g. Periodical, database, or book).
  */
  type?: CodeableConcept;

  /**
  * Journal identifiers include ISSN, ISO Abbreviation and NLMuniqueID; Book identifiers include ISBN.
  */
  identifier?: Identifier[];

  /**
  * Name of the database or title of the book or journal.
  */
  title?: string;

  /**
  * Extensions for title
  */
  _title?: Element;

  /**
  * Name of the publisher.
  */
  publisher?: Reference;

  /**
  * Geographic location of the publisher.
  */
  publisherLocation?: string;

  /**
  * Extensions for publisherLocation
  */
  _publisherLocation?: Element;

}
