import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { CodeableConcept } from "./CodeableConcept";
import { Reference } from "./Reference";
import { Quantity } from "./Quantity";
import { MedicationKnowledge_RelatedMedicationKnowledge } from "./MedicationKnowledge_RelatedMedicationKnowledge";
import { MedicationKnowledge_Monograph } from "./MedicationKnowledge_Monograph";
import { MedicationKnowledge_Ingredient } from "./MedicationKnowledge_Ingredient";
import { markdown } from "./markdown";
import { MedicationKnowledge_Cost } from "./MedicationKnowledge_Cost";
import { MedicationKnowledge_MonitoringProgram } from "./MedicationKnowledge_MonitoringProgram";
import { MedicationKnowledge_IndicationGuideline } from "./MedicationKnowledge_IndicationGuideline";
import { MedicationKnowledge_MedicineClassification } from "./MedicationKnowledge_MedicineClassification";
import { MedicationKnowledge_Packaging } from "./MedicationKnowledge_Packaging";
import { MedicationKnowledge_DrugCharacteristic } from "./MedicationKnowledge_DrugCharacteristic";
import { MedicationKnowledge_Regulatory } from "./MedicationKnowledge_Regulatory";
import { MedicationKnowledge_KineticCharacteristic } from "./MedicationKnowledge_KineticCharacteristic";
/**
* Information about a medication that is used to support knowledge.
*/
export interface MedicationKnowledge {
    /**
    * This is a MedicationKnowledge resource
    */
    resourceType: "MedicationKnowledge";
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
    * A code that specifies this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
    */
    code?: CodeableConcept;
    /**
    * A code to indicate if the medication is in active use.  The status refers to the validity about the information of the medication and not to its medicinal properties.
    */
    status?: code;
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * The creator or owner of the knowledge or information about the medication.
    */
    author?: Reference;
    /**
    * Describes the details of the manufacturer of the medication product. This is not intended to represent the distributor of a medication product.  Describes the organization that is responsible for the manufacturing of the item and holds the registration to market the product in a jurisdiction. This might not be the company that physically manufactures the product.  May be known as Market Authorization Holder.
    */
    sponsor?: Reference;
    /**
    * Describes the form of the item.  Powder; tablets; capsule.
    */
    doseForm?: CodeableConcept;
    /**
    * Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.).
    */
    amount?: Quantity;
    /**
    * Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.
    */
    synonym?: string[];
    /**
    * Extensions for synonym
    */
    _synonym?: Element[];
    /**
    * Associated or related medications. For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor.
    */
    relatedMedicationKnowledge?: MedicationKnowledge_RelatedMedicationKnowledge[];
    /**
    * Links to associated medications that could be prescribed, dispensed or administered.
    */
    associatedMedication?: Reference[];
    /**
    * Associated definitions for this medication.
    */
    associatedDefinition?: Reference;
    /**
    * Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).
    */
    productType?: CodeableConcept[];
    /**
    * Associated documentation about the medication.
    */
    monograph?: MedicationKnowledge_Monograph[];
    /**
    * Identifies a particular constituent of interest in the product.
    */
    ingredient?: MedicationKnowledge_Ingredient[];
    /**
    * A device associated with the medication (for example, a drug coated catheter or a drug impregnated dressing).
    */
    device?: Reference[];
    /**
    * The instructions for preparing the medication.
    */
    preparationInstruction?: markdown;
    /**
    * Extensions for preparationInstruction
    */
    _preparationInstruction?: Element;
    /**
    * The intended or approved route of administration.
    */
    intendedRoute?: CodeableConcept[];
    /**
    * The price of the medication.
    */
    cost?: MedicationKnowledge_Cost[];
    /**
    * The program under which the medication is reviewed.
    */
    monitoringProgram?: MedicationKnowledge_MonitoringProgram[];
    /**
    * Guidelines or protocols that are applicable for the administration of the medication based on indication.
    */
    indicationGuideline?: MedicationKnowledge_IndicationGuideline[];
    /**
    * Categorization of the medication within a formulary or classification system.
    */
    medicineClassification?: MedicationKnowledge_MedicineClassification[];
    /**
    * Information that only applies to packages (not products).
    */
    packaging?: MedicationKnowledge_Packaging[];
    /**
    * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
    */
    drugCharacteristic?: MedicationKnowledge_DrugCharacteristic[];
    /**
    * Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
    */
    clinicalUseIssue?: Reference[];
    /**
    * Regulatory information about a medication.
    */
    regulatory?: MedicationKnowledge_Regulatory[];
    /**
    * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
    */
    kineticCharacteristic?: MedicationKnowledge_KineticCharacteristic[];
}
