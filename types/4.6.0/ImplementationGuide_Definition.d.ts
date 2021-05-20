import { Extension } from "./Extension";
import { ImplementationGuide_Grouping } from "./ImplementationGuide_Grouping";
import { ImplementationGuide_Resource } from "./ImplementationGuide_Resource";
import { ImplementationGuide_Page } from "./ImplementationGuide_Page";
import { ImplementationGuide_Parameter } from "./ImplementationGuide_Parameter";
import { ImplementationGuide_Template } from "./ImplementationGuide_Template";
/**
* A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
*/
export interface ImplementationGuide_Definition {
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
    * A logical group of resources. Logical groups can be used when building pages.
    */
    grouping?: ImplementationGuide_Grouping[];
    /**
    * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
    */
    resource: ImplementationGuide_Resource[];
    /**
    * A page / section in the implementation guide. The root page is the implementation guide home page.
    */
    page?: ImplementationGuide_Page;
    /**
    * A set of parameters that defines how the implementation guide is built. The parameters are defined by the relevant tools that build the implementation guides.
    */
    parameter?: ImplementationGuide_Parameter[];
    /**
    * A template for building resources.
    */
    template?: ImplementationGuide_Template[];
}
