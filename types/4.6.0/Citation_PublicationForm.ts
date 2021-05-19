import { Extension } from "./Extension"
import { Citation_PublishedIn } from "./Citation_PublishedIn"
import { Citation_PeriodicRelease } from "./Citation_PeriodicRelease"
import { dateTime } from "./dateTime"
import { Element } from "./Element"
import { CodeableConcept } from "./CodeableConcept"
import { markdown } from "./markdown"
/**
* The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.
*/
export interface Citation_PublicationForm {
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
  * The collection the cited article or artifact is published in.
  */
  publishedIn?: Citation_PublishedIn;

  /**
  * The specific issue in which the cited article resides.
  */
  periodicRelease?: Citation_PeriodicRelease;

  /**
  * The date the article was added to the database, or the date the article was released (which may differ from the journal issue publication date).
  */
  articleDate?: dateTime;

  /**
  * Extensions for articleDate
  */
  _articleDate?: Element;

  /**
  * The date the article was last revised or updated in the database.
  */
  lastRevisionDate?: dateTime;

  /**
  * Extensions for lastRevisionDate
  */
  _lastRevisionDate?: Element;

  /**
  * Language in which this form of the article is published.
  */
  language?: CodeableConcept[];

  /**
  * Entry number or identifier for inclusion in a database.
  */
  accessionNumber?: string;

  /**
  * Extensions for accessionNumber
  */
  _accessionNumber?: Element;

  /**
  * Used for full display of pagination.
  */
  pageString?: string;

  /**
  * Extensions for pageString
  */
  _pageString?: Element;

  /**
  * Used for isolated representation of first page.
  */
  firstPage?: string;

  /**
  * Extensions for firstPage
  */
  _firstPage?: Element;

  /**
  * Used for isolated representation of last page.
  */
  lastPage?: string;

  /**
  * Extensions for lastPage
  */
  _lastPage?: Element;

  /**
  * Actual or approximate number of pages or screens.
  */
  pageCount?: string;

  /**
  * Extensions for pageCount
  */
  _pageCount?: Element;

  /**
  * Copyright notice for the full article or artifact.
  */
  copyright?: markdown;

  /**
  * Extensions for copyright
  */
  _copyright?: Element;

}
