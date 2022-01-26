const rlSync = require('readline-sync');

const noun = rlSync.question('Enter a noun: ');
const verb = rlSync.question('Enter a verb: ');
const adjective = rlSync.question('Enter an adjective: ');
const adverb = rlSync.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);