import { Extension } from "./Extension"
import { code } from "./code"
import { Element } from "./Element"
import { base64Binary } from "./base64Binary"
import { url } from "./url"
import { integer64 } from "./integer64"
import { dateTime } from "./dateTime"
import { positiveInt } from "./positiveInt"
import { decimal } from "./decimal"
/**
* For referring to data content defined in other formats.
*/
export interface Attachment {
  /**
  * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
  */
  id?: string;

  /**
  * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
  */
  extension?: Extension[];

  /**
  * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
  */
  contentType?: code;

  /**
  * Extensions for contentType
  */
  _contentType?: Element;

  /**
  * The human language of the content. The value can be any valid value according to BCP 47.
  */
  language?: code;

  /**
  * Extensions for language
  */
  _language?: Element;

  /**
  * The actual data of the attachment - a sequence of bytes, base64 encoded.
  */
  data?: base64Binary;

  /**
  * Extensions for data
  */
  _data?: Element;

  /**
  * A location where the data can be accessed.
  */
  url?: url;

  /**
  * Extensions for url
  */
  _url?: Element;

  /**
  * The number of bytes of data that make up this attachment (before base64 encoding, if that is done).
  */
  size?: integer64;

  /**
  * Extensions for size
  */
  _size?: Element;

  /**
  * The calculated hash of the data using SHA-1. Represented using base64.
  */
  hash?: base64Binary;

  /**
  * Extensions for hash
  */
  _hash?: Element;

  /**
  * A label or set of text to display in place of the data.
  */
  title?: string;

  /**
  * Extensions for title
  */
  _title?: Element;

  /**
  * The date that the attachment was first created.
  */
  creation?: dateTime;

  /**
  * Extensions for creation
  */
  _creation?: Element;

  /**
  * Height of the image in pixels (photo/video).
  */
  height?: positiveInt;

  /**
  * Extensions for height
  */
  _height?: Element;

  /**
  * Width of the image in pixels (photo/video).
  */
  width?: positiveInt;

  /**
  * Extensions for width
  */
  _width?: Element;

  /**
  * The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.
  */
  frames?: positiveInt;

  /**
  * Extensions for frames
  */
  _frames?: Element;

  /**
  * The duration of the recording in seconds - for audio and video.
  */
  duration?: decimal;

  /**
  * Extensions for duration
  */
  _duration?: Element;

  /**
  * The number of pages when printed.
  */
  pages?: positiveInt;

  /**
  * Extensions for pages
  */
  _pages?: Element;

}
