import { Extension } from "./Extension"
import { Reference } from "./Reference"
import { CodeableConcept } from "./CodeableConcept"
/**
* Permission.
*/
export interface Permission_ProcessingActivity {
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
  * If the processing is a transfer, we must capture where it the data allowed or expected to be shared - with a party or person.
  */
  partyReference?: Reference[];

  /**
  * If the processing is a transfer, or involves another party, we must capture where it the data allowed or expected to be shared - with a party or person. This can be a party instance or party type
  * § Purpose – a specific purpose of the data.
  */
  partyCodeableConcept?: CodeableConcept[];

  /**
  * The purpose for which the permission is given.
  */
  purpose?: CodeableConcept[];

}
