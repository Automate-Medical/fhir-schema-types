import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Reference } from "./Reference"
import { dateTime } from "./dateTime"
import { Period } from "./Period"
import { Expression } from "./Expression"
import { Permission_ProcessingActivity } from "./Permission_ProcessingActivity"
import { Permission_Justification } from "./Permission_Justification"
/**
* Permission.
*/
export interface Permission {
  /**
  * This is a Permission resource
  */
  resourceType: "Permission";

  /**
  * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
  */
  id?: id;

  /**
  * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
  */
  meta?: Meta;

  /**
  * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
  */
  implicitRules?: uri;

  /**
  * Extensions for implicitRules
  */
  _implicitRules?: Element;

  /**
  * The base language in which the resource is written.
  */
  language?: code;

  /**
  * Extensions for language
  */
  _language?: Element;

  /**
  * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
  */
  text?: Narrative;

  /**
  * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, nor can they have their own independent transaction scope.
  */
  contained?: ResourceList[];

  /**
  * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
  */
  extension?: Extension[];

  /**
  * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
  * 
  * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
  */
  modifierExtension?: Extension[];

  /**
  * Status.
  */
  status?: code;

  /**
  * Extensions for status
  */
  _status?: Element;

  /**
  * grant|refuse.
  */
  intent?: CodeableConcept;

  /**
  * The person or entity that asserts the permission.
  */
  asserter?: Reference;

  /**
  * The date that permission was asserted.
  */
  assertionDate?: dateTime[];

  /**
  * Extensions for assertionDate
  */
  _assertionDate?: Element[];

  /**
  * The period in which the permission is active.
  */
  validity?: Period;

  /**
  * The purpose for which the permission is given.
  */
  purpose?: CodeableConcept[];

  /**
  * This can be 1) the definition of data elements, or 2) a category or label) e.g. “sensitive”. It could also be a c) graph-like definition of a set of data elements.
  */
  dataScope?: Expression[];

  /**
  * A description or definition of which activities are allowed to be done on the data.
  */
  processingActivity?: Permission_ProcessingActivity[];

  /**
  * The asserted justification for using the data.
  */
  justification?: Permission_Justification;

  /**
  * What limits apply to the use of the data.
  */
  usageLimitations?: CodeableConcept[];

}
