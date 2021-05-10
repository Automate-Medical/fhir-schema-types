import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { CodeableConcept } from "./CodeableConcept"
import { Period } from "./Period"
import { Element } from "./Element"
/**
* Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.
*/
export interface RegulatedAuthorization_Case {
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
  * Identifier by which this case can be referenced.
  */
  identifier?: Identifier;

  /**
  * The defining type of case.
  */
  type?: CodeableConcept;

  /**
  * The status associated with the case.
  */
  status?: CodeableConcept;

  /**
  * Relevant date for this of case.
  */
  datePeriod?: Period;

  /**
  * Relevant date for this of case.
  */
  dateDateTime?: string;

  /**
  * Extensions for dateDateTime
  */
  _dateDateTime?: Element;

  /**
  * Applications submitted to obtain a marketing authorization. Steps within the longer running case or procedure.
  */
  application?: RegulatedAuthorization_Case[];

}
