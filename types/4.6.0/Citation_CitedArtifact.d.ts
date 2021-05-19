import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { dateTime } from "./dateTime";
import { Element } from "./Element";
import { Citation_Version } from "./Citation_Version";
import { CodeableConcept } from "./CodeableConcept";
import { Citation_StatusDate1 } from "./Citation_StatusDate1";
import { Citation_Title } from "./Citation_Title";
import { Citation_Abstract } from "./Citation_Abstract";
import { Citation_Part } from "./Citation_Part";
import { Citation_RelatesTo1 } from "./Citation_RelatesTo1";
import { Citation_PublicationForm } from "./Citation_PublicationForm";
import { Citation_WebLocation } from "./Citation_WebLocation";
import { Citation_Classification1 } from "./Citation_Classification1";
import { Citation_Contributorship } from "./Citation_Contributorship";
import { Annotation } from "./Annotation";
/**
* The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.
*/
export interface Citation_CitedArtifact {
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
    * A formal identifier that is used to identify this citation when it is represented in other formats, or referenced in a specification, model, design or an instance.
    */
    identifier?: Identifier[];
    /**
    * A formal identifier that is used to identify things closely related to this citation.
    */
    relatedIdentifier?: Identifier[];
    /**
    * When the cited artifact was accessed.
    */
    dateAccessed?: dateTime;
    /**
    * Extensions for dateAccessed
    */
    _dateAccessed?: Element;
    /**
    * The defined version of the cited artifact.
    */
    version?: Citation_Version;
    /**
    * The status of the cited artifact.
    */
    currentState?: CodeableConcept[];
    /**
    * An effective date or period for a status of the cited artifact.
    */
    statusDate?: Citation_StatusDate1[];
    /**
    * The title details of the article or artifact.
    */
    title?: Citation_Title[];
    /**
    * Summary of the article or artifact.
    */
    abstract?: Citation_Abstract[];
    /**
    * The component of the article or artifact.
    */
    part?: Citation_Part;
    /**
    * The artifact related to the cited artifact.
    */
    relatesTo?: Citation_RelatesTo1[];
    /**
    * If multiple, used to represent alternative forms of the article that are not separate citations.
    */
    publicationForm?: Citation_PublicationForm[];
    /**
    * Used for any URL for the article or artifact cited.
    */
    webLocation?: Citation_WebLocation[];
    /**
    * The assignment to an organizing scheme.
    */
    classification?: Citation_Classification1[];
    /**
    * This element is used to list authors and other contributors, their contact information, specific contributions, and summary statements.
    */
    contributorship?: Citation_Contributorship;
    /**
    * Any additional information or content for the article or artifact.
    */
    note?: Annotation[];
}
