/*
Madlibs Revisited
Let's build another program using madlibs. We made a similar program in the Easy exercises, but this time the requirements are a bit different.

Build a madlibs program that takes a text template as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text template. Choose the right way to structure your template and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll be defining.

Examples:

Note: The quotes in the example strings returned by the madlibs function are only shown for emphasis. These quotes are not present in the actual output strings. The words in quotes come from the list of texts and it is the madlibs function that puts them in.

*/

/*
Problem:
create a program that takes a string/template as input and returns a string that is the template with randomized nouns, verbs, etc plugged in

rules/requirements:
- you can build your list of nouns, verbs, adjectives, adverbs directly into the program
- quotes shouldnt be included in output
- defined your own templates(inputs)

input: string
output: string

questions:
- does the input need to be multiple lines? can it be continous line?

Examples/test cases:
madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

// The ${adjective} brown ${noun} ${adverb}
// ${verb} the ${adjective} yellow
// ${noun}, who ${adverb} ${verb} his
// ${noun} and looks around.

Data structures:
- template literal string( input)
- object to hold replacements and their text
  - category will be key and value will be array of diff texts
- string (output)
- regex to check for replacements ${replacement}

Algorithm:
- create helper method `randomInt`
- create object const that holds replacement texts
*/

const template1 = 'The ${adjective} brown ${noun} ${adverb} ' +
                '${verb} the ${adjective} yellow ' +
                '${noun}, who ${adverb} ${verb} his ' +
                '${noun} and looks around.';

const template2 = "The ${noun} ${verb} the ${noun}'s ${noun}.";

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function madlibs(template) {
  const replacements = { adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
                         noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
                         verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
                         adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
                       };
  let words = template.split(' ');

  return words.map(word => {
    if (Object.keys(replacements).some(replacement => word.includes(replacement))) {
      let category = word.match(/\${([a-z]+)}/)[1];
      let randomIdx = randomInt(0, replacements[category].length - 1);
      return replacements[category][randomIdx];
    }
    return word;
  }).join(' ');
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

// madlibs(template1);
// // The "hungry" brown "cat" "lazily"
// // "licks" the "noisy" yellow
// // "dog", who "lazily" "licks" his
// // "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".