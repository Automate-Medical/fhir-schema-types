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
import { Reference } from "./Reference";
import { ContactDetail } from "./ContactDetail";
import { markdown } from "./markdown";
import { UsageContext } from "./UsageContext";
import { CodeableConcept } from "./CodeableConcept";
import { date } from "./date";
import { Period } from "./Period";
import { canonical } from "./canonical";
import { ObservationDefinition_QuantitativeDetails } from "./ObservationDefinition_QuantitativeDetails";
import { ObservationDefinition_QualifiedValue } from "./ObservationDefinition_QualifiedValue";
import { ObservationDefinition_Component } from "./ObservationDefinition_Component";
/**
* Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
*/
export interface ObservationDefinition {
    /**
    * This is a ObservationDefinition resource
    */
    resourceType: "ObservationDefinition";
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
    * An absolute URL that is used to identify this ObservationDefinition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this ObservationDefinition is (or will be) published. The URL SHOULD include the major version of the ObservationDefinition. For more information see Technical and Business Versions.
    */
    url?: uri;
    /**
    * Extensions for url
    */
    _url?: Element;
    /**
    * Business identifiers assigned to this ObservationDefinition. by the performer and/or other systems. These identifiers remain constant as the resource is updated and propagates from server to server.
    */
    identifier?: Identifier;
    /**
    * The identifier that is used to identify this version of the ObservationDefinition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the ObservationDefinition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions are orderable.
    */
    version?: string;
    /**
    * Extensions for version
    */
    _version?: Element;
    /**
    * A natural language name identifying the ObservationDefinition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
    */
    name?: string;
    /**
    * Extensions for name
    */
    _name?: Element;
    /**
    * A short, descriptive, user-friendly title for the ObservationDefinition.
    */
    title?: string;
    /**
    * Extensions for title
    */
    _title?: Element;
    /**
    * The current state of the ObservationDefinition.
    */
    status?: code;
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * A flag to indicate that this ObservationDefinition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
    */
    experimental?: boolean;
    /**
    * Extensions for experimental
    */
    _experimental?: Element;
    /**
    * The date (and optionally time) when the ObservationDefinition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the ObservationDefinition changes.
    */
    date?: dateTime;
    /**
    * Extensions for date
    */
    _date?: Element;
    /**
    * Helps establish the "authority/credibility" of the ObservationDefinition. May also allow for contact.
    */
    publisher?: Reference;
    /**
    * Contact details to assist a user in finding and communicating with the publisher.
    */
    contact?: ContactDetail[];
    /**
    * A free text natural language description of the ObservationDefinition from the consumer's perspective.
    */
    description?: markdown;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate ObservationDefinition instances.
    */
    useContext?: UsageContext[];
    /**
    * A jurisdiction in which the ObservationDefinition is intended to be used.
    */
    jurisdiction?: CodeableConcept[];
    /**
    * Explains why this ObservationDefinition is needed and why it has been designed as it has.
    */
    purpose?: markdown;
    /**
    * Extensions for purpose
    */
    _purpose?: Element;
    /**
    * Copyright statement relating to the ObservationDefinition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the ObservationDefinition.
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
    * The period during which the ObservationDefinition content was or is planned to be effective.
    */
    effectivePeriod?: Period;
    /**
    * The canonical URL pointing to another FHIR-defined ObservationDefinition that is adhered to in whole or in part by this definition.
    */
    derivedFromCanonical?: canonical[];
    /**
    * The URL pointing to an externally-defined observation definition, guideline or other definition that is adhered to in whole or in part by this definition.
    */
    derivedFromUri?: uri[];
    /**
    * Extensions for derivedFromUri
    */
    _derivedFromUri?: Element[];
    /**
    * A code that describes the intended kind of subject of Observation instances conforming to this ObservationDefinition.
    */
    subject?: CodeableConcept;
    /**
    * The type of individual/organization/device that is expected to act upon instances of this definition.
    */
    performerType?: CodeableConcept;
    /**
    * A code that classifies the general type of observation.
    */
    category?: CodeableConcept[];
    /**
    * Describes what will be observed. Sometimes this is called the observation "name".
    */
    code: CodeableConcept;
    /**
    * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
    */
    permittedDataType?: code[];
    /**
    * Extensions for permittedDataType
    */
    _permittedDataType?: Element[];
    /**
    * Multiple results allowed for observations conforming to this ObservationDefinition.
    */
    multipleResultsAllowed?: boolean;
    /**
    * Extensions for multipleResultsAllowed
    */
    _multipleResultsAllowed?: Element;
    /**
    * The site on the subject's body where the  observation is to be made.
    */
    bodySite?: CodeableConcept;
    /**
    * The method or technique used to perform the observation.
    */
    method?: CodeableConcept;
    /**
    * The kind of specimen that this type of observation is produced on.
    */
    specimen?: Reference[];
    /**
    * The measurement model of device or actual device used to produce observations of this type.
    */
    device?: Reference[];
    /**
    * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
    */
    preferredReportName?: string;
    /**
    * Extensions for preferredReportName
    */
    _preferredReportName?: Element;
    /**
    * Characteristics for quantitative results of observations conforming to this ObservationDefinition.
    */
    quantitativeDetails?: ObservationDefinition_QuantitativeDetails;
    /**
    * A set of qualified values associated with a context and a set of conditions -  provides a range for quantitative and ordinal observations and a collection of value sets for qualitative observations.
    */
    qualifiedValue?: ObservationDefinition_QualifiedValue[];
    /**
    * This ObservationDefinition defines a group  observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group.
    */
    hasMember?: Reference[];
    /**
    * Some observations have multiple component observations, expressed as separate code value pairs.
    */
    component?: ObservationDefinition_Component[];
}
