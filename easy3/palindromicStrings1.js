/*
Write a function that returns true if the string passed as an argument is a
palindrome, or false otherwise. A palindrome reads the same forwards and
backwards. For this problem, the case matters and all characters matter.
*/

function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

/*
LS Solution:
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

The solution leverages the Array.prototype.reverse and
Array.prototype.join methods of the Array object by converting
the string input into an array using the String.prototype.split method.

With the use of these methods, the solution is straightforward.
*/