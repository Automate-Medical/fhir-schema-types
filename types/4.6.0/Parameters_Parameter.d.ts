import { Extension } from "./Extension";
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
import { ResourceList } from "./ResourceList";
/**
* This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.
*/
export interface Parameters_Parameter {
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
    * The name of the parameter (reference to the operation definition).
    */
    name?: string;
    /**
    * Extensions for name
    */
    _name?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueBase64Binary?: string;
    /**
    * Extensions for valueBase64Binary
    */
    _valueBase64Binary?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueBoolean?: boolean;
    /**
    * Extensions for valueBoolean
    */
    _valueBoolean?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueCanonical?: string;
    /**
    * Extensions for valueCanonical
    */
    _valueCanonical?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueCode?: string;
    /**
    * Extensions for valueCode
    */
    _valueCode?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueDate?: string;
    /**
    * Extensions for valueDate
    */
    _valueDate?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueDateTime?: string;
    /**
    * Extensions for valueDateTime
    */
    _valueDateTime?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueDecimal?: number;
    /**
    * Extensions for valueDecimal
    */
    _valueDecimal?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueId?: string;
    /**
    * Extensions for valueId
    */
    _valueId?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueInstant?: string;
    /**
    * Extensions for valueInstant
    */
    _valueInstant?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueInteger?: number;
    /**
    * Extensions for valueInteger
    */
    _valueInteger?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueInteger64?: string;
    /**
    * Extensions for valueInteger64
    */
    _valueInteger64?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueMarkdown?: string;
    /**
    * Extensions for valueMarkdown
    */
    _valueMarkdown?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueOid?: string;
    /**
    * Extensions for valueOid
    */
    _valueOid?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valuePositiveInt?: number;
    /**
    * Extensions for valuePositiveInt
    */
    _valuePositiveInt?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueString?: string;
    /**
    * Extensions for valueString
    */
    _valueString?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueTime?: string;
    /**
    * Extensions for valueTime
    */
    _valueTime?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueUnsignedInt?: number;
    /**
    * Extensions for valueUnsignedInt
    */
    _valueUnsignedInt?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueUri?: string;
    /**
    * Extensions for valueUri
    */
    _valueUri?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueUrl?: string;
    /**
    * Extensions for valueUrl
    */
    _valueUrl?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueUuid?: string;
    /**
    * Extensions for valueUuid
    */
    _valueUuid?: Element;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueAddress?: Address;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueAge?: Age;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueAnnotation?: Annotation;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueAttachment?: Attachment;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueCodeableConcept?: CodeableConcept;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueCoding?: Coding;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueContactPoint?: ContactPoint;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueCount?: Count;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueDistance?: Distance;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueDuration?: Duration;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueHumanName?: HumanName;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueIdentifier?: Identifier;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueMoney?: Money;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valuePeriod?: Period;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueQuantity?: Quantity;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueRange?: Range;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueRatio?: Ratio;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueReference?: Reference;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueSampledData?: SampledData;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueSignature?: Signature;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueTiming?: Timing;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueContactDetail?: ContactDetail;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueContributor?: Contributor;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueDataRequirement?: DataRequirement;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueExpression?: Expression;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueParameterDefinition?: ParameterDefinition;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueRelatedArtifact?: RelatedArtifact;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueTriggerDefinition?: TriggerDefinition;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueUsageContext?: UsageContext;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueDosage?: Dosage;
    /**
    * Conveys the content if the parameter is a data type.
    */
    valueMeta?: Meta;
    /**
    * Conveys the content if the parameter is a whole resource.
    */
    resource?: ResourceList;
    /**
    * A named part of a multi-part parameter.
    */
    part?: Parameters_Parameter[];
}
