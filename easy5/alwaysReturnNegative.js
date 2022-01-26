/*
Write a function that takes a number as an argument. If the argument is a
positive number, return the negative of that number.
If the argument is a negative number, return it as-is.
*/

// function negative(num) {
//   return num < 0 ? num : Number(`-${num}`);
// }

// function negative(num) {
//   return num < 0 ? num : num * -1;
// }

function negative(num) {
  return Math.abs(num) * -1;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

/*
LS Solution:

function negative(number) {
  return Math.abs(number) * -1;
}

The solution uses the Math.abs method to convert any type of number argument
to a positive number. The solution then multiplies this positive number
by -1 to convert it to a negative number, and returns the result.

Further Exploration
An alternative solution would be to use the ternary operator (e.g., a ? b : c).
If you haven't already used it, try refactoring the solution using the ternary operator.

*/


