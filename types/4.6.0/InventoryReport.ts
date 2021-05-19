import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { CodeableConcept } from "./CodeableConcept"
import { dateTime } from "./dateTime"
import { Reference } from "./Reference"
import { Period } from "./Period"
import { InventoryReport_InventoryListing } from "./InventoryReport_InventoryListing"
import { Annotation } from "./Annotation"
/**
* A report of inventory or stock items.
*/
export interface InventoryReport {
  /**
  * This is a InventoryReport resource
  */
  resourceType: "InventoryReport";

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
  * Identifiers for the InventoryReport.
  */
  identifier?: Identifier[];

  /**
  * The status of the inventory check or notification - whether this is draft (e.g. the report is still pending some updates) or active.
  */
  status?: code;

  /**
  * Extensions for status
  */
  _status?: Element;

  /**
  * Whether the report is about the current inventory count (snapshot) or a differential change in inventory (change).
  */
  countType?: code;

  /**
  * Extensions for countType
  */
  _countType?: Element;

  /**
  * What type of operation is being performed - addition or subtraction.
  */
  operationType?: CodeableConcept;

  /**
  * The reason for this count - regular count, ad-hoc count, new arrivals, etc.
  */
  operationTypeReason?: CodeableConcept;

  /**
  * When the report has been submitted.
  */
  reportedDateTime?: dateTime;

  /**
  * Extensions for reportedDateTime
  */
  _reportedDateTime?: Element;

  /**
  * Who submits the report.
  */
  reporter?: Reference;

  /**
  * The period the report refers to.
  */
  reportingPeriod?: Period;

  /**
  * An inventory listing section (grouped by any of the attributes).
  */
  inventoryListing?: InventoryReport_InventoryListing[];

  /**
  * A note associated with the InventoryReport.
  */
  note?: Annotation;

}
