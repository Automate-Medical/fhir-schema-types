import { Extension } from "./Extension"
import { Element } from "./Element"
import { Annotation } from "./Annotation"
import { CodeableConcept } from "./CodeableConcept"
/**
* The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (eg population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.
*/
export interface Evidence_Certainty {
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
  * Textual description of certainty.
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
  * Aspect of certainty being rated.
  */
  type?: CodeableConcept;

  /**
  * Assessment or judgement of the aspect.
  */
  rating?: CodeableConcept;

  /**
  * Individual or group who did the rating.
  */
  rater?: string;

  /**
  * Extensions for rater
  */
  _rater?: Element;

  /**
  * A domain or subdomain of certainty.
  */
  subcomponent?: Evidence_Certainty[];

}
