import { Extension } from "./Extension";
import { Reference } from "./Reference";
import { code } from "./code";
import { Element } from "./Element";
import { id } from "./id";
/**
* A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
*/
export interface ImplementationGuide_Resource {
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
    * Where this resource is found.
    */
    reference: Reference;
    /**
    * Indicates the FHIR Version(s) this artifact is intended to apply to. If no versions are specified, the resource is assumed to apply to all the versions stated in ImplementationGuide.fhirVersion.
    */
    fhirVersion?: code[];
    /**
    * Extensions for fhirVersion
    */
    _fhirVersion?: Element[];
    /**
    * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
    */
    name?: string;
    /**
    * Extensions for name
    */
    _name?: Element;
    /**
    * A description of the reason that a resource has been included in the implementation guide.
    */
    description?: string;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.
    */
    exampleBoolean?: boolean;
    /**
    * Extensions for exampleBoolean
    */
    _exampleBoolean?: Element;
    /**
    * If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.
    */
    exampleCanonical?: string;
    /**
    * Extensions for exampleCanonical
    */
    _exampleCanonical?: Element;
    /**
    * Reference to the id of the grouping this resource appears in.
    */
    groupingId?: id;
    /**
    * Extensions for groupingId
    */
    _groupingId?: Element;
}
