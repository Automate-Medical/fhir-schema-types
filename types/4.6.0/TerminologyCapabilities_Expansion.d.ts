import { Extension } from "./Extension";
import { Element } from "./Element";
import { TerminologyCapabilities_Parameter } from "./TerminologyCapabilities_Parameter";
import { markdown } from "./markdown";
/**
* A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
*/
export interface TerminologyCapabilities_Expansion {
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
    * Whether the server can return nested value sets.
    */
    hierarchical?: boolean;
    /**
    * Extensions for hierarchical
    */
    _hierarchical?: Element;
    /**
    * Whether the server supports paging on expansion.
    */
    paging?: boolean;
    /**
    * Extensions for paging
    */
    _paging?: Element;
    /**
    * True if requests for incomplete expansions are allowed.
    */
    incomplete?: boolean;
    /**
    * Extensions for incomplete
    */
    _incomplete?: Element;
    /**
    * Supported expansion parameter.
    */
    parameter?: TerminologyCapabilities_Parameter[];
    /**
    * Documentation about text searching works.
    */
    textFilter?: markdown;
    /**
    * Extensions for textFilter
    */
    _textFilter?: Element;
}
