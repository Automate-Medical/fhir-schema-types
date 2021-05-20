import { Extension } from "./Extension";
import { code } from "./code";
import { Element } from "./Element";
import { ConceptMap_DependsOn } from "./ConceptMap_DependsOn";
/**
* A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
*/
export interface ConceptMap_Target {
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
    * Identity (code or path) or the element/item that the map refers to.
    */
    code?: code;
    /**
    * Extensions for code
    */
    _code?: Element;
    /**
    * The display for the code. The display is only provided to help editors when editing the concept map.
    */
    display?: string;
    /**
    * Extensions for display
    */
    _display?: Element;
    /**
    * The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is 'wider' than the source).
    */
    equivalence?: "relatedto" | "equivalent" | "equal" | "wider" | "subsumes" | "narrower" | "specializes" | "inexact" | "unmatched" | "disjoint";
    /**
    * Extensions for equivalence
    */
    _equivalence?: Element;
    /**
    * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
    */
    comment?: string;
    /**
    * Extensions for comment
    */
    _comment?: Element;
    /**
    * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
    */
    dependsOn?: ConceptMap_DependsOn[];
    /**
    * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
    */
    product?: ConceptMap_DependsOn[];
}
