import { id } from "./id";
import { Meta } from "./Meta";
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { Narrative } from "./Narrative";
import { ResourceList } from "./ResourceList";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { CodeableConcept } from "./CodeableConcept";
import { markdown } from "./markdown";
import { Reference } from "./Reference";
import { Ingredient_Substance } from "./Ingredient_Substance";
import { Ingredient_SpecifiedSubstance } from "./Ingredient_SpecifiedSubstance";
/**
* An ingredient of a manufactured item or pharmaceutical product.
*/
export interface Ingredient {
    /**
    * This is a Ingredient resource
    */
    resourceType: "Ingredient";
    /**
    * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
    */
    id?: id;
    /**
    * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
    */
    meta?: Meta;
    /**
    * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
    */
    implicitRules?: uri;
    /**
    * Extensions for implicitRules
    */
    _implicitRules?: Element;
    /**
    * The base language in which the resource is written.
    */
    language?: code;
    /**
    * Extensions for language
    */
    _language?: Element;
    /**
    * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
    */
    text?: Narrative;
    /**
    * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, nor can they have their own independent transaction scope.
    */
    contained?: ResourceList[];
    /**
    * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
    */
    extension?: Extension[];
    /**
    * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
    *
    * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
    */
    modifierExtension?: Extension[];
    /**
    * The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
    */
    identifier?: Identifier;
    /**
    * A classification of the ingredient identifying its purpose within the product, e.g. active, inactive.
    */
    role: CodeableConcept;
    /**
    * A classification of the ingredient identifying its precise purpose(s) in the drug product. This extends the Ingredient.role to add more detail. Example: Antioxidant, Alkalizing Agent.
    */
    function?: CodeableConcept[];
    /**
    * A classification of the ingredient according to where in the physical item it tends to be used, such the outer shell of a tablet, inner body or ink.
    */
    group?: CodeableConcept;
    /**
    * A general description of the ingredient, or any supporting text. May be used for an unstructured list of excipients.
    */
    description?: markdown;
    /**
    * Extensions for description
    */
    _description?: Element;
    /**
    * If the ingredient is a known or suspected allergen.
    */
    allergenicIndicator?: boolean;
    /**
    * Extensions for allergenicIndicator
    */
    _allergenicIndicator?: Element;
    /**
    * The organization that manufactures this ingredient.
    */
    manufacturer?: Reference[];
    /**
    * The substance that comprises this ingredient.
    */
    substance?: Ingredient_Substance;
    /**
    * A specified substance that comprises this ingredient.
    */
    specifiedSubstance?: Ingredient_SpecifiedSubstance[];
}
