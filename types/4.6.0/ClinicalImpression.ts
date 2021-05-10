import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { CodeableConcept } from "./CodeableConcept"
import { Reference } from "./Reference"
import { Period } from "./Period"
import { dateTime } from "./dateTime"
import { ClinicalImpression_Finding } from "./ClinicalImpression_Finding"
import { Annotation } from "./Annotation"
/**
* A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
*/
export interface ClinicalImpression {
  /**
  * This is a ClinicalImpression resource
  */
  resourceType: "ClinicalImpression";

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
  * Business identifiers assigned to this clinical impression by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
  */
  identifier?: Identifier[];

  /**
  * Identifies the workflow status of the assessment.
  */
  status?: code;

  /**
  * Extensions for status
  */
  _status?: Element;

  /**
  * Captures the reason for the current state of the ClinicalImpression.
  */
  statusReason?: CodeableConcept;

  /**
  * A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.
  */
  description?: string;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * The patient or group of individuals assessed as part of this record.
  */
  subject: Reference;

  /**
  * The Encounter during which this ClinicalImpression was created or to which the creation of this record is tightly associated.
  */
  encounter?: Reference;

  /**
  * The point in time or period over which the subject was assessed.
  */
  effectiveDateTime?: string;

  /**
  * Extensions for effectiveDateTime
  */
  _effectiveDateTime?: Element;

  /**
  * The point in time or period over which the subject was assessed.
  */
  effectivePeriod?: Period;

  /**
  * Indicates when the documentation of the assessment was complete.
  */
  date?: dateTime;

  /**
  * Extensions for date
  */
  _date?: Element;

  /**
  * The clinician performing the assessment.
  */
  performer?: Reference;

  /**
  * A reference to the last assessment that was conducted on this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes.
  */
  previous?: Reference;

  /**
  * A list of the relevant problems/conditions for a patient.
  */
  problem?: Reference[];

  /**
  * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
  */
  protocol?: uri[];

  /**
  * Extensions for protocol
  */
  _protocol?: Element[];

  /**
  * A text summary of the investigations and the diagnosis.
  */
  summary?: string;

  /**
  * Extensions for summary
  */
  _summary?: Element;

  /**
  * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
  */
  finding?: ClinicalImpression_Finding[];

  /**
  * Estimate of likely outcome.
  */
  prognosisCodeableConcept?: CodeableConcept[];

  /**
  * RiskAssessment expressing likely outcome.
  */
  prognosisReference?: Reference[];

  /**
  * Information supporting the clinical impression, which can contain investigation results.
  */
  supportingInfo?: Reference[];

  /**
  * Commentary about the impression, typically recorded after the impression itself was made, though supplemental notes by the original author could also appear.
  */
  note?: Annotation[];

}
