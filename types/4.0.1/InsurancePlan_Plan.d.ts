import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { CodeableConcept } from "./CodeableConcept";
import { Reference } from "./Reference";
import { InsurancePlan_GeneralCost } from "./InsurancePlan_GeneralCost";
import { InsurancePlan_SpecificCost } from "./InsurancePlan_SpecificCost";
/**
* Details of a Health Insurance product/plan provided by an organization.
*/
export interface InsurancePlan_Plan {
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
    * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
    */
    identifier?: Identifier[];
    /**
    * Type of plan. For example, "Platinum" or "High Deductable".
    */
    type?: CodeableConcept;
    /**
    * The geographic region in which a health insurance plan's benefits apply.
    */
    coverageArea?: Reference[];
    /**
    * Reference to the network that providing the type of coverage.
    */
    network?: Reference[];
    /**
    * Overall costs associated with the plan.
    */
    generalCost?: InsurancePlan_GeneralCost[];
    /**
    * Costs associated with the coverage provided by the product.
    */
    specificCost?: InsurancePlan_SpecificCost[];
}
