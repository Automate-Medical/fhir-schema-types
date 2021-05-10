import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { ResearchStudy_Label } from "./ResearchStudy_Label"
import { Reference } from "./Reference"
import { RelatedArtifact } from "./RelatedArtifact"
import { dateTime } from "./dateTime"
import { CodeableConcept } from "./CodeableConcept"
import { ResearchStudy_Focus } from "./ResearchStudy_Focus"
import { markdown } from "./markdown"
import { Period } from "./Period"
import { ContactDetail } from "./ContactDetail"
import { Annotation } from "./Annotation"
import { ResearchStudy_Classification } from "./ResearchStudy_Classification"
import { ResearchStudy_AssociatedParty } from "./ResearchStudy_AssociatedParty"
import { ResearchStudy_StatusDate } from "./ResearchStudy_StatusDate"
import { ResearchStudy_Recruitment } from "./ResearchStudy_Recruitment"
import { ResearchStudy_ComparisonGroup } from "./ResearchStudy_ComparisonGroup"
import { ResearchStudy_Objective } from "./ResearchStudy_Objective"
import { ResearchStudy_OutcomeMeasure } from "./ResearchStudy_OutcomeMeasure"
import { ResearchStudy_WebLocation } from "./ResearchStudy_WebLocation"
/**
* A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques. A ResearchStudy involves the gathering of information about human or animal subjects or stability data about drug products or drug substances.
*/
export interface ResearchStudy {
  /**
  * This is a ResearchStudy resource
  */
  resourceType: "ResearchStudy";

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
  * Canonical identifier for this study resource, represented as a globally unique URI.
  */
  url?: uri;

  /**
  * Extensions for url
  */
  _url?: Element;

  /**
  * Identifiers assigned to this research study by the sponsor or other systems.
  */
  identifier?: Identifier[];

  /**
  * Business identifier for the study record.
  */
  version?: string;

  /**
  * Extensions for version
  */
  _version?: Element;

  /**
  * Name for this study (computer friendly).
  */
  name?: string;

  /**
  * Extensions for name
  */
  _name?: Element;

  /**
  * A short, descriptive label for the study particularly for compouter use.
  */
  title?: string;

  /**
  * Extensions for title
  */
  _title?: Element;

  /**
  * Additional names for the study.
  */
  label?: ResearchStudy_Label[];

  /**
  * The set of steps expected to be performed as part of the execution of the study.
  */
  protocol?: Reference[];

  /**
  * A larger research study of which this particular study is a component or step.
  */
  partOf?: Reference[];

  /**
  * Citations, references and other related documents.
  */
  relatedArtifact?: RelatedArtifact[];

  /**
  * Date the resource last changed.
  */
  date?: dateTime;

  /**
  * Extensions for date
  */
  _date?: Element;

  /**
  * The publication state of the resource (not of the study).
  */
  status?: code;

  /**
  * Extensions for status
  */
  _status?: Element;

  /**
  * The type of study based upon the intent of the study activities. A classification of the intent of the study.
  */
  primaryPurposeType?: CodeableConcept;

  /**
  * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
  */
  phase?: CodeableConcept;

  /**
  * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
  */
  category?: CodeableConcept[];

  /**
  * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
  */
  focus?: ResearchStudy_Focus[];

  /**
  * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
  */
  condition?: CodeableConcept[];

  /**
  * Key terms to aid in searching for or filtering the study.
  */
  keyword?: CodeableConcept[];

  /**
  * Indicates a country, state or other region where the study is taking place.
  */
  location?: CodeableConcept[];

  /**
  * A brief summary of the study description.
  */
  descriptionSummary?: markdown;

  /**
  * Extensions for descriptionSummary
  */
  _descriptionSummary?: Element;

  /**
  * A full description of how the study is being conducted.  For a description of what the study objectives are see ResearchStudy.objective.description.
  */
  description?: markdown;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * Identifies the start date and the expected (or actual, depending on status) end date for the study.
  */
  period?: Period;

  /**
  * Contact details to assist a user in learning more about or engaging with the study.
  */
  contact?: ContactDetail[];

  /**
  * An organization that initiates the investigation and is legally responsible for the study.
  */
  sponsor?: Reference;

  /**
  * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
  */
  principalInvestigator?: Reference;

  /**
  * A facility in which study activities are conducted.
  */
  site?: Reference[];

  /**
  * Comments made about the study by the performer, subject or other participants.
  */
  note?: Annotation[];

  /**
  * Classification for the study.
  */
  classification?: ResearchStudy_Classification[];

  /**
  * Sponsors, collaborators, and other parties.
  */
  associatedParty?: ResearchStudy_AssociatedParty[];

  /**
  * Current status of the study.
  */
  currentState?: CodeableConcept[];

  /**
  * Status of study with time for that status.
  */
  statusDate?: ResearchStudy_StatusDate[];

  /**
  * A description and/or code explaining the premature termination of the study.
  */
  whyStopped?: CodeableConcept;

  /**
  * Target or actual group of participants enrolled in study.
  */
  recruitment?: ResearchStudy_Recruitment;

  /**
  * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
  */
  comparisonGroup?: ResearchStudy_ComparisonGroup[];

  /**
  * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
  */
  objective?: ResearchStudy_Objective[];

  /**
  * An outcome or planned variable to measure during the study.
  */
  outcomeMeasure?: ResearchStudy_OutcomeMeasure[];

  /**
  * Link to one or more sets of results generated by the study.  Could also link to a research registry holding the results such as ClinicalTrials.gov.
  */
  result?: Reference[];

  /**
  * A general storage or archive location for the study.  This may contain an assortment of content which is not specified in advance.
  */
  webLocation?: ResearchStudy_WebLocation[];

}
