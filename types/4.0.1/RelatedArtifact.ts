import { Extension } from "./Extension"
import { Element } from "./Element"
import { markdown } from "./markdown"
import { url } from "./url"
import { Attachment } from "./Attachment"
import { canonical } from "./canonical"
/**
* Related artifacts such as additional documentation, justification, or bibliographic references.
*/
export interface RelatedArtifact {
  /**
  * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
  */
  id?: string;

  /**
  * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
  */
  extension?: Extension[];

  /**
  * The type of relationship to the related artifact.
  */
  type?: "documentation" | "justification" | "citation" | "predecessor" | "successor" | "derived-from" | "depends-on" | "composed-of";

  /**
  * Extensions for type
  */
  _type?: Element;

  /**
  * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
  */
  label?: string;

  /**
  * Extensions for label
  */
  _label?: Element;

  /**
  * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
  */
  display?: string;

  /**
  * Extensions for display
  */
  _display?: Element;

  /**
  * A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.
  */
  citation?: markdown;

  /**
  * Extensions for citation
  */
  _citation?: Element;

  /**
  * A url for the artifact that can be followed to access the actual content.
  */
  url?: url;

  /**
  * Extensions for url
  */
  _url?: Element;

  /**
  * The document being referenced, represented as an attachment. This is exclusive with the resource element.
  */
  document?: Attachment;

  /**
  * The related resource, such as a library, value set, profile, or other knowledge resource.
  */
  resource?: canonical;

}
