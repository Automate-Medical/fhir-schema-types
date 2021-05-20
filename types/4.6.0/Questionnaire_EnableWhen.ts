import { Extension } from "./Extension"
import { Element } from "./Element"
import { code } from "./code"
import { Coding } from "./Coding"
import { Quantity } from "./Quantity"
import { Reference } from "./Reference"
/**
* A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
*/
export interface Questionnaire_EnableWhen {
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
  * The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.
  */
  question?: string;

  /**
  * Extensions for question
  */
  _question?: Element;

  /**
  * Specifies the criteria by which the question is enabled.
  */
  operator?: code;

  /**
  * Extensions for operator
  */
  _operator?: Element;

  /**
  * A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension.
  */
  answerBoolean?: boolean;

  /**
  * Extensions for answerBoolean
  */
  _answerBoolean?: Element;

  /**
  * A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension.
  */
  answerDecimal?: number;

  /**
  * Extensions for answerDecimal
  */
  _answerDecimal?: Element;

  /**
  * A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension.
  */
  answerInteger?: number;

  /**
  * Extensions for answerInteger
  */
  _answerInteger?: Element;

  /**
  * A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension.
  */
  answerDate?: string;

  /**
  * Extensions for answerDate
  */
  _answerDate?: Element;

  /**
  * A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension.
  */
  answerDateTime?: string;

  /**
  * Extensions for answerDateTime
  */
  _answerDateTime?: Element;

  /**
  * A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension.
  */
  answerTime?: string;

  /**
  * Extensions for answerTime
  */
  _answerTime?: Element;

  /**
  * A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension.
  */
  answerString?: string;

  /**
  * Extensions for answerString
  */
  _answerString?: Element;

  /**
  * A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension.
  */
  answerCoding?: Coding;

  /**
  * A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension.
  */
  answerQuantity?: Quantity;

  /**
  * A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension.
  */
  answerReference?: Reference;

}
