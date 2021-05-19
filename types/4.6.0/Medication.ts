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
import { Ratio } from "./Ratio"
import { Medication_Ingredient } from "./Medication_Ingredient"
import { Medication_Batch } from "./Medication_Batch"
/**
* This resource is primarily used for the identification and definition of a medication, including ingredients, for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
*/
export interface Medication {
  /**
  * This is a Medication resource
  */
  resourceType: "Medication";

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
  * Business identifier for this medication.
  */
  identifier?: Identifier[];

  /**
  * A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
  */
  code?: CodeableConcept;

  /**
  * A code to indicate if the medication is in active use.
  */
  status?: code;

  /**
  * Extensions for status
  */
  _status?: Element;

  /**
  * Describes the details of the manufacturer of the medication product. This is not intended to represent the distributor of a medication product.  Describes the organization that is responsible for the manufacturing of the item and holds the registration to market the product in a jurisdiction.. This might not be the company that physically manufactures the product.  May be known as Market Authorization Holder.
  */
  sponsor?: Reference;

  /**
  * Describes the form of the item.  Powder; tablets; capsule.
  */
  doseForm?: CodeableConcept;

  /**
  * Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.).
  */
  amount?: Ratio;

  /**
  * Identifies a particular constituent of interest in the product.
  */
  ingredient?: Medication_Ingredient[];

  /**
  * Information that only applies to packages (not products).
  */
  batch?: Medication_Batch;

}
