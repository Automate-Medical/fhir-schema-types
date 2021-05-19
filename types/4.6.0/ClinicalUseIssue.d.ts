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
import { markdown } from "./markdown";
import { ClinicalUseIssue_Contraindication } from "./ClinicalUseIssue_Contraindication";
import { ClinicalUseIssue_Indication } from "./ClinicalUseIssue_Indication";
import { ClinicalUseIssue_Interaction } from "./ClinicalUseIssue_Interaction";
import { Population } from "./Population";
import { ClinicalUseIssue_UndesirableEffect } from "./ClinicalUseIssue_UndesirableEffect";
/**
* A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.
*/
export interface ClinicalUseIssue {
    /**
    * This is a ClinicalUseIssue resource
    */
    resourceType: "ClinicalUseIssue";
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
    * Business identifier for this issue.
    */
    identifier?: Identifier[];
    /**
    * indication | contraindication | interaction | undesirable-effect | warning.
    */
    type?: code;
    /**
    * Extensions for type
    */
    _type?: Element;
    /**
    * A categorisation of the issue, primarily for dividing warnings into subject heading areas such as "Pregnancy and Lactation", "Overdose", "Effects on Ability to Drive and Use Machines".
    */
    category?: CodeableConcept;
    /**
    * The medication or procedure for which this is an indication.
    */
    subject?: Reference[];
    /**
    * Whether this is a current issue or one that has been retired etc.
    */
    status?: CodeableConcept;
    /**
    * General description of an effect (particularly for a general warning, rather than any of the more specific types such as indication) for when a distinct coded or textual description is not appropriate using  Indication.diseaseSymptomProcedure.text, Contraindication.diseaseSymptomProcedure.text etc. For example "May affect ability to drive".
    */
    description?: markdown;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * Specifics for when this is a contraindication.
    */
    contraindication?: ClinicalUseIssue_Contraindication;
    /**
    * Specifics for when this is an indication.
    */
    indication?: ClinicalUseIssue_Indication;
    /**
    * Specifics for when this is an interaction.
    */
    interaction?: ClinicalUseIssue_Interaction;
    /**
    * The population group to which this applies.
    */
    population?: Population[];
    /**
    * Describe the undesirable effects of the medicinal product.
    */
    undesirableEffect?: ClinicalUseIssue_UndesirableEffect;
}
