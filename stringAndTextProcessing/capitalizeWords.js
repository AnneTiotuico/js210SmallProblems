"use strict";
/*
Write a function that takes a string as an argument and returns that
string with the first character of every word capitalized and all subsequent
characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.
*/

// function wordCap(str) {
//   return str.split(' ').reduce((result, word) => {
//     return result.concat(word[0].toUpperCase(), word.slice(1).toLowerCase(), ' ');
//   }, '');
// }

function wordCap(str) {
  return str.split(' ').map(word => {
    return word[0].toUpperCase().concat(word.slice(1).toLowerCase());
  }).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'


/*
LS Solution:
function wordCap(words) {
  return words.split(' ')
              .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}

The solution uses the transformation list processing strategy to capitalize
the first character of each word.

The solution breaks down the words argument string by splitting it, using a
space (' ') as a separator. The solution then uses the String.prototype.slice
method to split each word into two parts: (1) the first character and (2)
all subsequent characters. The solution then calls String.prototype.toUpperCase
and String.prototype.toLowerCase on each part, respectively. Next, the callback
function concatenates the two parts and returns the resulting string.
Finally, the solution joins the array of words together into a string and
returns it.

Notice that toUpperCase handles the scenario in which the first character
is not alphabetic, and toLowerCase does the same for the remaining characters.

*/