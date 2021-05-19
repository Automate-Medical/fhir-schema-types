import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { dateTime } from "./dateTime"
import { Element } from "./Element"
/**
* A physical entity which is the primary unit of operational and/or administrative interest in a study.
*/
export interface ResearchSubject_Progress {
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
  * Identifies the aspect of the subject's journey that the state refers to.
  */
  type?: CodeableConcept;

  /**
  * The current state of the subject.
  */
  subjectState?: CodeableConcept;

  /**
  * The milestones the subject has passed through.
  */
  milestone?: CodeableConcept;

  /**
  * The reason for the state change.  If coded it should follow the formal subject state model.
  */
  reason?: CodeableConcept;

  /**
  * The date when the new status started.
  */
  startDate?: dateTime;

  /**
  * Extensions for startDate
  */
  _startDate?: Element;

  /**
  * The date when the state ended.
  */
  endDate?: dateTime;

  /**
  * Extensions for endDate
  */
  _endDate?: Element;

}
