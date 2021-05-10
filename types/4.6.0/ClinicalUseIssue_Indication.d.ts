import { Extension } from "./Extension";
import { CodeableReference } from "./CodeableReference";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { ClinicalUseIssue_OtherTherapy } from "./ClinicalUseIssue_OtherTherapy";
/**
* A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.
*/
export interface ClinicalUseIssue_Indication {
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
    * The situation that is being documented as an indicaton for this item.
    */
    diseaseSymptomProcedure?: CodeableReference;
    /**
    * The status of the disease or symptom for the indication.
    */
    diseaseStatus?: CodeableReference;
    /**
    * A comorbidity (concurrent condition) or coinfection as part of the indication.
    */
    comorbidity?: CodeableReference[];
    /**
    * The intended effect, aim or strategy to be achieved.
    */
    intendedEffect?: CodeableReference;
    /**
    * Timing or duration information.
    */
    duration?: Quantity;
    /**
    * The specific undesirable effects of the medicinal product.
    */
    undesirableEffect?: Reference[];
    /**
    * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
    */
    otherTherapy?: ClinicalUseIssue_OtherTherapy[];
}
