import { id } from "./id"
import { Meta } from "./Meta"
import { uri } from "./uri"
import { Element } from "./Element"
import { code } from "./code"
import { Narrative } from "./Narrative"
import { ResourceList } from "./ResourceList"
import { Extension } from "./Extension"
import { Identifier } from "./Identifier"
import { canonical } from "./canonical"
import { Reference } from "./Reference"
import { dateTime } from "./dateTime"
import { Period } from "./Period"
import { CodeableConcept } from "./CodeableConcept"
import { MeasureReport_Group } from "./MeasureReport_Group"
/**
* The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
*/
export interface MeasureReport {
  /**
  * This is a MeasureReport resource
  */
  resourceType: "MeasureReport";

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
  * A formal identifier that is used to identify this MeasureReport when it is represented in other formats or referenced in a specification, model, design or an instance.
  */
  identifier?: Identifier[];

  /**
  * The MeasureReport status. No data will be available until the MeasureReport status is complete.
  */
  status?: code;

  /**
  * Extensions for status
  */
  _status?: Element;

  /**
  * The type of measure report. This may be an individual report, which provides the score for the measure for an individual member of the population; a subject-listing, which returns the list of members that meet the various criteria in the measure; a summary report, which returns a population count for each of the criteria in the measure; or a data-collection, which enables the MeasureReport to be used to exchange the data-of-interest for a quality measure.
  */
  type?: code;

  /**
  * Extensions for type
  */
  _type?: Element;

  /**
  * Indicates whether the data submitted in an data-exchange report represents a snapshot or incremental update. A snapshot update replaces all previously submitted data for the receiver, whereas an incremental update represents only updated and/or changed data and should be applied as a differential update to the existing submitted data for the receiver.
  */
  dataUpdateType?: code;

  /**
  * Extensions for dataUpdateType
  */
  _dataUpdateType?: Element;

  /**
  * A reference to the Measure that was calculated to produce this report.
  */
  measure: canonical;

  /**
  * Optional subject identifying the individual or individuals the report is for.
  */
  subject?: Reference;

  /**
  * The date this measure report was generated.
  */
  date?: dateTime;

  /**
  * Extensions for date
  */
  _date?: Element;

  /**
  * The individual, location, or organization that is reporting the data.
  */
  reporter?: Reference;

  /**
  * A reference to the vendor who queried the data, calculated results and/or generated the report. The ‘reporting vendor’ is intended to represent the submitting entity when it is not the same as the reporting entity. This extension is used when the Receiver is interested in getting vendor information in the report.
  */
  reportingVendor?: Reference;

  /**
  * The reporting period for which the report was calculated.
  */
  period: Period;

  /**
  * Indicates how the calculation is performed for the measure, including proportion, ratio, continuous-variable, and cohort. The value set is extensible, allowing additional measure scoring types to be represented. It is expected to be the same as the scoring element on the referenced Measure.
  */
  scoring?: CodeableConcept;

  /**
  * Whether improvement in the measure is noted by an increase or decrease in the measure score.
  */
  improvementNotation?: CodeableConcept;

  /**
  * The results of the calculation, one for each population group in the measure.
  */
  group?: MeasureReport_Group[];

  /**
  * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
  */
  evaluatedResource?: Reference[];

}
