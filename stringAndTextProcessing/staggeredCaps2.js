"use strict";

/*
Modify the function from the previous exercise so that it ignores
non-alphabetic characters when determining whether a letter should be
upper or lower case. Non-alphabetic characters should still be included
in the output string, but should not be counted when determining the
appropriate case.

problem:
given a string, capitalize the first alphabetic letter then every other
alphabetic letter after, don't count the non alphabetic characters in the pattern
but they should be included in the output string
rules- ignore nonalphabetic chars when determining whether a letter should be transformed
include the nonalpha chars in the output string
input- string
output- string

algorithm:
split the string into characters
iterate through arrays of chars
return the transformed or not transformed char
if char is a nonalpha, add the char as is
if the char is alpha then transform

notes:
first char is always uppercased
on that next char, lowercase it if the previous char was also an alpha


reduce
if char is nonalpha return char
if prev char was an uppercase letter
*/


// function staggeredCase(str) {
//   let currentCase = 'a';

//   return str.split('').map(char => {
//     if (/[^a-z]/i.test(char)) return char;
//     if (/[a-z]/.test(currentCase)) {
//       return currentCase = char.toUpperCase();
//     } else {
//       return currentCase = char.toLowerCase();
//     }
//   }).join('');
// }

function staggeredCase(str) {
  let currentCase;

  return str.split('').map(char => {
    if (/[^a-z]/i.test(char)) return char;
    if (/[A-Z]/.test(currentCase)) {
      return currentCase = char.toLowerCase();
    } else {
      return currentCase = char.toUpperCase();
    }
  }).join('');
}


console.log(staggeredCase('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS') === "AlL cApS");                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers') ===  "IgNoRe 77 ThE 444 nUmBeRs");    // "IgNoRe 77 ThE 444 nUmBeRs"

/*
LS Solution:
function staggeredCase(string) {
  let needUpper = true;
  let newChar;

  return string.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      if (needUpper) {
        newChar = char.toUpperCase();
      } else {
        newChar = char.toLowerCase();
      }

      needUpper = !needUpper;
      return newChar;
    } else {
      return char;
    }
  }).join('');
}

The main difference between this solution and the previous one is the approach
for determining whether to change a character's case. Instead of using the
index position of the character, this solution uses a boolean switch, needUpper.
When the case of a letter character changes, the solution flips the value of
the switch; otherwise, the switch's value remains the same.
This behavior allows the function to ignore the effect of passing over
non-letter characters. Because of this, the solution toggles the needUpper
switch before returning the newChar.
*/