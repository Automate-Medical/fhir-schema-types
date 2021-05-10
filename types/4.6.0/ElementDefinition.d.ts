import { Extension } from "./Extension";
import { Element } from "./Element";
import { Coding } from "./Coding";
import { ElementDefinition_Slicing } from "./ElementDefinition_Slicing";
import { markdown } from "./markdown";
import { unsignedInt } from "./unsignedInt";
import { ElementDefinition_Base } from "./ElementDefinition_Base";
import { uri } from "./uri";
import { ElementDefinition_Type } from "./ElementDefinition_Type";
import { Address } from "./Address";
import { Age } from "./Age";
import { Annotation } from "./Annotation";
import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { ContactPoint } from "./ContactPoint";
import { Count } from "./Count";
import { Distance } from "./Distance";
import { Duration } from "./Duration";
import { HumanName } from "./HumanName";
import { Identifier } from "./Identifier";
import { Money } from "./Money";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { SampledData } from "./SampledData";
import { Signature } from "./Signature";
import { Timing } from "./Timing";
import { ContactDetail } from "./ContactDetail";
import { Contributor } from "./Contributor";
import { DataRequirement } from "./DataRequirement";
import { Expression } from "./Expression";
import { ParameterDefinition } from "./ParameterDefinition";
import { RelatedArtifact } from "./RelatedArtifact";
import { TriggerDefinition } from "./TriggerDefinition";
import { UsageContext } from "./UsageContext";
import { Dosage } from "./Dosage";
import { Meta } from "./Meta";
import { ElementDefinition_Example } from "./ElementDefinition_Example";
import { integer } from "./integer";
import { id } from "./id";
import { ElementDefinition_Constraint } from "./ElementDefinition_Constraint";
import { ElementDefinition_Binding } from "./ElementDefinition_Binding";
import { ElementDefinition_Mapping } from "./ElementDefinition_Mapping";
/**
* Captures constraints on each element within the resource, profile, or extension.
*/
export interface ElementDefinition {
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
    * The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.
    */
    path?: string;
    /**
    * Extensions for path
    */
    _path?: Element;
    /**
    * Codes that define how this element is represented in instances, when the deviation varies from the normal case.
    */
    representation?: ("xmlAttr" | "xmlText" | "typeAttr" | "cdaText" | "xhtml")[];
    /**
    * Extensions for representation
    */
    _representation?: Element[];
    /**
    * The name of this element definition slice, when slicing is working. The name must be a token with no dots or spaces. This is a unique name referring to a specific set of constraints applied to this element, used to provide a name to different slices of the same element.
    */
    sliceName?: string;
    /**
    * Extensions for sliceName
    */
    _sliceName?: Element;
    /**
    * If true, indicates that this slice definition is constraining a slice definition with the same name in an inherited profile. If false, the slice is not overriding any slice in an inherited profile. If missing, the slice might or might not be overriding a slice in an inherited profile, depending on the sliceName.
    */
    sliceIsConstraining?: boolean;
    /**
    * Extensions for sliceIsConstraining
    */
    _sliceIsConstraining?: Element;
    /**
    * A single preferred label which is the text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.
    */
    label?: string;
    /**
    * Extensions for label
    */
    _label?: Element;
    /**
    * A code that has the same meaning as the element in a particular terminology.
    */
    code?: Coding[];
    /**
    * Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).
    */
    slicing?: ElementDefinition_Slicing;
    /**
    * A concise description of what this element means (e.g. for use in autogenerated summaries).
    */
    short?: string;
    /**
    * Extensions for short
    */
    _short?: Element;
    /**
    * Provides a complete explanation of the meaning of the data element for human readability.  For the case of elements derived from existing elements (e.g. constraints), the definition SHALL be consistent with the base definition, but convey the meaning of the element in the particular context of use of the resource. (Note: The text you are reading is specified in ElementDefinition.definition).
    */
    definition?: markdown;
    /**
    * Extensions for definition
    */
    _definition?: Element;
    /**
    * Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc. (Note: The text you are reading is specified in ElementDefinition.comment).
    */
    comment?: markdown;
    /**
    * Extensions for comment
    */
    _comment?: Element;
    /**
    * This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.
    */
    requirements?: markdown;
    /**
    * Extensions for requirements
    */
    _requirements?: Element;
    /**
    * Identifies additional names by which this element might also be known.
    */
    alias?: string[];
    /**
    * Extensions for alias
    */
    _alias?: Element[];
    /**
    * The minimum number of times this element SHALL appear in the instance.
    */
    min?: unsignedInt;
    /**
    * Extensions for min
    */
    _min?: Element;
    /**
    * The maximum number of times this element is permitted to appear in the instance.
    */
    max?: string;
    /**
    * Extensions for max
    */
    _max?: Element;
    /**
    * Information about the base definition of the element, provided to make it unnecessary for tools to trace the deviation of the element through the derived and related profiles. When the element definition is not the original definition of an element - i.g. either in a constraint on another type, or for elements from a super type in a snap shot - then the information in provided in the element definition may be different to the base definition. On the original definition of the element, it will be same.
    */
    base?: ElementDefinition_Base;
    /**
    * Identifies an element defined elsewhere in the definition whose content rules should be applied to the current element. ContentReferences bring across all the rules that are in the ElementDefinition for the element, including definitions, cardinality constraints, bindings, invariants etc.
    */
    contentReference?: uri;
    /**
    * Extensions for contentReference
    */
    _contentReference?: Element;
    /**
    * The data type or resource that the value of this element is permitted to be.
    */
    type?: ElementDefinition_Type[];
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueBase64Binary?: string;
    /**
    * Extensions for defaultValueBase64Binary
    */
    _defaultValueBase64Binary?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueBoolean?: boolean;
    /**
    * Extensions for defaultValueBoolean
    */
    _defaultValueBoolean?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueCanonical?: string;
    /**
    * Extensions for defaultValueCanonical
    */
    _defaultValueCanonical?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueCode?: string;
    /**
    * Extensions for defaultValueCode
    */
    _defaultValueCode?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueDate?: string;
    /**
    * Extensions for defaultValueDate
    */
    _defaultValueDate?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueDateTime?: string;
    /**
    * Extensions for defaultValueDateTime
    */
    _defaultValueDateTime?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueDecimal?: number;
    /**
    * Extensions for defaultValueDecimal
    */
    _defaultValueDecimal?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueId?: string;
    /**
    * Extensions for defaultValueId
    */
    _defaultValueId?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueInstant?: string;
    /**
    * Extensions for defaultValueInstant
    */
    _defaultValueInstant?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueInteger?: number;
    /**
    * Extensions for defaultValueInteger
    */
    _defaultValueInteger?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueInteger64?: string;
    /**
    * Extensions for defaultValueInteger64
    */
    _defaultValueInteger64?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueMarkdown?: string;
    /**
    * Extensions for defaultValueMarkdown
    */
    _defaultValueMarkdown?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueOid?: string;
    /**
    * Extensions for defaultValueOid
    */
    _defaultValueOid?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValuePositiveInt?: number;
    /**
    * Extensions for defaultValuePositiveInt
    */
    _defaultValuePositiveInt?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueString?: string;
    /**
    * Extensions for defaultValueString
    */
    _defaultValueString?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueTime?: string;
    /**
    * Extensions for defaultValueTime
    */
    _defaultValueTime?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueUnsignedInt?: number;
    /**
    * Extensions for defaultValueUnsignedInt
    */
    _defaultValueUnsignedInt?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueUri?: string;
    /**
    * Extensions for defaultValueUri
    */
    _defaultValueUri?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueUrl?: string;
    /**
    * Extensions for defaultValueUrl
    */
    _defaultValueUrl?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueUuid?: string;
    /**
    * Extensions for defaultValueUuid
    */
    _defaultValueUuid?: Element;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueAddress?: Address;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueAge?: Age;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueAnnotation?: Annotation;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueAttachment?: Attachment;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueCodeableConcept?: CodeableConcept;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueCoding?: Coding;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueContactPoint?: ContactPoint;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueCount?: Count;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueDistance?: Distance;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueDuration?: Duration;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueHumanName?: HumanName;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueIdentifier?: Identifier;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueMoney?: Money;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValuePeriod?: Period;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueQuantity?: Quantity;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueRange?: Range;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueRatio?: Ratio;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueReference?: Reference;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueSampledData?: SampledData;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueSignature?: Signature;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueTiming?: Timing;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueContactDetail?: ContactDetail;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueContributor?: Contributor;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueDataRequirement?: DataRequirement;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueExpression?: Expression;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueParameterDefinition?: ParameterDefinition;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueRelatedArtifact?: RelatedArtifact;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueTriggerDefinition?: TriggerDefinition;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueUsageContext?: UsageContext;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueDosage?: Dosage;
    /**
    * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
    */
    defaultValueMeta?: Meta;
    /**
    * The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing').
    */
    meaningWhenMissing?: markdown;
    /**
    * Extensions for meaningWhenMissing
    */
    _meaningWhenMissing?: Element;
    /**
    * If present, indicates that the order of the repeating element has meaning and describes what that meaning is.  If absent, it means that the order of the element has no meaning.
    */
    orderMeaning?: string;
    /**
    * Extensions for orderMeaning
    */
    _orderMeaning?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedBase64Binary?: string;
    /**
    * Extensions for fixedBase64Binary
    */
    _fixedBase64Binary?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedBoolean?: boolean;
    /**
    * Extensions for fixedBoolean
    */
    _fixedBoolean?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedCanonical?: string;
    /**
    * Extensions for fixedCanonical
    */
    _fixedCanonical?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedCode?: string;
    /**
    * Extensions for fixedCode
    */
    _fixedCode?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedDate?: string;
    /**
    * Extensions for fixedDate
    */
    _fixedDate?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedDateTime?: string;
    /**
    * Extensions for fixedDateTime
    */
    _fixedDateTime?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedDecimal?: number;
    /**
    * Extensions for fixedDecimal
    */
    _fixedDecimal?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedId?: string;
    /**
    * Extensions for fixedId
    */
    _fixedId?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedInstant?: string;
    /**
    * Extensions for fixedInstant
    */
    _fixedInstant?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedInteger?: number;
    /**
    * Extensions for fixedInteger
    */
    _fixedInteger?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedInteger64?: string;
    /**
    * Extensions for fixedInteger64
    */
    _fixedInteger64?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedMarkdown?: string;
    /**
    * Extensions for fixedMarkdown
    */
    _fixedMarkdown?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedOid?: string;
    /**
    * Extensions for fixedOid
    */
    _fixedOid?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedPositiveInt?: number;
    /**
    * Extensions for fixedPositiveInt
    */
    _fixedPositiveInt?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedString?: string;
    /**
    * Extensions for fixedString
    */
    _fixedString?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedTime?: string;
    /**
    * Extensions for fixedTime
    */
    _fixedTime?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedUnsignedInt?: number;
    /**
    * Extensions for fixedUnsignedInt
    */
    _fixedUnsignedInt?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedUri?: string;
    /**
    * Extensions for fixedUri
    */
    _fixedUri?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedUrl?: string;
    /**
    * Extensions for fixedUrl
    */
    _fixedUrl?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedUuid?: string;
    /**
    * Extensions for fixedUuid
    */
    _fixedUuid?: Element;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedAddress?: Address;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedAge?: Age;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedAnnotation?: Annotation;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedAttachment?: Attachment;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedCodeableConcept?: CodeableConcept;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedCoding?: Coding;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedContactPoint?: ContactPoint;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedCount?: Count;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedDistance?: Distance;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedDuration?: Duration;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedHumanName?: HumanName;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedIdentifier?: Identifier;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedMoney?: Money;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedPeriod?: Period;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedQuantity?: Quantity;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedRange?: Range;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedRatio?: Ratio;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedReference?: Reference;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedSampledData?: SampledData;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedSignature?: Signature;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedTiming?: Timing;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedContactDetail?: ContactDetail;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedContributor?: Contributor;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedDataRequirement?: DataRequirement;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedExpression?: Expression;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedParameterDefinition?: ParameterDefinition;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedRelatedArtifact?: RelatedArtifact;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedTriggerDefinition?: TriggerDefinition;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedUsageContext?: UsageContext;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedDosage?: Dosage;
    /**
    * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
    */
    fixedMeta?: Meta;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternBase64Binary?: string;
    /**
    * Extensions for patternBase64Binary
    */
    _patternBase64Binary?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternBoolean?: boolean;
    /**
    * Extensions for patternBoolean
    */
    _patternBoolean?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternCanonical?: string;
    /**
    * Extensions for patternCanonical
    */
    _patternCanonical?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternCode?: string;
    /**
    * Extensions for patternCode
    */
    _patternCode?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternDate?: string;
    /**
    * Extensions for patternDate
    */
    _patternDate?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternDateTime?: string;
    /**
    * Extensions for patternDateTime
    */
    _patternDateTime?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternDecimal?: number;
    /**
    * Extensions for patternDecimal
    */
    _patternDecimal?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternId?: string;
    /**
    * Extensions for patternId
    */
    _patternId?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternInstant?: string;
    /**
    * Extensions for patternInstant
    */
    _patternInstant?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternInteger?: number;
    /**
    * Extensions for patternInteger
    */
    _patternInteger?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternInteger64?: string;
    /**
    * Extensions for patternInteger64
    */
    _patternInteger64?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternMarkdown?: string;
    /**
    * Extensions for patternMarkdown
    */
    _patternMarkdown?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternOid?: string;
    /**
    * Extensions for patternOid
    */
    _patternOid?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternPositiveInt?: number;
    /**
    * Extensions for patternPositiveInt
    */
    _patternPositiveInt?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternString?: string;
    /**
    * Extensions for patternString
    */
    _patternString?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternTime?: string;
    /**
    * Extensions for patternTime
    */
    _patternTime?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternUnsignedInt?: number;
    /**
    * Extensions for patternUnsignedInt
    */
    _patternUnsignedInt?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternUri?: string;
    /**
    * Extensions for patternUri
    */
    _patternUri?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternUrl?: string;
    /**
    * Extensions for patternUrl
    */
    _patternUrl?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternUuid?: string;
    /**
    * Extensions for patternUuid
    */
    _patternUuid?: Element;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternAddress?: Address;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternAge?: Age;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternAnnotation?: Annotation;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternAttachment?: Attachment;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternCodeableConcept?: CodeableConcept;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternCoding?: Coding;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternContactPoint?: ContactPoint;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternCount?: Count;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternDistance?: Distance;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternDuration?: Duration;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternHumanName?: HumanName;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternIdentifier?: Identifier;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternMoney?: Money;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternPeriod?: Period;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternQuantity?: Quantity;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternRange?: Range;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternRatio?: Ratio;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternReference?: Reference;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternSampledData?: SampledData;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternSignature?: Signature;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternTiming?: Timing;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternContactDetail?: ContactDetail;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternContributor?: Contributor;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternDataRequirement?: DataRequirement;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternExpression?: Expression;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternParameterDefinition?: ParameterDefinition;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternRelatedArtifact?: RelatedArtifact;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternTriggerDefinition?: TriggerDefinition;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternUsageContext?: UsageContext;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternDosage?: Dosage;
    /**
    * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.
    *
    * When pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.
    *
    * When pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.
    *
    * When pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,
    *
    * 1. If primitive: it must match exactly the pattern value
    * 2. If a complex object: it must match (recursively) the pattern value
    * 3. If an array: it must match (recursively) the pattern value.
    */
    patternMeta?: Meta;
    /**
    * A sample value for this element demonstrating the type of information that would typically be found in the element.
    */
    example?: ElementDefinition_Example[];
    /**
    * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    minValueDate?: string;
    /**
    * Extensions for minValueDate
    */
    _minValueDate?: Element;
    /**
    * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    minValueDateTime?: string;
    /**
    * Extensions for minValueDateTime
    */
    _minValueDateTime?: Element;
    /**
    * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    minValueInstant?: string;
    /**
    * Extensions for minValueInstant
    */
    _minValueInstant?: Element;
    /**
    * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    minValueTime?: string;
    /**
    * Extensions for minValueTime
    */
    _minValueTime?: Element;
    /**
    * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    minValueDecimal?: number;
    /**
    * Extensions for minValueDecimal
    */
    _minValueDecimal?: Element;
    /**
    * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    minValueInteger?: number;
    /**
    * Extensions for minValueInteger
    */
    _minValueInteger?: Element;
    /**
    * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    minValueInteger64?: string;
    /**
    * Extensions for minValueInteger64
    */
    _minValueInteger64?: Element;
    /**
    * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    minValuePositiveInt?: number;
    /**
    * Extensions for minValuePositiveInt
    */
    _minValuePositiveInt?: Element;
    /**
    * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    minValueUnsignedInt?: number;
    /**
    * Extensions for minValueUnsignedInt
    */
    _minValueUnsignedInt?: Element;
    /**
    * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    minValueQuantity?: Quantity;
    /**
    * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    maxValueDate?: string;
    /**
    * Extensions for maxValueDate
    */
    _maxValueDate?: Element;
    /**
    * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    maxValueDateTime?: string;
    /**
    * Extensions for maxValueDateTime
    */
    _maxValueDateTime?: Element;
    /**
    * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    maxValueInstant?: string;
    /**
    * Extensions for maxValueInstant
    */
    _maxValueInstant?: Element;
    /**
    * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    maxValueTime?: string;
    /**
    * Extensions for maxValueTime
    */
    _maxValueTime?: Element;
    /**
    * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    maxValueDecimal?: number;
    /**
    * Extensions for maxValueDecimal
    */
    _maxValueDecimal?: Element;
    /**
    * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    maxValueInteger?: number;
    /**
    * Extensions for maxValueInteger
    */
    _maxValueInteger?: Element;
    /**
    * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    maxValueInteger64?: string;
    /**
    * Extensions for maxValueInteger64
    */
    _maxValueInteger64?: Element;
    /**
    * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    maxValuePositiveInt?: number;
    /**
    * Extensions for maxValuePositiveInt
    */
    _maxValuePositiveInt?: Element;
    /**
    * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    maxValueUnsignedInt?: number;
    /**
    * Extensions for maxValueUnsignedInt
    */
    _maxValueUnsignedInt?: Element;
    /**
    * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
    */
    maxValueQuantity?: Quantity;
    /**
    * Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.
    */
    maxLength?: integer;
    /**
    * Extensions for maxLength
    */
    _maxLength?: Element;
    /**
    * A reference to an invariant that may make additional statements about the cardinality or value in the instance.
    */
    condition?: id[];
    /**
    * Extensions for condition
    */
    _condition?: Element[];
    /**
    * Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.
    */
    constraint?: ElementDefinition_Constraint[];
    /**
    * If true, implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way.  If false, the element may be ignored and not supported. If false, whether to populate or use the data element in any way is at the discretion of the implementation.
    */
    mustSupport?: boolean;
    /**
    * Extensions for mustSupport
    */
    _mustSupport?: Element;
    /**
    * If true, the value of this element affects the interpretation of the element or resource that contains it, and the value of the element cannot be ignored. Typically, this is used for status, negation and qualification codes. The effect of this is that the element cannot be ignored by systems: they SHALL either recognize the element and process it, and/or a pre-determination has been made that it is not relevant to their particular system.
    */
    isModifier?: boolean;
    /**
    * Extensions for isModifier
    */
    _isModifier?: Element;
    /**
    * Explains how that element affects the interpretation of the resource or element that contains it.
    */
    isModifierReason?: string;
    /**
    * Extensions for isModifierReason
    */
    _isModifierReason?: Element;
    /**
    * Whether the element should be included if a client requests a search with the parameter _summary=true.
    */
    isSummary?: boolean;
    /**
    * Extensions for isSummary
    */
    _isSummary?: Element;
    /**
    * Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity), or the data types (string, uri).
    */
    binding?: ElementDefinition_Binding;
    /**
    * Identifies a concept from an external specification that roughly corresponds to this element.
    */
    mapping?: ElementDefinition_Mapping[];
}
