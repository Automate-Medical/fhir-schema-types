import { Extension } from "./Extension";
import { Reference } from "./Reference";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
/**
* Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
*/
export interface Contract_Context {
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
    * Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.
    */
    reference?: Reference;
    /**
    * Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.
    */
    code?: CodeableConcept[];
    /**
    * Context description.
    */
    text?: string;
    /**
    * Extensions for text
    */
    _text?: Element;
}
