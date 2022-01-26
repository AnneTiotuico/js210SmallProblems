/*
Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

*/

function digitList(num) {
  return String(num).split('').map(digit => Number(digit));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]


/*
LS Solution:
The solution converts the number argument to a string,
then uses the String.prototype.split method to split the string into an array
of single-digit strings. It then iterates over the array, converting each
digit string to a number and pushing it to the numberArray.
Finally, the solution returns the numberArray.

Further Exploration
A more concise approach would be to use the Array.prototype.map method.
Refactor the current solution to make use of this method, if you haven't already.

*/