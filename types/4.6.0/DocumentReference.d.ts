import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Reference } from "./Reference";
import { CodeableConcept } from "./CodeableConcept";
import { Period } from "./Period";
import { instant } from "./instant";
import { DocumentReference_Attester } from "./DocumentReference_Attester";
import { DocumentReference_RelatesTo } from "./DocumentReference_RelatesTo";
import { markdown } from "./markdown";
import { DocumentReference_Content } from "./DocumentReference_Content";
/**
* A reference to a document of any kind for any purpose. While the term “document” implies a more narrow focus, for this resource this "document" encompasses *any* serialized object with a mime-type, it includes formal patient-centric documents (CDA), clinical notes, scanned paper, non-patient specific documents like policy text, as well as a photo, video, or audio recording acquired or used in healthcare.  The DocumentReference resource provides metadata about the document so that the document can be discovered and managed.  The actual content may be inline base64 encoded data or provided by direct reference.
*/
export interface DocumentReference {
    /**
    * This is a DocumentReference resource
    */
    resourceType: "DocumentReference";
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
    * Other identifiers associated with the document, including version independent identifiers.
    */
    identifier?: Identifier[];
    /**
    * A procedure that is fulfilled in whole or in part by the creation of this media.
    */
    basedOn?: Reference[];
    /**
    * The status of this document reference.
    */
    status?: code;
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * The status of the underlying document.
    */
    docStatus?: code;
    /**
    * Extensions for docStatus
    */
    _docStatus?: Element;
    /**
    * Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced.
    */
    type?: CodeableConcept;
    /**
    * A categorization for the type of document referenced - helps for indexing and searching. This may be implied by or derived from the code specified in the DocumentReference.type.
    */
    category?: CodeableConcept[];
    /**
    * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
    */
    subject?: Reference;
    /**
    * Describes the clinical encounter or type of care that the document content is associated with.
    */
    encounter?: Reference[];
    /**
    * This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the type Code, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
    */
    event?: CodeableConcept[];
    /**
    * The kind of facility where the patient was seen.
    */
    facilityType?: CodeableConcept;
    /**
    * This property may convey specifics about the practice setting where the content was created, often reflecting the clinical specialty.
    */
    practiceSetting?: CodeableConcept;
    /**
    * The time period over which the service that is described by the document was provided.
    */
    period?: Period;
    /**
    * When the document reference was created.
    */
    date?: instant;
    /**
    * Extensions for date
    */
    _date?: Element;
    /**
    * Identifies who is responsible for adding the information to the document.
    */
    author?: Reference[];
    /**
    * A participant who has attested to the accuracy of the composition/document.
    */
    attester?: DocumentReference_Attester[];
    /**
    * Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.
    */
    custodian?: Reference;
    /**
    * Relationships that this document has with other document references that already exist.
    */
    relatesTo?: DocumentReference_RelatesTo[];
    /**
    * Human-readable description of the source document.
    */
    description?: markdown;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * A set of Security-Tag codes specifying the level of privacy/security of the Document. Note that DocumentReference.meta.security contains the security labels of the "reference" to the document, while DocumentReference.securityLabel contains a snapshot of the security labels on the document the reference refers to.
    */
    securityLabel?: CodeableConcept[];
    /**
    * The document and format referenced.  If there are multiple content element repetitions, these must all represent the same document in different format, or attachment metadata.
    */
    content: DocumentReference_Content[];
    /**
    * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
    */
    sourcePatientInfo?: Reference;
    /**
    * Related identifiers or resources associated with the DocumentReference.
    */
    related?: Reference[];
}
