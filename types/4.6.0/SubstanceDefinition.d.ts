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
import { markdown } from "./markdown";
import { Reference } from "./Reference";
import { Annotation } from "./Annotation";
import { SubstanceDefinition_Moiety } from "./SubstanceDefinition_Moiety";
import { SubstanceDefinition_Property } from "./SubstanceDefinition_Property";
import { SubstanceDefinition_Structure } from "./SubstanceDefinition_Structure";
import { SubstanceDefinition_Code } from "./SubstanceDefinition_Code";
import { SubstanceDefinition_Name } from "./SubstanceDefinition_Name";
import { SubstanceDefinition_MolecularWeight } from "./SubstanceDefinition_MolecularWeight";
import { SubstanceDefinition_Relationship } from "./SubstanceDefinition_Relationship";
import { SubstanceDefinition_SourceMaterial } from "./SubstanceDefinition_SourceMaterial";
/**
* The detailed description of a substance, typically at a level beyond what is used for prescribing.
*/
export interface SubstanceDefinition {
    /**
    * This is a SubstanceDefinition resource
    */
    resourceType: "SubstanceDefinition";
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
    * Identifier by which this substance is known.
    */
    identifier?: Identifier;
    /**
    * A business level identifier of the substance.
    */
    version?: string;
    /**
    * Extensions for version
    */
    _version?: Element;
    /**
    * Status of substance within the catalogue e.g. approved.
    */
    status?: CodeableConcept;
    /**
    * High level categorization, e.g. polymer or nucleic acid, or food, chemical, biological.
    */
    category?: CodeableConcept;
    /**
    * A lower level classification than category, such as the general types of polymer (linear or branch chain) or type of impurity (process related or contaminant).
    */
    classification?: CodeableConcept[];
    /**
    * If the substance applies to only human or veterinary use.
    */
    domain?: CodeableConcept;
    /**
    * The quality standard, established benchmark, to which substance complies (e.g. USP/NF, Ph. Eur, JP, BP, Company Standard).
    */
    grade?: CodeableConcept[];
    /**
    * Textual description of the substance.
    */
    description?: markdown;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * Supporting literature.
    */
    source?: Reference[];
    /**
    * Textual comment about the substance's catalogue or registry record.
    */
    note?: Annotation[];
    /**
    * A company that makes this substance.
    */
    manufacturer?: Reference[];
    /**
    * A company that supplies this substance.
    */
    supplier?: Reference[];
    /**
    * Moiety, for structural modifications.
    */
    moiety?: SubstanceDefinition_Moiety[];
    /**
    * General specifications for this substance, including how it is related to other substances.
    */
    property?: SubstanceDefinition_Property[];
    /**
    * General information detailing this substance.
    */
    referenceInformation?: Reference;
    /**
    * Structural information.
    */
    structure?: SubstanceDefinition_Structure;
    /**
    * Codes associated with the substance.
    */
    code?: SubstanceDefinition_Code[];
    /**
    * Names applicable to this substance.
    */
    name?: SubstanceDefinition_Name[];
    /**
    * The molecular weight or weight range (for proteins, polymers or nucleic acids).
    */
    molecularWeight?: SubstanceDefinition_MolecularWeight[];
    /**
    * A link between this substance and another, with details of the relationship.
    */
    relationship?: SubstanceDefinition_Relationship[];
    /**
    * Data items specific to nucleic acids.
    */
    nucleicAcid?: Reference;
    /**
    * Data items specific to polymers.
    */
    polymer?: Reference;
    /**
    * Data items specific to proteins.
    */
    protein?: Reference;
    /**
    * Material or taxonomic/anatomical source for the substance.
    */
    sourceMaterial?: SubstanceDefinition_SourceMaterial;
}
