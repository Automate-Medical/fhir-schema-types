import { Extension } from "./Extension"
import { Element } from "./Element"
import { Address } from "./Address"
import { Age } from "./Age"
import { Annotation } from "./Annotation"
import { Attachment } from "./Attachment"
import { CodeableConcept } from "./CodeableConcept"
import { Coding } from "./Coding"
import { ContactPoint } from "./ContactPoint"
import { Count } from "./Count"
import { Distance } from "./Distance"
import { Duration } from "./Duration"
import { HumanName } from "./HumanName"
import { Identifier } from "./Identifier"
import { Money } from "./Money"
import { Period } from "./Period"
import { Quantity } from "./Quantity"
import { Range } from "./Range"
import { Ratio } from "./Ratio"
import { Reference } from "./Reference"
import { SampledData } from "./SampledData"
import { Signature } from "./Signature"
import { Timing } from "./Timing"
import { ContactDetail } from "./ContactDetail"
import { Contributor } from "./Contributor"
import { DataRequirement } from "./DataRequirement"
import { Expression } from "./Expression"
import { ParameterDefinition } from "./ParameterDefinition"
import { RelatedArtifact } from "./RelatedArtifact"
import { TriggerDefinition } from "./TriggerDefinition"
import { UsageContext } from "./UsageContext"
import { Dosage } from "./Dosage"
import { Meta } from "./Meta"
/**
* Captures constraints on each element within the resource, profile, or extension.
*/
export interface ElementDefinition_Example {
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
  * Describes the purpose of this example amoung the set of examples.
  */
  label?: string;

  /**
  * Extensions for label
  */
  _label?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueBase64Binary?: string;

  /**
  * Extensions for valueBase64Binary
  */
  _valueBase64Binary?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueBoolean?: boolean;

  /**
  * Extensions for valueBoolean
  */
  _valueBoolean?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueCanonical?: string;

  /**
  * Extensions for valueCanonical
  */
  _valueCanonical?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueCode?: string;

  /**
  * Extensions for valueCode
  */
  _valueCode?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueDate?: string;

  /**
  * Extensions for valueDate
  */
  _valueDate?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueDateTime?: string;

  /**
  * Extensions for valueDateTime
  */
  _valueDateTime?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueDecimal?: number;

  /**
  * Extensions for valueDecimal
  */
  _valueDecimal?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueId?: string;

  /**
  * Extensions for valueId
  */
  _valueId?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueInstant?: string;

  /**
  * Extensions for valueInstant
  */
  _valueInstant?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueInteger?: number;

  /**
  * Extensions for valueInteger
  */
  _valueInteger?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueMarkdown?: string;

  /**
  * Extensions for valueMarkdown
  */
  _valueMarkdown?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueOid?: string;

  /**
  * Extensions for valueOid
  */
  _valueOid?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valuePositiveInt?: number;

  /**
  * Extensions for valuePositiveInt
  */
  _valuePositiveInt?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueString?: string;

  /**
  * Extensions for valueString
  */
  _valueString?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueTime?: string;

  /**
  * Extensions for valueTime
  */
  _valueTime?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueUnsignedInt?: number;

  /**
  * Extensions for valueUnsignedInt
  */
  _valueUnsignedInt?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueUri?: string;

  /**
  * Extensions for valueUri
  */
  _valueUri?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueUrl?: string;

  /**
  * Extensions for valueUrl
  */
  _valueUrl?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueUuid?: string;

  /**
  * Extensions for valueUuid
  */
  _valueUuid?: Element;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueAddress?: Address;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueAge?: Age;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueAnnotation?: Annotation;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueAttachment?: Attachment;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueCodeableConcept?: CodeableConcept;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueCoding?: Coding;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueContactPoint?: ContactPoint;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueCount?: Count;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueDistance?: Distance;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueDuration?: Duration;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueHumanName?: HumanName;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueIdentifier?: Identifier;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueMoney?: Money;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valuePeriod?: Period;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueQuantity?: Quantity;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueRange?: Range;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueRatio?: Ratio;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueReference?: Reference;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueSampledData?: SampledData;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueSignature?: Signature;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueTiming?: Timing;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueContactDetail?: ContactDetail;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueContributor?: Contributor;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueDataRequirement?: DataRequirement;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueExpression?: Expression;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueParameterDefinition?: ParameterDefinition;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueRelatedArtifact?: RelatedArtifact;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueTriggerDefinition?: TriggerDefinition;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueUsageContext?: UsageContext;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueDosage?: Dosage;

  /**
  * The actual value for the element, which must be one of the types allowed for this element.
  */
  valueMeta?: Meta;

}
