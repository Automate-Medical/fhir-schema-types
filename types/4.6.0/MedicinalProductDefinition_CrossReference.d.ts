import { Extension } from "./Extension";
import { CodeableReference } from "./CodeableReference";
import { CodeableConcept } from "./CodeableConcept";
/**
* Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use, drug catalogs).
*/
export interface MedicinalProductDefinition_CrossReference {
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
    * Reference to another product, e.g. for linking authorised to investigational product.
    */
    product: CodeableReference;
    /**
    * The type of relationship, for instance branded to generic, product to development product (investigational), parallel import version.
    */
    type?: CodeableConcept;
}
