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
import { Timing } from "./Timing"
import { dateTime } from "./dateTime"
import { AdverseEvent_Participant } from "./AdverseEvent_Participant"
import { AdverseEvent_SuspectEntity } from "./AdverseEvent_SuspectEntity"
import { AdverseEvent_ContributingFactor } from "./AdverseEvent_ContributingFactor"
import { AdverseEvent_PreventiveAction } from "./AdverseEvent_PreventiveAction"
import { AdverseEvent_MitigatingAction } from "./AdverseEvent_MitigatingAction"
import { AdverseEvent_SupportingInfo } from "./AdverseEvent_SupportingInfo"
/**
* An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research subject.  The unintended effects may require additional monitoring, treatment or hospitalization or may result in death.  The AdverseEvent resource also extends to potential or avoided events that could have had such effects.
*/
export interface AdverseEvent {
  /**
  * This is a AdverseEvent resource
  */
  resourceType: "AdverseEvent";

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
  * Business identifiers assigned to this adverse event by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
  */
  identifier?: Identifier[];

  /**
  * The current state of the adverse event or potential adverse event.
  */
  status?: code;

  /**
  * Extensions for status
  */
  _status?: Element;

  /**
  * Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely.
  */
  actuality?: code;

  /**
  * Extensions for actuality
  */
  _actuality?: Element;

  /**
  * The overall type of event, intended for search and filtering purposes.
  */
  category?: CodeableConcept[];

  /**
  * Specific event that occurred or that was averted, such as patient fall, wrong organ removed, or wrong blood transfused.
  */
  code?: CodeableConcept;

  /**
  * This subject or group impacted by the event.
  */
  subject: Reference;

  /**
  * The Encounter associated with the start of the AdverseEvent.
  */
  encounter?: Reference;

  /**
  * The date (and perhaps time) when the adverse event occurred.
  */
  occurrenceDateTime?: string;

  /**
  * Extensions for occurrenceDateTime
  */
  _occurrenceDateTime?: Element;

  /**
  * The date (and perhaps time) when the adverse event occurred.
  */
  occurrencePeriod?: Period;

  /**
  * The date (and perhaps time) when the adverse event occurred.
  */
  occurrenceTiming?: Timing;

  /**
  * Estimated or actual date the AdverseEvent began, in the opinion of the reporter.
  */
  detected?: dateTime;

  /**
  * Extensions for detected
  */
  _detected?: Element;

  /**
  * The date on which the existence of the AdverseEvent was first recorded.
  */
  recordedDate?: dateTime;

  /**
  * Extensions for recordedDate
  */
  _recordedDate?: Element;

  /**
  * Information about the condition that occurred as a result of the adverse event, such as hives due to the exposure to a substance (for example, a drug or a chemical) or a broken leg as a result of the fall.
  */
  resultingCondition?: Reference[];

  /**
  * The information about where the adverse event occurred.
  */
  location?: Reference;

  /**
  * Assessment whether this event, or averted event, was of clinical importance.
  */
  seriousness?: CodeableConcept;

  /**
  * Describes the type of outcome from the adverse event, such as resolved, recovering, ongoing, resolved-with-sequelae, or fatal.
  */
  outcome?: CodeableConcept[];

  /**
  * Information on who recorded the adverse event.  May be the patient or a practitioner.
  */
  recorder?: Reference;

  /**
  * Indicates who or what participated in the adverse event and how they were involved.
  */
  participant?: AdverseEvent_Participant[];

  /**
  * Describes the entity that is suspected to have caused the adverse event.
  */
  suspectEntity?: AdverseEvent_SuspectEntity[];

  /**
  * The contributing factors suspected to have increased the probability or severity of the adverse event.
  */
  contributingFactor?: AdverseEvent_ContributingFactor[];

  /**
  * Preventive actions that contributed to avoiding the adverse event.
  */
  preventiveAction?: AdverseEvent_PreventiveAction[];

  /**
  * The ameliorating action taken after the adverse event occured in order to reduce the extent of harm.
  */
  mitigatingAction?: AdverseEvent_MitigatingAction[];

  /**
  * Supporting information relevant to the event.
  */
  supportingInfo?: AdverseEvent_SupportingInfo[];

  /**
  * The research study that the subject is enrolled in.
  */
  study?: Reference[];

}
