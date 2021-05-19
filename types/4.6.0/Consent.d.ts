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
import { Attachment } from "./Attachment";
import { Consent_Policy } from "./Consent_Policy";
import { Consent_Verification } from "./Consent_Verification";
import { Consent_Provision } from "./Consent_Provision";
/**
* A record of a healthcare consumer’s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
*/
export interface Consent {
    /**
    * This is a Consent resource
    */
    resourceType: "Consent";
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
    * Unique identifier for this copy of the Consent Statement.
    */
    identifier?: Identifier[];
    /**
    * Indicates the current state of this Consent resource.
    */
    status?: code;
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * A selector of the type of consent being presented with the base being Privacy, Treatment,  or Research.
    */
    scope: CodeableConcept;
    /**
    * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
    */
    category: CodeableConcept[];
    /**
    * The patient/healthcare practitioner to whom this consent applies.
    */
    subject?: Reference;
    /**
    * Date and time the consent instance was agreed to.
    */
    dateTime?: dateTime;
    /**
    * Extensions for dateTime
    */
    _dateTime?: Element;
    /**
    * Either the Grantor, which is the entity responsible for granting the rights listed in a Consent Directive or the Grantee, which is the entity responsible for complying with the Consent Directive, including any obligations or limitations on authorizations and enforcement of prohibitions.
    */
    performer?: Reference[];
    /**
    * The actor that manages the consent through its lifecycle.
    */
    manager?: Reference[];
    /**
    * The actor that controls/enforces the access according to the consent.
    */
    controller?: Reference[];
    /**
    * The source on which this consent statement is based. The source might be a scanned original paper form.
    */
    sourceAttachment?: Attachment[];
    /**
    * A reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.
    */
    sourceReference?: Reference[];
    /**
    * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
    */
    policy?: Consent_Policy[];
    /**
    * A reference to the specific base computable regulation or policy.
    */
    policyRule?: CodeableConcept;
    /**
    * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
    */
    verification?: Consent_Verification[];
    /**
    * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
    */
    provision?: Consent_Provision;
}
