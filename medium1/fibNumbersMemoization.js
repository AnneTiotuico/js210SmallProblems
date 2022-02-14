/*
Fibonacci Numbers (Memoization)
Our recursive fibonacci function from the previous exercise is not very efficient.
It starts slowing down with an nth argument value as low as 35. One way to improve
the performance of our recursive fibonacci function (and other recursive functions)
is to use memoization.

Memoization is an approach that involves saving a computed answer for future reuse,
instead of computing it from scratch every time it is needed. In the case of our
recursive fibonacci function, using memoization saves calls to fibonacci(nth - 2)
because the necessary values have already been computed by the recursive calls
to fibonacci(nth - 1).

For this exercise, your objective is to refactor the recursive fibonacci function
to use memoization.

/*
Problem:
given a number n, return the nth fibonacci number without using recursion


rules/requirements:
- function must be non recursive (procedural function)
- fibonacci can be represented like:
  F(1) = 1
  F(2) = 1
  F(n) = F(n - 1) + F(n - 2) where n > 2

input: number
output: number

questions:


Examples/ test cases:


Data Structure:
- numbers

Algorithm:
- guard clause `invalidInput`
  - if `invalidInput` returns true, return 'Invalid Input'


- helper method `invalidInput`
  - check if input is NOT an integer or less than 0
    - return true if above is true
    - else false
*/

// function invalidInput(value) {
//   return !Number.isInteger(value) || value < 0;
// }

// const cache = {};

// function fibonacci(fibNum) {
//   if (invalidInput(fibNum)) return 'Invalid Input';
//   if (fibNum === 1 || (fibNum === 2)) return 1;
//   if (cache[fibNum]) {
//     return cache[fibNum];
//   } else {
//     cache[fibNum]  = fibonacci(fibNum - 1) + fibonacci(fibNum - 2);
//     return cache[fibNum];
//   }
// }


// OR:

function invalidInput(value) {
  return !Number.isInteger(value) || value < 0;
}

const fibNums = [0, 1, 1];

function fibonacci(fibNum) {
  if (invalidInput(fibNum)) return 'Invalid Input';
  if (fibNum <= 2) return 1;

  if (fibNums[fibNum]) {
    return fibNums[fibNum];
  } else {
    fibNums[fibNum]  = fibonacci(fibNum - 1) + fibonacci(fibNum - 2);
    return fibNums[fibNum];
  }
}


console.log(fibonacci(100));
console.log(fibonacci(NaN));     // 'Invalid Input'
console.log(fibonacci(-2));      // 'Invalid Input'
console.log(fibonacci('2'));     // 'Invalid Input'
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));      // 12586269025
console.log(fibonacci(75));      // 2111485077978050