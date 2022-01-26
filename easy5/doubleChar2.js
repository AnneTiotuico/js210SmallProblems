/*
Write a function that takes a string, doubles every consonant character in the string,
and returns the result as a new string.
The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
*/

function doubleConsonants(string) {
  return string.replace(/([b-df-hj-np-tv-z])/ig, '$1$1');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

/*
LS Solution:
const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(string) {
  const stringArray = [];

  for (let i = 0; i < string.length; i += 1) {
    stringArray.push(string[i]);
    if (CONSONANTS.includes(string[i].toLowerCase())) {
      stringArray.push(string[i]);
    }
  }

  return stringArray.join('');
}

This exercise is nearly identical to the previous exercise, so the solution is also similar.
The main difference is that this solution needs to check each character to see
if it is a consonant. This can be done in a variety of ways,
but the solution does it in the following way. It creates an array of
lowercase consonants, then iterates over each character of the input string,
checking to see if the character exists in the CONSONANTS array.
To account for uppercase consonants, the solution converts each character to
lowercase before performing the check.

*/


