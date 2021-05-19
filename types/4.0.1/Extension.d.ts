import { uri } from "./uri";
import { Element } from "./Element";
import { Address } from "./Address";
import { Age } from "./Age";
import { Annotation } from "./Annotation";
import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
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
* Optional Extension Element - found in all resources.
*/
export interface Extension {
    /**
    * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
    */
    id?: string;
    /**
    * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
    */
    extension?: Extension[];
    /**
    * Source of the definition for the extension code - a logical name or a URL.
    */
    url?: uri;
    /**
    * Extensions for url
    */
    _url?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueBase64Binary?: string;
    /**
    * Extensions for valueBase64Binary
    */
    _valueBase64Binary?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueBoolean?: boolean;
    /**
    * Extensions for valueBoolean
    */
    _valueBoolean?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueCanonical?: string;
    /**
    * Extensions for valueCanonical
    */
    _valueCanonical?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueCode?: string;
    /**
    * Extensions for valueCode
    */
    _valueCode?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueDate?: string;
    /**
    * Extensions for valueDate
    */
    _valueDate?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueDateTime?: string;
    /**
    * Extensions for valueDateTime
    */
    _valueDateTime?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueDecimal?: number;
    /**
    * Extensions for valueDecimal
    */
    _valueDecimal?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueId?: string;
    /**
    * Extensions for valueId
    */
    _valueId?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueInstant?: string;
    /**
    * Extensions for valueInstant
    */
    _valueInstant?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueInteger?: number;
    /**
    * Extensions for valueInteger
    */
    _valueInteger?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueMarkdown?: string;
    /**
    * Extensions for valueMarkdown
    */
    _valueMarkdown?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueOid?: string;
    /**
    * Extensions for valueOid
    */
    _valueOid?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valuePositiveInt?: number;
    /**
    * Extensions for valuePositiveInt
    */
    _valuePositiveInt?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueString?: string;
    /**
    * Extensions for valueString
    */
    _valueString?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueTime?: string;
    /**
    * Extensions for valueTime
    */
    _valueTime?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueUnsignedInt?: number;
    /**
    * Extensions for valueUnsignedInt
    */
    _valueUnsignedInt?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueUri?: string;
    /**
    * Extensions for valueUri
    */
    _valueUri?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueUrl?: string;
    /**
    * Extensions for valueUrl
    */
    _valueUrl?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueUuid?: string;
    /**
    * Extensions for valueUuid
    */
    _valueUuid?: Element;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueAddress?: Address;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueAge?: Age;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueAnnotation?: Annotation;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueAttachment?: Attachment;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueCodeableConcept?: CodeableConcept;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueCoding?: Coding;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueContactPoint?: ContactPoint;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueCount?: Count;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueDistance?: Distance;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueDuration?: Duration;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueHumanName?: HumanName;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueIdentifier?: Identifier;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueMoney?: Money;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valuePeriod?: Period;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueQuantity?: Quantity;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueRange?: Range;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueRatio?: Ratio;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueReference?: Reference;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueSampledData?: SampledData;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueSignature?: Signature;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueTiming?: Timing;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueContactDetail?: ContactDetail;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueContributor?: Contributor;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueDataRequirement?: DataRequirement;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueExpression?: Expression;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueParameterDefinition?: ParameterDefinition;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueRelatedArtifact?: RelatedArtifact;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueTriggerDefinition?: TriggerDefinition;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueUsageContext?: UsageContext;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueDosage?: Dosage;
    /**
    * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
    */
    valueMeta?: Meta;
}
