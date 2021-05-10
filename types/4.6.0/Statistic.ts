import { Extension } from "./Extension"
import { Element } from "./Element"
import { Annotation } from "./Annotation"
import { CodeableConcept } from "./CodeableConcept"
import { Quantity } from "./Quantity"
import { unsignedInt } from "./unsignedInt"
import { Statistic_SampleSize } from "./Statistic_SampleSize"
import { Statistic_AttributeEstimate } from "./Statistic_AttributeEstimate"
import { Statistic_ModelCharacteristic } from "./Statistic_ModelCharacteristic"
/**
* A fact or piece of data from a  study of a large quantity of numerical data.  A mathematical or quantified characteristic of a group of observations.
*/
export interface Statistic {
  /**
  * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
  */
  id?: string;

  /**
  * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
  */
  extension?: Extension[];

  /**
  * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
  * 
  * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
  */
  modifierExtension?: Extension[];

  /**
  * A description of the content value of the statistic.
  */
  description?: string;

  /**
  * Extensions for description
  */
  _description?: Element;

  /**
  * Footnotes and/or explanatory notes.
  */
  note?: Annotation[];

  /**
  * Type of statistic, eg relative risk.
  */
  statisticType?: CodeableConcept;

  /**
  * When the measured variable is handled categorically, the category element is used to define which category the statistic is reporting.
  */
  category?: CodeableConcept;

  /**
  * Statistic value.
  */
  quantity?: Quantity;

  /**
  * The number of events associated with the statistic, where the unit of analysis is different from numberAffected, sampleSize.knownDataCount and sampleSize.numberOfParticipants.
  */
  numberOfEvents?: unsignedInt;

  /**
  * Extensions for numberOfEvents
  */
  _numberOfEvents?: Element;

  /**
  * The number of participants affected where the unit of analysis is the same as sampleSize.knownDataCount and sampleSize.numberOfParticipants.
  */
  numberAffected?: unsignedInt;

  /**
  * Extensions for numberAffected
  */
  _numberAffected?: Element;

  /**
  * Number of samples in the statistic.
  */
  sampleSize?: Statistic_SampleSize;

  /**
  * A statistical attribute of the statistic such as a measure of heterogeneity.
  */
  attributeEstimate?: Statistic_AttributeEstimate[];

  /**
  * A component of the method to generate the statistic.
  */
  modelCharacteristic?: Statistic_ModelCharacteristic[];

}
