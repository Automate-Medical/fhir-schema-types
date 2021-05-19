import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { canonical } from "./canonical";
import { dateTime } from "./dateTime";
import { Reference } from "./Reference";
import { ContactDetail } from "./ContactDetail";
import { markdown } from "./markdown";
import { UsageContext } from "./UsageContext";
import { CodeableConcept } from "./CodeableConcept";
import { date } from "./date";
import { Period } from "./Period";
import { SubscriptionTopic_ResourceTrigger } from "./SubscriptionTopic_ResourceTrigger";
/**
* Describes a stream of resource state changes identified by trigger criteria and annotated with labels useful to filter projections from this topic.
*/
export interface SubscriptionTopic {
    /**
    * This is a SubscriptionTopic resource
    */
    resourceType: "SubscriptionTopic";
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
    * An absolute URL that is used to identify this SubscriptionTopic when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this Topic is (or will be) published. The URL SHOULD include the major version of the Topic. For more information see [Technical and Business Versions](resource.html#versions).
    */
    url?: uri;
    /**
    * Extensions for url
    */
    _url?: Element;
    /**
    * Business identifiers assigned to this SubscriptionTopic by the performer and/or other systems.  These identifiers remain constant as the resource is updated and propagates from server to server.
    */
    identifier?: Identifier[];
    /**
    * The identifier that is used to identify this version of the SubscriptionTopic when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the Topic author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions are orderable.
    */
    version?: string;
    /**
    * Extensions for version
    */
    _version?: Element;
    /**
    * A short, descriptive, user-friendly title for the SubscriptionTopic, for example, "admission".
    */
    title?: string;
    /**
    * Extensions for title
    */
    _title?: Element;
    /**
    * The canonical URL pointing to another FHIR-defined SubscriptionTopic that is adhered to in whole or in part by this SubscriptionTopic.
    */
    derivedFrom?: canonical[];
    /**
    * The current state of the SubscriptionTopic.
    */
    status?: code;
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * A flag to indicate that this TopSubscriptionTopicic is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
    */
    experimental?: boolean;
    /**
    * Extensions for experimental
    */
    _experimental?: Element;
    /**
    * For draft definitions, indicates the date of initial creation.  For active definitions, represents the date of activation.  For withdrawn definitions, indicates the date of withdrawal.
    */
    date?: dateTime;
    /**
    * Extensions for date
    */
    _date?: Element;
    /**
    * Helps establish the "authority/credibility" of the SubscriptionTopic.  May also allow for contact.
    */
    publisher?: Reference;
    /**
    * Contact details to assist a user in finding and communicating with the publisher.
    */
    contact?: ContactDetail[];
    /**
    * A free text natural language description of the Topic from the consumer's perspective.
    */
    description?: markdown;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of code system definitions.
    */
    useContext?: UsageContext[];
    /**
    * A jurisdiction in which the Topic is intended to be used.
    */
    jurisdiction?: CodeableConcept[];
    /**
    * Explains why this Topic is needed and why it has been designed as it has.
    */
    purpose?: markdown;
    /**
    * Extensions for purpose
    */
    _purpose?: Element;
    /**
    * A copyright statement relating to the SubscriptionTopic and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the SubscriptionTopic.
    */
    copyright?: markdown;
    /**
    * Extensions for copyright
    */
    _copyright?: Element;
    /**
    * The date on which the asset content was approved by the publisher. Approval happens once when the content is officially approved for usage.
    */
    approvalDate?: date;
    /**
    * Extensions for approvalDate
    */
    _approvalDate?: Element;
    /**
    * The date on which the asset content was last reviewed. Review happens periodically after that, but doesn't change the original approval date.
    */
    lastReviewDate?: date;
    /**
    * Extensions for lastReviewDate
    */
    _lastReviewDate?: Element;
    /**
    * The period during which the SubscriptionTopic content was or is planned to be effective.
    */
    effectivePeriod?: Period;
    /**
    * The criteria for including updates to a nominated resource in the subscription topic.  Thie criteria may be just a human readable description and/or a full FHIR search string or FHIRPath expression.
    */
    resourceTrigger?: SubscriptionTopic_ResourceTrigger[];
}
