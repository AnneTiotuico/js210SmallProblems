/*
Fibonacci Numbers (Recursion)
The Fibonacci series is a sequence of numbers in which each number is the sum
of the previous two numbers. The first two Fibonacci numbers are 1 and 1.
The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5,
and so on. In mathematical terms, this can be represented as:

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

This simple sequence can easily be computed using a recursive function.
A recursive function is one in which the function calls itself.
For example, the following function is a recursive function that computes
the sum of all integers between 1 and n:

function sum(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
}

A good recursive function has three primary qualities:

It calls itself at least once.
It has an ending condition — e.g., if (n === 1), in the sum function above.
The results of each recursion are used in each step — e.g., n + sum(n - 1) uses
sum(n - 1).
Write a recursive function that computes the nth Fibonacci number, where nth is
an argument passed to the function.

NOTE: This exercise verges on the Advanced level of exercises, so do not be
discouraged if you are not able to solve it on your own; recursion is tricky,
and even experienced developers can have difficulty dealing with it.

*/

/*
Problem:
given a number n, return the nth fibonacci number


rules/requirements:
- fibonacci can be represented like:
  F(1) = 1
  F(2) = 1
  F(n) = F(n - 1) + F(n - 2) where n > 2
- function must be recursive
  - must call itself at least once
  - have an ending condition
  - results of each recursion are used in each step

input: number
output: number

questions:
- How do we handle inputs that are not integers?
  - special numbers like NaN, (-)Infinity
  - How do we handle 0?
  - What about fractional numbers?
  - What about negative numbers?
  - Can the input have leading 0s?
  - What about numbers being represented as string digits? ex. '2'
- Should the function return or log the result?
- How do we handle no argument being passed in?
  - What about more than 1 argument?


Examples/ test cases:
console.log(fibonacci(1));       // 1
- fib 1 => 1, given rule
console.log(fibonacci(2));       // 1
- fib 2 => 1, given rule

console.log(fibonacci(3));       // 2
- fib 3 => 3
  f(3 - 1) + f(3 - 2) = f(2) + f(1) = 1 + 1 = 2

console.log(fibonacci(4));       // 3
- fib 4 => 3
  f(4 - 1) + f(4 - 2) =
  f(3) + f(2) =
  2 + 1 = 3

console.log(fibonacci(5));       // 5
- fib 5 => 5
  f(5 - 1) + f(5 - 2) =
  f(4) + f(3) =
  3 + 2 = 5

Data Structure:
- numbers

Algorithm:
- guard clause `invalidInput`
  - if `invalidInput` returns true, return 'Invalid Input'
  - if input is equal to 0 return 0
  - if input is equal to 1 return 1
  - if input is equal to 2 return 1
  - if none of the above if branches execute then
    - return fib(num - 1) + fib(num - 2)

- `invalidInput` helper method
  - check if input is NOT an Integer greater than or equal to 0
    - if true, return true
    - else false

*/

function invalidInput(value) {
  return !Number.isInteger(value) || value < 0;
}

function fibonacci(fibNum) {
  if (invalidInput(fibNum)) return 'Invalid Input';
  if (fibNum === 1 || (fibNum === 2)) return 1;
  return fibonacci(fibNum - 1) + fibonacci(fibNum - 2);
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

// 20 mins 40 secs