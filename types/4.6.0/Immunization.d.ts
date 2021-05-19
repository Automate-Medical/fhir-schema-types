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
import { Reference } from "./Reference";
import { CodeableConcept } from "./CodeableConcept";
import { date } from "./date";
import { dateTime } from "./dateTime";
import { Quantity } from "./Quantity";
import { Immunization_Performer } from "./Immunization_Performer";
import { Annotation } from "./Annotation";
import { CodeableReference } from "./CodeableReference";
import { Immunization_Education } from "./Immunization_Education";
import { Immunization_Reaction } from "./Immunization_Reaction";
import { Immunization_ProtocolApplied } from "./Immunization_ProtocolApplied";
/**
* Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
*/
export interface Immunization {
    /**
    * This is a Immunization resource
    */
    resourceType: "Immunization";
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
    * A unique identifier assigned to this immunization record.
    */
    identifier?: Identifier[];
    /**
    * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Immunization.
    */
    instantiatesCanonical?: canonical[];
    /**
    * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Immunization.
    */
    instantiatesUri?: uri[];
    /**
    * Extensions for instantiatesUri
    */
    _instantiatesUri?: Element[];
    /**
    * A plan, order or recommendation fulfilled in whole or in part by this immunization.
    */
    basedOn?: Reference[];
    /**
    * Indicates the current status of the immunization event.
    */
    status?: code;
    /**
    * Extensions for status
    */
    _status?: Element;
    /**
    * Indicates the reason the immunization event was not performed.
    */
    statusReason?: CodeableConcept;
    /**
    * Vaccine that was administered or was to be administered.
    */
    vaccineCode: CodeableConcept;
    /**
    * Name of vaccine manufacturer.
    */
    manufacturer?: Reference;
    /**
    * Lot number of the  vaccine product.
    */
    lotNumber?: string;
    /**
    * Extensions for lotNumber
    */
    _lotNumber?: Element;
    /**
    * Date vaccine batch expires.
    */
    expirationDate?: date;
    /**
    * Extensions for expirationDate
    */
    _expirationDate?: Element;
    /**
    * The patient who either received or did not receive the immunization.
    */
    patient: Reference;
    /**
    * The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
    */
    encounter?: Reference;
    /**
    * Date vaccine administered or was to be administered.
    */
    occurrenceDateTime?: string;
    /**
    * Extensions for occurrenceDateTime
    */
    _occurrenceDateTime?: Element;
    /**
    * Date vaccine administered or was to be administered.
    */
    occurrenceString?: string;
    /**
    * Extensions for occurrenceString
    */
    _occurrenceString?: Element;
    /**
    * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
    */
    recorded?: dateTime;
    /**
    * Extensions for recorded
    */
    _recorded?: Element;
    /**
    * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.
    */
    primarySource?: boolean;
    /**
    * Extensions for primarySource
    */
    _primarySource?: Element;
    /**
    * Typically the source of the data when the report of the immunization event is not based on information from the person who administered the vaccine.
    */
    informationSourceCodeableConcept?: CodeableConcept;
    /**
    * Typically the source of the data when the report of the immunization event is not based on information from the person who administered the vaccine.
    */
    informationSourceReference?: Reference;
    /**
    * The service delivery location where the vaccine administration occurred.
    */
    location?: Reference;
    /**
    * Body site where vaccine was administered.
    */
    site?: CodeableConcept;
    /**
    * The path by which the vaccine product is taken into the body.
    */
    route?: CodeableConcept;
    /**
    * The quantity of vaccine product that was administered.
    */
    doseQuantity?: Quantity;
    /**
    * Indicates who performed the immunization event.
    */
    performer?: Immunization_Performer[];
    /**
    * Extra information about the immunization that is not conveyed by the other attributes.
    */
    note?: Annotation[];
    /**
    * Describes why the immunization occurred in coded or textual form, or Indicates another resource (Condition, Observation or DiagnosticReport) whose existence justifies this immunization.
    */
    reason?: CodeableReference[];
    /**
    * Indication if a dose is considered to be subpotent. By default, a dose should be considered to be potent.
    */
    isSubpotent?: boolean;
    /**
    * Extensions for isSubpotent
    */
    _isSubpotent?: Element;
    /**
    * Reason why a dose is considered to be subpotent.
    */
    subpotentReason?: CodeableConcept[];
    /**
    * Educational material presented to the patient (or guardian) at the time of vaccine administration.
    */
    education?: Immunization_Education[];
    /**
    * Indicates a patient's eligibility for a funding program.
    */
    programEligibility?: CodeableConcept[];
    /**
    * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
    */
    fundingSource?: CodeableConcept;
    /**
    * Categorical data indicating that an adverse event is associated in time to an immunization.
    */
    reaction?: Immunization_Reaction[];
    /**
    * The protocol (set of recommendations) being followed by the provider who administered the dose.
    */
    protocolApplied?: Immunization_ProtocolApplied[];
}
