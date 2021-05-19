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
import { dateTime } from "./dateTime";
import { ContactDetail } from "./ContactDetail";
import { markdown } from "./markdown";
import { UsageContext } from "./UsageContext";
import { date } from "./date";
import { Period } from "./Period";
import { RelatedArtifact } from "./RelatedArtifact";
import { canonical } from "./canonical";
import { ResearchElementDefinition_Characteristic } from "./ResearchElementDefinition_Characteristic";
/**
* The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
*/
export interface ResearchElementDefinition {
    /**
    * This is a ResearchElementDefinition resource
    */
    resourceType: "ResearchElementDefinition";
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
    * An absolute URI that is used to identify this research element definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this research element definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the research element definition is stored on different servers.
    */
    url?: uri;
    /**
    * Extensions for url
    */
    _url?: Element;
    /**
    * A formal identifier that is used to identify this research element definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
    */
    identifier?: Identifier[];
    /**
    * The identifier that is used to identify this version of the research element definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the research element definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.
    */
    version?: string;
    /**
    * Extensions for version
    */
    _version?: Element;
    /**
    * A natural language name identifying the research element definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
    */
    name?: string;
    /**
    * Extensions for name
    */
    _name?: Element;
    /**
    * A short, descriptive, user-friendly title for the research element definition.
    */
    title?: string;
    /**
    * Extensions for title
    */
    _title?: Element;
    /**
    * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
    */
    shortTitle?: string;
    /**
    * Extensions for shortTitle
    */
    _shortTitle?: Element;
    /**
    * An explanatory or alternate title for the ResearchElementDefinition giving additional information about its content.
    */
    subtitle?: string;
    /**
    * Extensions for subtitle
    */
    _subtitle?: Element;
    /**
    * The status of this research element definition. Enables tracking the life-cycle of the content.
    */
    status?: "draft" | "active" | "retired" | "unknown";
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * A Boolean value to indicate that this research element definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
    */
    experimental?: boolean;
    /**
    * Extensions for experimental
    */
    _experimental?: Element;
    /**
    * The intended subjects for the ResearchElementDefinition. If this element is not provided, a Patient subject is assumed, but the subject of the ResearchElementDefinition can be anything.
    */
    subjectCodeableConcept?: CodeableConcept;
    /**
    * The intended subjects for the ResearchElementDefinition. If this element is not provided, a Patient subject is assumed, but the subject of the ResearchElementDefinition can be anything.
    */
    subjectReference?: Reference;
    /**
    * The date  (and optionally time) when the research element definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the research element definition changes.
    */
    date?: dateTime;
    /**
    * Extensions for date
    */
    _date?: Element;
    /**
    * The name of the organization or individual that published the research element definition.
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
    * A free text natural language description of the research element definition from a consumer's perspective.
    */
    description?: markdown;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * A human-readable string to clarify or explain concepts about the resource.
    */
    comment?: string[];
    /**
    * Extensions for comment
    */
    _comment?: Element[];
    /**
    * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate research element definition instances.
    */
    useContext?: UsageContext[];
    /**
    * A legal or geographic region in which the research element definition is intended to be used.
    */
    jurisdiction?: CodeableConcept[];
    /**
    * Explanation of why this research element definition is needed and why it has been designed as it has.
    */
    purpose?: markdown;
    /**
    * Extensions for purpose
    */
    _purpose?: Element;
    /**
    * A detailed description, from a clinical perspective, of how the ResearchElementDefinition is used.
    */
    usage?: string;
    /**
    * Extensions for usage
    */
    _usage?: Element;
    /**
    * A copyright statement relating to the research element definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research element definition.
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
    * The period during which the research element definition content was or is planned to be in active use.
    */
    effectivePeriod?: Period;
    /**
    * Descriptive topics related to the content of the ResearchElementDefinition. Topics provide a high-level categorization grouping types of ResearchElementDefinitions that can be useful for filtering and searching.
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
    * A reference to a Library resource containing the formal logic used by the ResearchElementDefinition.
    */
    library?: canonical[];
    /**
    * The type of research element, a population, an exposure, or an outcome.
    */
    type?: "population" | "exposure" | "outcome";
    /**
    * Extensions for type
    */
    _type?: Element;
    /**
    * The type of the outcome (e.g. Dichotomous, Continuous, or Descriptive).
    */
    variableType?: "dichotomous" | "continuous" | "descriptive";
    /**
    * Extensions for variableType
    */
    _variableType?: Element;
    /**
    * A characteristic that defines the members of the research element. Multiple characteristics are applied with "and" semantics.
    */
    characteristic: ResearchElementDefinition_Characteristic[];
}
