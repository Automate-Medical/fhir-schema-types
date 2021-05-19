import { Extension } from "./Extension"
import { MedicationRequest_InitialFill } from "./MedicationRequest_InitialFill"
import { Duration } from "./Duration"
import { Period } from "./Period"
import { unsignedInt } from "./unsignedInt"
import { Element } from "./Element"
import { Quantity } from "./Quantity"
import { Reference } from "./Reference"
/**
* An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
*/
export interface MedicationRequest_DispenseRequest {
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
  * Indicates the quantity or duration for the first dispense of the medication.
  */
  initialFill?: MedicationRequest_InitialFill;

  /**
  * The minimum period of time that must occur between dispenses of the medication.
  */
  dispenseInterval?: Duration;

  /**
  * This indicates the validity period of a prescription (stale dating the Prescription).
  */
  validityPeriod?: Period;

  /**
  * An integer indicating the number of times, in addition to the original dispense, (aka refills or repeats) that the patient can receive the prescribed medication. Usage Notes: This integer does not include the original order dispense. This means that if an order indicates dispense 30 tablets plus "3 repeats", then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.  A prescriber may explicitly say that zero refills are permitted after the initial dispense.
  */
  numberOfRepeatsAllowed?: unsignedInt;

  /**
  * Extensions for numberOfRepeatsAllowed
  */
  _numberOfRepeatsAllowed?: Element;

  /**
  * The amount that is to be dispensed for one fill.
  */
  quantity?: Quantity;

  /**
  * Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.
  */
  expectedSupplyDuration?: Duration;

  /**
  * Indicates the intended dispensing Organization specified by the prescriber.
  */
  performer?: Reference;

}
