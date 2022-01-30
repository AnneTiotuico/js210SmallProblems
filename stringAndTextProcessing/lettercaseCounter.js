"use strict";
/*
Write a function that takes a string and returns an object containing
three properties: one representing the number of characters in the string
that are lowercase letters, one representing the number of characters that
are uppercase letters, and one representing the number of characters that
are neither.
*/

function getMatchCounts(str, regex) {
  return str.match(regex) ? str.match(regex).length : 0;
}

function letterCaseCount(str) {
  return {
    lowercase: getMatchCounts(str, /[a-z]/g),
    uppercase: getMatchCounts(str, /[A-Z]/g),
    neither: getMatchCounts(str, /[^a-z]/ig)
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

/*
LS Solution:
function letterCaseCount(string) {
  const lowerArray = string.match(/[a-z]/g) || [];
  const upperArray = string.match(/[A-Z]/g) || [];
  const neitherArray = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerArray.length,
    uppercase: upperArray.length,
    neither: neitherArray.length,
  };
}

The solution uses the String.prototype.match method to process the
string argument. The method takes a regex pattern as an argument and returns
an array of characters that match the pattern. The solution first gets an array
of matches for each character type and assigns each array to its respective
variable. If the solution does not find any matches, it sets the variable to
an empty array ([]) so that an error will not be raised when the length property
is accessed on the variable later. Finally, the solution returns an object with
three properties, setting the value of each to the length of the corresponding
array (i.e., the lowercase property has a value of lowerArray.length).

The solution uses regular expressions to count each of the three types of
characters. If you are not familiar with regex, a brief explanation is shown below.

/[a-z]/g : Checks if the character is a lowercase letter between 'a' and 'z'.
/[A-Z]/g : Checks if the character is an uppercase letter between 'A' and 'Z'.
/[^a-z]/gi : Checks if the character is neither an uppercase letter nor a lowercase letter.
g : Tells the regex engine to search the entire string.
i : Tells the regex engine to ignore case.


LS Student:
function letterCaseCount(string) {
  return {
    lowercase: string.replace(/[^a-z]/g, '').length,
    uppercase: string.replace(/[^A-Z]/g, '').length,
    neither: string.replace(/[a-z]/gi, '').length,
  }
}
*/

