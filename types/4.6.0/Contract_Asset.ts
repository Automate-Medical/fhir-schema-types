import { Extension } from "./Extension"
import { CodeableConcept } from "./CodeableConcept"
import { Reference } from "./Reference"
import { Coding } from "./Coding"
import { Contract_Context } from "./Contract_Context"
import { Element } from "./Element"
import { Period } from "./Period"
import { Contract_Answer } from "./Contract_Answer"
import { unsignedInt } from "./unsignedInt"
import { Contract_ValuedItem } from "./Contract_ValuedItem"
/**
* Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
*/
export interface Contract_Asset {
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
  * Differentiates the kind of the asset .
  */
  scope?: CodeableConcept;

  /**
  * Target entity type about which the term may be concerned.
  */
  type?: CodeableConcept[];

  /**
  * Associated entities.
  */
  typeReference?: Reference[];

  /**
  * May be a subtype or part of an offered asset.
  */
  subtype?: CodeableConcept[];

  /**
  * Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree.
  */
  relationship?: Coding;

  /**
  * Circumstance of the asset.
  */
  context?: Contract_Context[];

  /**
  * Description of the quality and completeness of the asset that imay be a factor in its valuation.
  */
  condition?: string;

  /**
  * Extensions for condition
  */
  _condition?: Element;

  /**
  * Type of Asset availability for use or ownership.
  */
  periodType?: CodeableConcept[];

  /**
  * Asset relevant contractual time period.
  */
  period?: Period[];

  /**
  * Time period of asset use.
  */
  usePeriod?: Period[];

  /**
  * Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract.
  */
  text?: string;

  /**
  * Extensions for text
  */
  _text?: Element;

  /**
  * Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse.
  */
  linkId?: string[];

  /**
  * Extensions for linkId
  */
  _linkId?: Element[];

  /**
  * Response to assets.
  */
  answer?: Contract_Answer[];

  /**
  * Security labels that protects the asset.
  */
  securityLabelNumber?: unsignedInt[];

  /**
  * Extensions for securityLabelNumber
  */
  _securityLabelNumber?: Element[];

  /**
  * Contract Valued Item List.
  */
  valuedItem?: Contract_ValuedItem[];

}
