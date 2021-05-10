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
import { markdown } from "./markdown"
import { MarketingStatus } from "./MarketingStatus"
import { CodeableReference } from "./CodeableReference"
import { Reference } from "./Reference"
import { MedicinalProductDefinition_Contact } from "./MedicinalProductDefinition_Contact"
import { MedicinalProductDefinition_Name } from "./MedicinalProductDefinition_Name"
import { MedicinalProductDefinition_CrossReference } from "./MedicinalProductDefinition_CrossReference"
import { MedicinalProductDefinition_Operation } from "./MedicinalProductDefinition_Operation"
import { MedicinalProductDefinition_Package } from "./MedicinalProductDefinition_Package"
import { MedicinalProductDefinition_AdministrableProduct } from "./MedicinalProductDefinition_AdministrableProduct"
/**
* Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use, drug catalogs).
*/
export interface MedicinalProductDefinition {
  /**
  * This is a MedicinalProductDefinition resource
  */
  resourceType: "MedicinalProductDefinition";

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
  * Business identifier for this product. Could be an MPID.
  */
  identifier?: Identifier[];

  /**
  * Regulatory type, e.g. Investigational or Authorized.
  */
  type?: CodeableConcept;

  /**
  * If this medicine applies to human or veterinary uses.
  */
  domain?: CodeableConcept;

  /**
  * A business identifier relating to a specific version of the product, this is commonly used to support revisions to an existing product.
  */
  version?: string;

  /**
  * Extensions for version
  */
  _version?: Element;

  /**
  * The status within the lifecycle of this product record. A high-level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization status.
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
  * General description of this product.
  */
  description?: markdown;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * The dose form for a single part product, or combined form of a multiple part product.
  */
  combinedPharmaceuticalDoseForm?: CodeableConcept;

  /**
  * Description of indication(s) for this product, used when structured indications are not required. In cases where structured indications are required, they are captured using the ClinicalUseIssue resource. An indication is a medical situation for which using the product is appropriate.
  */
  indication?: markdown;

  /**
  * Extensions for indication
  */
  _indication?: Element;

  /**
  * The legal status of supply of the medicinal product as classified by the regulator.
  */
  legalStatusOfSupply?: CodeableConcept;

  /**
  * Whether the Medicinal Product is subject to additional monitoring for regulatory reasons.
  */
  additionalMonitoringIndicator?: CodeableConcept;

  /**
  * Whether the Medicinal Product is subject to special measures for regulatory reasons.
  */
  specialMeasures?: CodeableConcept[];

  /**
  * If authorised for use in children.
  */
  paediatricUseIndicator?: CodeableConcept;

  /**
  * Allows the product to be classified by various systems.
  */
  classification?: CodeableConcept[];

  /**
  * Allows the key product features to be recorded, such as "sugar free", "modified release", "parallel import".
  */
  characteristic?: CodeableConcept[];

  /**
  * Marketing status of the medicinal product, in contrast to marketing authorization.
  */
  marketingStatus?: MarketingStatus[];

  /**
  * The ingredients of this medicinal product - when not detailed in other resources. This is only needed if the ingredients are not specified by the AdministrableProductDefinition or via the PackagedProductDefinition references above. In cases where those levels of detail are not used, the ingredients may be specified directly here.
  */
  ingredient?: CodeableReference[];

  /**
  * Any component of the drug product which is not the chemical entity defined as the drug substance or an excipient in the drug product. This includes process-related impurities and contaminants, product-related impurities including degradation products.
  */
  impurity?: Reference[];

  /**
  * Additional information or supporting documentation about the medicinal product.
  */
  attachedDocument?: Reference[];

  /**
  * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
  */
  masterFile?: Reference[];

  /**
  * A product specific contact, person (in a role), or an organization.
  */
  contact?: MedicinalProductDefinition_Contact[];

  /**
  * Clinical trials or studies that this product is involved in.
  */
  clinicalTrial?: Reference[];

  /**
  * The product's name, including full name and possibly coded parts.
  */
  name: MedicinalProductDefinition_Name[];

  /**
  * Reference to another product, e.g. for linking authorised to investigational product.
  */
  crossReference?: MedicinalProductDefinition_CrossReference[];

  /**
  * A manufacturing or administrative process or step associated with (or performed on) the medicinal product.
  */
  operation?: MedicinalProductDefinition_Operation[];

  /**
  * Package representation for the product.
  */
  package?: MedicinalProductDefinition_Package[];

  /**
  * The product in its final form, mixed from its components if necessary, and ready to be administered to the patient. Also known as the 'Pharmaceutical Product'. Can repeat, for cases where the product has components that result in more than one administrable item.
  */
  administrableProduct?: MedicinalProductDefinition_AdministrableProduct[];

}
