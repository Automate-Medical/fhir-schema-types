import { Extension } from "./Extension";
import { positiveInt } from "./positiveInt";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { CodeableConcept } from "./CodeableConcept";
import { Period } from "./Period";
import { Address } from "./Address";
import { Quantity } from "./Quantity";
import { Money } from "./Money";
import { decimal } from "./decimal";
import { ClaimResponse_Adjudication } from "./ClaimResponse_Adjudication";
import { ClaimResponse_Detail1 } from "./ClaimResponse_Detail1";
/**
* This resource provides the adjudication details from the processing of a Claim resource.
*/
export interface ClaimResponse_AddItem {
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
    * Claim items which this service line is intended to replace.
    */
    itemSequence?: positiveInt[];
    /**
    * Extensions for itemSequence
    */
    _itemSequence?: Element[];
    /**
    * The sequence number of the details within the claim item which this line is intended to replace.
    */
    detailSequence?: positiveInt[];
    /**
    * Extensions for detailSequence
    */
    _detailSequence?: Element[];
    /**
    * The sequence number of the sub-details within the details within the claim item which this line is intended to replace.
    */
    subdetailSequence?: positiveInt[];
    /**
    * Extensions for subdetailSequence
    */
    _subdetailSequence?: Element[];
    /**
    * The providers who are authorized for the services rendered to the patient.
    */
    provider?: Reference[];
    /**
    * When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.
    */
    productOrService: CodeableConcept;
    /**
    * Item typification or modifiers codes to convey additional context for the product or service.
    */
    modifier?: CodeableConcept[];
    /**
    * Identifies the program under which this may be recovered.
    */
    programCode?: CodeableConcept[];
    /**
    * The date or dates when the service or product was supplied, performed or completed.
    */
    servicedDate?: string;
    /**
    * Extensions for servicedDate
    */
    _servicedDate?: Element;
    /**
    * The date or dates when the service or product was supplied, performed or completed.
    */
    servicedPeriod?: Period;
    /**
    * Where the product or service was provided.
    */
    locationCodeableConcept?: CodeableConcept;
    /**
    * Where the product or service was provided.
    */
    locationAddress?: Address;
    /**
    * Where the product or service was provided.
    */
    locationReference?: Reference;
    /**
    * The number of repetitions of a service or product.
    */
    quantity?: Quantity;
    /**
    * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.
    */
    unitPrice?: Money;
    /**
    * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
    */
    factor?: decimal;
    /**
    * Extensions for factor
    */
    _factor?: Element;
    /**
    * The quantity times the unit price for an additional service or product or charge.
    */
    net?: Money;
    /**
    * Physical service site on the patient (limb, tooth, etc.).
    */
    bodySite?: CodeableConcept;
    /**
    * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
    */
    subSite?: CodeableConcept[];
    /**
    * The numbers associated with notes below which apply to the adjudication of this item.
    */
    noteNumber?: positiveInt[];
    /**
    * Extensions for noteNumber
    */
    _noteNumber?: Element[];
    /**
    * The adjudication results.
    */
    adjudication: ClaimResponse_Adjudication[];
    /**
    * The second-tier service adjudications for payor added services.
    */
    detail?: ClaimResponse_Detail1[];
}
