import { Extension } from "./Extension"
import { HumanName } from "./HumanName"
import { Element } from "./Element"
import { Identifier } from "./Identifier"
import { Citation_AffiliationInfo } from "./Citation_AffiliationInfo"
import { Address } from "./Address"
import { ContactPoint } from "./ContactPoint"
import { CodeableConcept } from "./CodeableConcept"
import { Citation_ContributionInstance } from "./Citation_ContributionInstance"
import { positiveInt } from "./positiveInt"
/**
* The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.
*/
export interface Citation_Entry {
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
  * A name associated with the individual.
  */
  name?: HumanName;

  /**
  * Initials for forename.
  */
  initials?: string;

  /**
  * Extensions for initials
  */
  _initials?: Element;

  /**
  * Used for collective or corporate name as an author.
  */
  collectiveName?: string;

  /**
  * Extensions for collectiveName
  */
  _collectiveName?: Element;

  /**
  * Unique person identifier.
  */
  identifier?: Identifier[];

  /**
  * Organization affiliated with the entity.
  */
  affiliationInfo?: Citation_AffiliationInfo[];

  /**
  * Physical mailing address for the author or contributor.
  */
  address?: Address[];

  /**
  * Email or telephone contact methods for the author or contributor.
  */
  telecom?: ContactPoint[];

  /**
  * This element identifies the specific nature of an individual’s contribution with respect to the cited work.
  */
  contributionType?: CodeableConcept[];

  /**
  * The role of the contributor (e.g. author, editor, reviewer).
  */
  role?: CodeableConcept;

  /**
  * Contributions with accounting for time or number.
  */
  contributionInstance?: Citation_ContributionInstance[];

  /**
  * Indication of which contributor is the corresponding contributor for the role.
  */
  correspondingContact?: boolean;

  /**
  * Extensions for correspondingContact
  */
  _correspondingContact?: Element;

  /**
  * Used to code order of authors.
  */
  listOrder?: positiveInt;

  /**
  * Extensions for listOrder
  */
  _listOrder?: Element;

}
