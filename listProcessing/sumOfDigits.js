"use strict";

/*
Write a function that takes one argument, a positive integer, and returns
the sum of its digits. Do this without using for, while, or do...while loops
- instead, use a series of method calls to perform the sum.
*/

function sum(int) {
  return [...String(int)].reduce((sum, num) => sum + Number(num), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

/*
LS Solution:
function sum(number) {
  return String(number)
    .split("")
    .reduce((accum, digit) => accum + Number(digit), 0);
}

The solution uses a list processing method — Array.prototype.reduce — to
get the sum of the digits. It first converts the numerical argument number
to a string, then splits it using an empty string as a separator to get each
character. The elements of the resulting array are then summed using reduce.
Within the callback function passed to reduce, we convert parameter digit
to a number using Number(). accum (the accumulator) will already be a number.
*/