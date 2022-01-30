"use strict";
/*
Write a function that takes an array of strings and returns an array of
the same string values, but with all vowels (a, e, i, o, u) removed.
*/

function removeVowels(arr) {
  return arr.map(str => str.replace(/[aeiou]/ig, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]


/*
LS Solution:
Approach/Algorithm
You can look at this exercise as containing two parts.
The first part is transforming the array argument into another array.
The second part is processing the strings and transforming them into
new strings that do not have vowels. Note that the first part is
dependent on the result of the second part (Hint: "nested?").

function removeVowels(stringArray) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return stringArray.map(string => string.split('').map(char => {
    if (VOWELS.includes(char)) {
      return '';
    } else {
      return char;
    }
  }).join(''));
}

The shape of this exercise is that of transformation.
The intention is to process a given list of strings and remove the vowels
from each string. Given this, the solution uses Array.prototype.map to
transform each string element in the array. The transformation is done
by converting the string into an array of characters and then mapping
each vowel character to an empty string (''). After the solution transforms
the characters, it joins them together and returns the resulting string as a
new element of the new string array.

Further Exploration:
The current solution uses the transformation list processing strategy to remove
the vowels from the strings. Reimplement the solution using a regex-based
approach, if you have not done so already.
*/