const uuid = require('uuid/v1');

class Dialogue {
  constructor({
    _id = uuid(),
    name = '',
    text = '',
    responses = [],
    selectedResponse = undefined,
    meta = {},
    context = undefined
  }) {
    this.name = name;
    this.text = text;
    this.responses = responses;
    this.selectedResponse = selectedResponse;
    this._id = _id;
    this.meta = meta;
    this.context = context;
  }

  pickResponse(responseId) {
    const { _id } = this;

    if (context) {
      const exists = context.history.find(v => v._id === _id);
      if (!exists) context.history.push({ _id, responseId });
    }

    this.selectedResponse = responseId;
  }
}

module.exports = Dialogue;