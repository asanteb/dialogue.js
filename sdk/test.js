const { DialogueSet, Dialogue, Response } = require('./index');

const set = new DialogueSet({
  name: 'death question'
})

set.createDialogue({
  name: 'my death response',
  text: 'I am going to shoot you. what are you going to do about it?',
  responses: [
      'Shoot back!',
      'Slap gun away',
      'Run away',
      'Commit suicide',
      'Hold on a minute, I do not believe a word you are saying. Dum dum'
  ]
})

console.log('Hello');