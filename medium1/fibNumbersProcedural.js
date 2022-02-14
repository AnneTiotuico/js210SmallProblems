/*
Fibonacci Numbers (Procedural)
In the previous exercise, we developed a recursive solution for computing the
nth Fibonacci number. In a language that is not optimized for recursion,
some (but not all) recursive functions can be extremely slow and may require
massive quantities of memory and/or stack space. If you tested for bigger nth
numbers, you might have noticed that getting the 50th fibonacci number
already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive
(or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results
without using recursion.


Note that JavaScript can accurately compute integers up to 16 digits long;
this means that fibonacci(78) is the largest Fibonacci number that you can
accurately compute with simple operations in JavaScript.
*/

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

- create an array `twoFibs` that holds the first 2 fib numbers [1, 1]
- initialze a variable `count` to 2
- while count is less than the input num,
  - sum the the contents of the array
  - push the sum at the end of the `twoFibs` array
  - shift the first element of the `twoFibs` array
  - increment count
- return the last element of the `twoFibs` array

- helper method `invalidInput`
  - check if input is NOT an integer or less than 0
    - return true if above is true
    - else false
*/

function invalidInput(value) {
  return !Number.isInteger(value) || value < 0;
}

function fibonacci(fibNum) {
  if (invalidInput(fibNum)) return 'Invalid Input';
  let twoFibs = [1, 1];
  let count = 2;

  while (count < fibNum) {
    let sum = twoFibs[0] + twoFibs[1];
    twoFibs.push(sum);
    twoFibs.shift();
    count += 1;
  }

  return twoFibs[1];
}
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

// 12 mins 3 secs