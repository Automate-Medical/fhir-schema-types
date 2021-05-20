import { Extension } from "./Extension";
import { Element } from "./Element";
import { code } from "./code";
import { TerminologyCapabilities_Filter } from "./TerminologyCapabilities_Filter";
/**
* A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
*/
export interface TerminologyCapabilities_Version {
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
    * For version-less code systems, there should be a single version with no identifier.
    */
    code?: string;
    /**
    * Extensions for code
    */
    _code?: Element;
    /**
    * If this is the default version for this code system.
    */
    isDefault?: boolean;
    /**
    * Extensions for isDefault
    */
    _isDefault?: Element;
    /**
    * If the compositional grammar defined by the code system is supported.
    */
    compositional?: boolean;
    /**
    * Extensions for compositional
    */
    _compositional?: Element;
    /**
    * Language Displays supported.
    */
    language?: code[];
    /**
    * Extensions for language
    */
    _language?: Element[];
    /**
    * Filter Properties supported.
    */
    filter?: TerminologyCapabilities_Filter[];
    /**
    * Properties supported for $lookup.
    */
    property?: code[];
    /**
    * Extensions for property
    */
    _property?: Element[];
}
