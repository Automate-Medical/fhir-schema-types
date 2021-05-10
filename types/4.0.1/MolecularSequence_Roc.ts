import { Extension } from "./Extension"
import { integer } from "./integer"
import { Element } from "./Element"
import { decimal } from "./decimal"
/**
* Raw data describing a biological sequence.
*/
export interface MolecularSequence_Roc {
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
  * Invidual data point representing the GQ (genotype quality) score threshold.
  */
  score?: integer[];

  /**
  * Extensions for score
  */
  _score?: Element[];

  /**
  * The number of true positives if the GQ score threshold was set to "score" field value.
  */
  numTP?: integer[];

  /**
  * Extensions for numTP
  */
  _numTP?: Element[];

  /**
  * The number of false positives if the GQ score threshold was set to "score" field value.
  */
  numFP?: integer[];

  /**
  * Extensions for numFP
  */
  _numFP?: Element[];

  /**
  * The number of false negatives if the GQ score threshold was set to "score" field value.
  */
  numFN?: integer[];

  /**
  * Extensions for numFN
  */
  _numFN?: Element[];

  /**
  * Calculated precision if the GQ score threshold was set to "score" field value.
  */
  precision?: decimal[];

  /**
  * Extensions for precision
  */
  _precision?: Element[];

  /**
  * Calculated sensitivity if the GQ score threshold was set to "score" field value.
  */
  sensitivity?: decimal[];

  /**
  * Extensions for sensitivity
  */
  _sensitivity?: Element[];

  /**
  * Calculated fScore if the GQ score threshold was set to "score" field value.
  */
  fMeasure?: decimal[];

  /**
  * Extensions for fMeasure
  */
  _fMeasure?: Element[];

}
