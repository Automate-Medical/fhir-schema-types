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
import { Reference } from "./Reference"
import { dateTime } from "./dateTime"
import { Quantity } from "./Quantity"
import { markdown } from "./markdown"
import { MarketingStatus } from "./MarketingStatus"
import { PackagedProductDefinition_Package } from "./PackagedProductDefinition_Package"
/**
* A medically related item or items, in a container or package.
*/
export interface PackagedProductDefinition {
  /**
  * This is a PackagedProductDefinition resource
  */
  resourceType: "PackagedProductDefinition";

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
  * Unique identifier.
  */
  identifier?: Identifier[];

  /**
  * A name for this package. Typically what it would be listed as in a drug formulary or catalogue, inventory etc.
  */
  name?: string;

  /**
  * Extensions for name
  */
  _name?: Element;

  /**
  * A high level category e.g. medicinal product, raw material, shipping/transport container, etc.
  */
  type?: CodeableConcept;

  /**
  * The product that this is a pack for.
  */
  subject?: Reference[];

  /**
  * The status within the lifecycle of this item. A high level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization or marketing status.
  */
  status?: CodeableConcept;

  /**
  * The date at which the given status became applicable.
  */
  statusDate?: dateTime;

  /**
  * Extensions for statusDate
  */
  _statusDate?: Element;

  /**
  * A total of the amount of items in the package, per item type. This can be considered as the pack size. This attribite is repeatable so that the different item types in one pack type can be counted (e.g. a count of vials and count of syringes). Repeats are not to be used to represent differerent pack sizes (e.g. 20 pack vs 50 pack) - which would be different resource instances. This attribute differs from  containedItem.amount in that it can give a single count of all tablet types in a pack, even when these are different manufactured items.
  */
  containedItemQuantity?: Quantity[];

  /**
  * Textual description. Note that this is not the name of the package or product.
  */
  description?: markdown;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * The legal status of supply of the packaged item as classified by the regulator.
  */
  legalStatusOfSupply?: CodeableConcept;

  /**
  * Marketing information.
  */
  marketingStatus?: MarketingStatus[];

  /**
  * Allows the key features to be recorded, such as "hospital pack", "nurse prescribable", "calendar pack".
  */
  characteristic?: CodeableConcept[];

  /**
  * States whether a drug product is supplied with another item such as a diluent or adjuvant.
  */
  copackagedIndicator?: boolean;

  /**
  * Extensions for copackagedIndicator
  */
  _copackagedIndicator?: Element;

  /**
  * An authorization for this package type.
  */
  marketingAuthorization?: Reference;

  /**
  * Manufacturer of this package type. When there are multiple it means these are all possible manufacturers.
  */
  manufacturer?: Reference[];

  /**
  * Additional information or supporting documentation about the packaged product.
  */
  attachedDocument?: Reference[];

  /**
  * A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (which is not a device or a medication manufactured item).
  */
  package?: PackagedProductDefinition_Package;

}
