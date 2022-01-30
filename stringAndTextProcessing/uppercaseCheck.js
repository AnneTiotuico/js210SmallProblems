"use strict";
/*
Write a function that takes a string argument and returns true if all of
the alphabetic characters inside the string are uppercase; otherwise,
return false. Ignore characters that are not alphabetic.
*/

function isUppercase(str) {
  return !str.replace(/[^a-z]/g, '');
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

/*
LS Solution:
function isUppercase(string) {
  return !/[a-z]/.test(string);
}

This is one of the problems where you can take advantage of regex
(regular expressions) to process strings. The solution uses a regex pattern
with the RegExp.prototype.test method to determine if there are any lowercase
letters in the string argument. The solution then uses the ! (logical NOT)
operator to reverse the boolean return value so that the function returns
false if there are any lowercase letters.

LS Student:
function isUppercase(string) {
  return string.toUpperCase() === string;
}

*/