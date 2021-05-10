import { Extension } from "./Extension"
import { CodeableReference } from "./CodeableReference"
import { Period } from "./Period"
import { Reference } from "./Reference"
import { CodeableConcept } from "./CodeableConcept"
/**
* Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use, drug catalogs).
*/
export interface MedicinalProductDefinition_Operation {
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
  * The type of manufacturing operation e.g. manufacturing itself, re-packaging. This may be a subtype of some other wider scope of authorized operation, referenced by the authorization attribute.
  */
  type?: CodeableReference;

  /**
  * Date range of applicability.
  */
  effectiveDate?: Period;

  /**
  * The organization or establishment responsible for (or associated with) the particular process or step, examples include the manufacturer, importer, agent.
  */
  organization?: Reference[];

  /**
  * An authorization for this process, either as a logical reference, holding just an identifier, or a full reference to a resource that captures the details. The authorization may possibly apply to several products or a wider scope of process of which this is a part.
  */
  authorization?: Reference;

  /**
  * Specifies whether this particular business or manufacturing process is considered proprietary or confidential.
  */
  confidentialityIndicator?: CodeableConcept;

}
