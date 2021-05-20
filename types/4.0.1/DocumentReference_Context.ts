import { Extension } from "./Extension"
import { Reference } from "./Reference"
import { CodeableConcept } from "./CodeableConcept"
import { Period } from "./Period"
/**
* A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
*/
export interface DocumentReference_Context {
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
  * Describes the clinical encounter or type of care that the document content is associated with.
  */
  encounter?: Reference[];

  /**
  * This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the type Code, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
  */
  event?: CodeableConcept[];

  /**
  * The time period over which the service that is described by the document was provided.
  */
  period?: Period;

  /**
  * The kind of facility where the patient was seen.
  */
  facilityType?: CodeableConcept;

  /**
  * This property may convey specifics about the practice setting where the content was created, often reflecting the clinical specialty.
  */
  practiceSetting?: CodeableConcept;

  /**
  * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
  */
  sourcePatientInfo?: Reference;

  /**
  * Related identifiers or resources associated with the DocumentReference.
  */
  related?: Reference[];

}
