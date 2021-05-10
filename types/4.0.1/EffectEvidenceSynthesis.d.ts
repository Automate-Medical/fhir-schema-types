import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { dateTime } from "./dateTime";
import { ContactDetail } from "./ContactDetail";
import { markdown } from "./markdown";
import { Annotation } from "./Annotation";
import { UsageContext } from "./UsageContext";
import { CodeableConcept } from "./CodeableConcept";
import { date } from "./date";
import { Period } from "./Period";
import { RelatedArtifact } from "./RelatedArtifact";
import { Reference } from "./Reference";
import { EffectEvidenceSynthesis_SampleSize } from "./EffectEvidenceSynthesis_SampleSize";
import { EffectEvidenceSynthesis_ResultsByExposure } from "./EffectEvidenceSynthesis_ResultsByExposure";
import { EffectEvidenceSynthesis_EffectEstimate } from "./EffectEvidenceSynthesis_EffectEstimate";
import { EffectEvidenceSynthesis_Certainty } from "./EffectEvidenceSynthesis_Certainty";
/**
* The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
*/
export interface EffectEvidenceSynthesis {
    /**
    * This is a EffectEvidenceSynthesis resource
    */
    resourceType: "EffectEvidenceSynthesis";
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
    * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
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
    * An absolute URI that is used to identify this effect evidence synthesis when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this effect evidence synthesis is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the effect evidence synthesis is stored on different servers.
    */
    url?: uri;
    /**
    * Extensions for url
    */
    _url?: Element;
    /**
    * A formal identifier that is used to identify this effect evidence synthesis when it is represented in other formats, or referenced in a specification, model, design or an instance.
    */
    identifier?: Identifier[];
    /**
    * The identifier that is used to identify this version of the effect evidence synthesis when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the effect evidence synthesis author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
    */
    version?: string;
    /**
    * Extensions for version
    */
    _version?: Element;
    /**
    * A natural language name identifying the effect evidence synthesis. This name should be usable as an identifier for the module by machine processing applications such as code generation.
    */
    name?: string;
    /**
    * Extensions for name
    */
    _name?: Element;
    /**
    * A short, descriptive, user-friendly title for the effect evidence synthesis.
    */
    title?: string;
    /**
    * Extensions for title
    */
    _title?: Element;
    /**
    * The status of this effect evidence synthesis. Enables tracking the life-cycle of the content.
    */
    status?: "draft" | "active" | "retired" | "unknown";
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * The date  (and optionally time) when the effect evidence synthesis was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the effect evidence synthesis changes.
    */
    date?: dateTime;
    /**
    * Extensions for date
    */
    _date?: Element;
    /**
    * The name of the organization or individual that published the effect evidence synthesis.
    */
    publisher?: string;
    /**
    * Extensions for publisher
    */
    _publisher?: Element;
    /**
    * Contact details to assist a user in finding and communicating with the publisher.
    */
    contact?: ContactDetail[];
    /**
    * A free text natural language description of the effect evidence synthesis from a consumer's perspective.
    */
    description?: markdown;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * A human-readable string to clarify or explain concepts about the resource.
    */
    note?: Annotation[];
    /**
    * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate effect evidence synthesis instances.
    */
    useContext?: UsageContext[];
    /**
    * A legal or geographic region in which the effect evidence synthesis is intended to be used.
    */
    jurisdiction?: CodeableConcept[];
    /**
    * A copyright statement relating to the effect evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the effect evidence synthesis.
    */
    copyright?: markdown;
    /**
    * Extensions for copyright
    */
    _copyright?: Element;
    /**
    * The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
    */
    approvalDate?: date;
    /**
    * Extensions for approvalDate
    */
    _approvalDate?: Element;
    /**
    * The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
    */
    lastReviewDate?: date;
    /**
    * Extensions for lastReviewDate
    */
    _lastReviewDate?: Element;
    /**
    * The period during which the effect evidence synthesis content was or is planned to be in active use.
    */
    effectivePeriod?: Period;
    /**
    * Descriptive topics related to the content of the EffectEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
    */
    topic?: CodeableConcept[];
    /**
    * An individiual or organization primarily involved in the creation and maintenance of the content.
    */
    author?: ContactDetail[];
    /**
    * An individual or organization primarily responsible for internal coherence of the content.
    */
    editor?: ContactDetail[];
    /**
    * An individual or organization primarily responsible for review of some aspect of the content.
    */
    reviewer?: ContactDetail[];
    /**
    * An individual or organization responsible for officially endorsing the content for use in some setting.
    */
    endorser?: ContactDetail[];
    /**
    * Related artifacts such as additional documentation, justification, or bibliographic references.
    */
    relatedArtifact?: RelatedArtifact[];
    /**
    * Type of synthesis eg meta-analysis.
    */
    synthesisType?: CodeableConcept;
    /**
    * Type of study eg randomized trial.
    */
    studyType?: CodeableConcept;
    /**
    * A reference to a EvidenceVariable resource that defines the population for the research.
    */
    population: Reference;
    /**
    * A reference to a EvidenceVariable resource that defines the exposure for the research.
    */
    exposure: Reference;
    /**
    * A reference to a EvidenceVariable resource that defines the comparison exposure for the research.
    */
    exposureAlternative: Reference;
    /**
    * A reference to a EvidenceVariable resomece that defines the outcome for the research.
    */
    outcome: Reference;
    /**
    * A description of the size of the sample involved in the synthesis.
    */
    sampleSize?: EffectEvidenceSynthesis_SampleSize;
    /**
    * A description of the results for each exposure considered in the effect estimate.
    */
    resultsByExposure?: EffectEvidenceSynthesis_ResultsByExposure[];
    /**
    * The estimated effect of the exposure variant.
    */
    effectEstimate?: EffectEvidenceSynthesis_EffectEstimate[];
    /**
    * A description of the certainty of the effect estimate.
    */
    certainty?: EffectEvidenceSynthesis_Certainty[];
}
