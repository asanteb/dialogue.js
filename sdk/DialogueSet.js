const uuid = require('uuid/v1');
let { Dialogue, Response } = require('./index');

class DialogueSet {
  constructor({
    _id = uuid(),
    name = '',
    dialogues = [],
    history = [],
    meta = {}
  }) {
    this._id = _id;
    this.name = name;
    this.dialogues = dialogues;
    this.history = history;
    this.meta = meta;
  }

  createDialogue(opts = {}) {
    const { name, responses = [], _id, text, meta } = opts;
    console.log(Dialogue);
    const generatedResponses = responses.map(response => {
      const resOpts = typeof response === 'object' ? response : { text: response };
      return new Response(resOpts);
    });

    const context = this._id ? this : null;

    const dialogue = new Dialogue({
      _id,
      name,
      text,
      meta,
      context,
      responses: generatedResponses,
    });

    this.dialogues.push(dialogue);
    return dialogue;
  }
}

module.exports = DialogueSet;