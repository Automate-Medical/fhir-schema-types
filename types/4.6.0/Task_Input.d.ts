import { Extension } from "./Extension";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Address } from "./Address";
import { Age } from "./Age";
import { Annotation } from "./Annotation";
import { Attachment } from "./Attachment";
import { Coding } from "./Coding";
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
/**
* A task to be performed.
*/
export interface Task_Input {
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
    * A code or description indicating how the input is intended to be used as part of the task execution.
    */
    type: CodeableConcept;
    /**
    * The value of the input parameter as a basic type.
    */
    valueBase64Binary?: string;
    /**
    * Extensions for valueBase64Binary
    */
    _valueBase64Binary?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueBoolean?: boolean;
    /**
    * Extensions for valueBoolean
    */
    _valueBoolean?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueCanonical?: string;
    /**
    * Extensions for valueCanonical
    */
    _valueCanonical?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueCode?: string;
    /**
    * Extensions for valueCode
    */
    _valueCode?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueDate?: string;
    /**
    * Extensions for valueDate
    */
    _valueDate?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueDateTime?: string;
    /**
    * Extensions for valueDateTime
    */
    _valueDateTime?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueDecimal?: number;
    /**
    * Extensions for valueDecimal
    */
    _valueDecimal?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueId?: string;
    /**
    * Extensions for valueId
    */
    _valueId?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueInstant?: string;
    /**
    * Extensions for valueInstant
    */
    _valueInstant?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueInteger?: number;
    /**
    * Extensions for valueInteger
    */
    _valueInteger?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueInteger64?: string;
    /**
    * Extensions for valueInteger64
    */
    _valueInteger64?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueMarkdown?: string;
    /**
    * Extensions for valueMarkdown
    */
    _valueMarkdown?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueOid?: string;
    /**
    * Extensions for valueOid
    */
    _valueOid?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valuePositiveInt?: number;
    /**
    * Extensions for valuePositiveInt
    */
    _valuePositiveInt?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueString?: string;
    /**
    * Extensions for valueString
    */
    _valueString?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueTime?: string;
    /**
    * Extensions for valueTime
    */
    _valueTime?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueUnsignedInt?: number;
    /**
    * Extensions for valueUnsignedInt
    */
    _valueUnsignedInt?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueUri?: string;
    /**
    * Extensions for valueUri
    */
    _valueUri?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueUrl?: string;
    /**
    * Extensions for valueUrl
    */
    _valueUrl?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueUuid?: string;
    /**
    * Extensions for valueUuid
    */
    _valueUuid?: Element;
    /**
    * The value of the input parameter as a basic type.
    */
    valueAddress?: Address;
    /**
    * The value of the input parameter as a basic type.
    */
    valueAge?: Age;
    /**
    * The value of the input parameter as a basic type.
    */
    valueAnnotation?: Annotation;
    /**
    * The value of the input parameter as a basic type.
    */
    valueAttachment?: Attachment;
    /**
    * The value of the input parameter as a basic type.
    */
    valueCodeableConcept?: CodeableConcept;
    /**
    * The value of the input parameter as a basic type.
    */
    valueCoding?: Coding;
    /**
    * The value of the input parameter as a basic type.
    */
    valueContactPoint?: ContactPoint;
    /**
    * The value of the input parameter as a basic type.
    */
    valueCount?: Count;
    /**
    * The value of the input parameter as a basic type.
    */
    valueDistance?: Distance;
    /**
    * The value of the input parameter as a basic type.
    */
    valueDuration?: Duration;
    /**
    * The value of the input parameter as a basic type.
    */
    valueHumanName?: HumanName;
    /**
    * The value of the input parameter as a basic type.
    */
    valueIdentifier?: Identifier;
    /**
    * The value of the input parameter as a basic type.
    */
    valueMoney?: Money;
    /**
    * The value of the input parameter as a basic type.
    */
    valuePeriod?: Period;
    /**
    * The value of the input parameter as a basic type.
    */
    valueQuantity?: Quantity;
    /**
    * The value of the input parameter as a basic type.
    */
    valueRange?: Range;
    /**
    * The value of the input parameter as a basic type.
    */
    valueRatio?: Ratio;
    /**
    * The value of the input parameter as a basic type.
    */
    valueReference?: Reference;
    /**
    * The value of the input parameter as a basic type.
    */
    valueSampledData?: SampledData;
    /**
    * The value of the input parameter as a basic type.
    */
    valueSignature?: Signature;
    /**
    * The value of the input parameter as a basic type.
    */
    valueTiming?: Timing;
    /**
    * The value of the input parameter as a basic type.
    */
    valueContactDetail?: ContactDetail;
    /**
    * The value of the input parameter as a basic type.
    */
    valueContributor?: Contributor;
    /**
    * The value of the input parameter as a basic type.
    */
    valueDataRequirement?: DataRequirement;
    /**
    * The value of the input parameter as a basic type.
    */
    valueExpression?: Expression;
    /**
    * The value of the input parameter as a basic type.
    */
    valueParameterDefinition?: ParameterDefinition;
    /**
    * The value of the input parameter as a basic type.
    */
    valueRelatedArtifact?: RelatedArtifact;
    /**
    * The value of the input parameter as a basic type.
    */
    valueTriggerDefinition?: TriggerDefinition;
    /**
    * The value of the input parameter as a basic type.
    */
    valueUsageContext?: UsageContext;
    /**
    * The value of the input parameter as a basic type.
    */
    valueDosage?: Dosage;
    /**
    * The value of the input parameter as a basic type.
    */
    valueMeta?: Meta;
}
