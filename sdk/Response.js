const uuid = require('uuid/v1');

class Response {
  constructor({
    _id = uuid(),
    name = '',
    text = '',
    disabled = false,
    meta = {}
  }) {
    this._id = _id;
    this.disabled = disabled;
    this.name = name;
    this.text = text;
    this.meta = meta;
  }
}

module.exports = Response;