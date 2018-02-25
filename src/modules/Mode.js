import decode from './decode'
import encode from './encode'

export default class Mode {
  constructor (val, label) {
    this.val = val
    this.label = label
  }

  decode (text) {
    return decode(this.val, text)
  }

  encode (text) {
    return encode(this.val, text)
  }
}
