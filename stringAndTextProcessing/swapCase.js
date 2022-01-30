"use strict";
/*
Write a function that takes a string as an argument and returns that string
with every lowercase letter changed to uppercase and every uppercase letter
changed to lowercase. Leave all other characters unchanged.
*/

// function swapCase(str) {
//   return [...str].map(char => {
//     if (/[a-z]/.test(char)) return char.toUpperCase();
//     if (/[A-Z]/.test(char)) return char.toLowerCase();
//     return char;
//   }).join('');
// }

function swapCase(str) {
  return [...str].map(char => {
    return /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

/*
LS Solution:

function swapCase(string) {
  return string.split('').map(char => {
    if (/[a-z]/.test(char)) {
      return char.toUpperCase();
    } else if (/[A-Z]/.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

The solution uses a transformation strategy for swapping the case of the
string argument. If the character is a lowercase letter (/[a-z]/), it is
changed to uppercase; if the character is an uppercase letter (/[A-Z]/),
it is changed to lowercase. All other characters are left unchanged.
Finally, the solution joins the characters together into a new string and
returns it.
*/