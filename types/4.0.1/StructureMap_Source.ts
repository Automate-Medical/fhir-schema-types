import { Extension } from "./Extension"
import { id } from "./id"
import { Element } from "./Element"
import { integer } from "./integer"
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
* A Map of relationships between 2 structures that can be used to transform data.
*/
export interface StructureMap_Source {
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
  * Type or variable this rule applies to.
  */
  context?: id;

  /**
  * Extensions for context
  */
  _context?: Element;

  /**
  * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
  */
  min?: integer;

  /**
  * Extensions for min
  */
  _min?: Element;

  /**
  * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
  */
  max?: string;

  /**
  * Extensions for max
  */
  _max?: Element;

  /**
  * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
  */
  type?: string;

  /**
  * Extensions for type
  */
  _type?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueBase64Binary?: string;

  /**
  * Extensions for defaultValueBase64Binary
  */
  _defaultValueBase64Binary?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueBoolean?: boolean;

  /**
  * Extensions for defaultValueBoolean
  */
  _defaultValueBoolean?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueCanonical?: string;

  /**
  * Extensions for defaultValueCanonical
  */
  _defaultValueCanonical?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueCode?: string;

  /**
  * Extensions for defaultValueCode
  */
  _defaultValueCode?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueDate?: string;

  /**
  * Extensions for defaultValueDate
  */
  _defaultValueDate?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueDateTime?: string;

  /**
  * Extensions for defaultValueDateTime
  */
  _defaultValueDateTime?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueDecimal?: number;

  /**
  * Extensions for defaultValueDecimal
  */
  _defaultValueDecimal?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueId?: string;

  /**
  * Extensions for defaultValueId
  */
  _defaultValueId?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueInstant?: string;

  /**
  * Extensions for defaultValueInstant
  */
  _defaultValueInstant?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueInteger?: number;

  /**
  * Extensions for defaultValueInteger
  */
  _defaultValueInteger?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueMarkdown?: string;

  /**
  * Extensions for defaultValueMarkdown
  */
  _defaultValueMarkdown?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueOid?: string;

  /**
  * Extensions for defaultValueOid
  */
  _defaultValueOid?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValuePositiveInt?: number;

  /**
  * Extensions for defaultValuePositiveInt
  */
  _defaultValuePositiveInt?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueString?: string;

  /**
  * Extensions for defaultValueString
  */
  _defaultValueString?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueTime?: string;

  /**
  * Extensions for defaultValueTime
  */
  _defaultValueTime?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueUnsignedInt?: number;

  /**
  * Extensions for defaultValueUnsignedInt
  */
  _defaultValueUnsignedInt?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueUri?: string;

  /**
  * Extensions for defaultValueUri
  */
  _defaultValueUri?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueUrl?: string;

  /**
  * Extensions for defaultValueUrl
  */
  _defaultValueUrl?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueUuid?: string;

  /**
  * Extensions for defaultValueUuid
  */
  _defaultValueUuid?: Element;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueAddress?: Address;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueAge?: Age;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueAnnotation?: Annotation;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueAttachment?: Attachment;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueCodeableConcept?: CodeableConcept;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueCoding?: Coding;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueContactPoint?: ContactPoint;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueCount?: Count;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueDistance?: Distance;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueDuration?: Duration;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueHumanName?: HumanName;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueIdentifier?: Identifier;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueMoney?: Money;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValuePeriod?: Period;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueQuantity?: Quantity;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueRange?: Range;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueRatio?: Ratio;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueReference?: Reference;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueSampledData?: SampledData;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueSignature?: Signature;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueTiming?: Timing;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueContactDetail?: ContactDetail;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueContributor?: Contributor;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueDataRequirement?: DataRequirement;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueExpression?: Expression;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueParameterDefinition?: ParameterDefinition;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueRelatedArtifact?: RelatedArtifact;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueTriggerDefinition?: TriggerDefinition;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueUsageContext?: UsageContext;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueDosage?: Dosage;

  /**
  * A value to use if there is no existing value in the source object.
  */
  defaultValueMeta?: Meta;

  /**
  * Optional field for this source.
  */
  element?: string;

  /**
  * Extensions for element
  */
  _element?: Element;

  /**
  * How to handle the list mode for this element.
  */
  listMode?: "first" | "not_first" | "last" | "not_last" | "only_one";

  /**
  * Extensions for listMode
  */
  _listMode?: Element;

  /**
  * Named context for field, if a field is specified.
  */
  variable?: id;

  /**
  * Extensions for variable
  */
  _variable?: Element;

  /**
  * FHIRPath expression  - must be true or the rule does not apply.
  */
  condition?: string;

  /**
  * Extensions for condition
  */
  _condition?: Element;

  /**
  * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
  */
  check?: string;

  /**
  * Extensions for check
  */
  _check?: Element;

  /**
  * A FHIRPath expression which specifies a message to put in the transform log when content matching the source rule is found.
  */
  logMessage?: string;

  /**
  * Extensions for logMessage
  */
  _logMessage?: Element;

}
