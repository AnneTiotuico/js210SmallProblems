"use strict";

/*
Write a function that returns a list of all substrings of a string that are
palindromic. That is, each substring must consist of the same sequence of
characters forwards as backwards. The substrings in the returned list should
be sorted by their order of appearance in the input string.
Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the
previous exercise.

For the purpose of this exercise, you should consider all characters and
pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and
'Abc-bA' are not. In addition, assume that single characters are not palindromes.


helper method `isPalindrome` that checks if a word is the same reversed and is
longer than 1 character
*/

function leadingSubstrings(string) {
  return [...string].map((_, idx) =>  {
    return string.slice(0, idx + 1);
  });
}

function substrings(string) {
  return [...string].flatMap((_, idx) => leadingSubstrings(string.slice(idx)));
}

function isPalindrome(word) {
  return word === [...word].reverse().join('') && word.length > 1;
}

function palindromes(words) {
  let allSubstrings = substrings(words);
  return allSubstrings.reduce((result, substr) => {
    if (isPalindrome(substr)) result.push(substr);
    return result;
  }, []);
}

// function palindromes(words) {
//   let allSubstrings = substrings(words);
//   return allSubstrings.filter(substr => isPalindrome(substr));
// }

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

/*
LS Solution:
function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

Again, this problem becomes much easier to solve with the help of
the substrings function from the previous exercise. The solution uses
the substrings function to get a list of all the substrings, and then just
uses the isPalindrome function to filter out any substrings that aren't palindromes.

This series of exercises is a good example of how to break down a problem
into manageable chunks. Go over these three exercises again, with that
perspective in mind.

*/