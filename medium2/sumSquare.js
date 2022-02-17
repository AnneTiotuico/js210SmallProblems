// Sum Square - Square Sum
// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

// Examples:

/*
Problem:
given a number `n`, return a number
  - compute the difference between the square of the sum of the first `n` positive integers
    and the sum of the squares of the first `n` positive integers


rules/requirements:
- first part is sum of the `n` numbers then squared
- 2nd part is square each `n` number then sum
- return undefined if input isn't a number
- return undefined if input is special num
- if decimal, round up always 1.2 -> 2
- ignore any extra args
- return undefined if no arg
- if 0, return 0

Valid input:
- positive number (can include 0)
- can be a decimal

input: number
output: number

Examples/test cases:
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
- first 3 nums are 1,2,3
- first part of equation is sum them then square them (36)
- second part is square each then sum (14)
- 36 - 14 = 22

console.log(sumSquareDifference(10));     // 2640
- first 10 nums 1 2 3 4 5 6 7 8 9 10
-

console.log(sumSquareDifference(1));      // 0
- 1**2 = 1
- 1**2 = 1
- 1-1 = 0

Data structures:
- numbers (input/output)
- array (keep track of `n` numbers)


Algorithm:
- guard clause helper method `invalidInput`
  - if`invalidInput` returns true, return `undefined`

- reassign `n` to Math.ceil(`n`) to round it up
- initialize `nums` array []
- for loop that starts at `num` = 1  `num` <= `n` increment num by 1
  - push each `num` into array
- at this point we should get a `nums` array containing first `n` digits ex [1, 2, 3]

- initialize `sqSum`
  - iterate through the `nums` using reduce to get the sum
    - square the return value of reduce **2

- initialize `sumSq`
  - iterate through the `nums` using reduce to get the sum
    - within reduce body we want to square each number and add to the total

- return sqSum - sumSq

- helper method `invalidInput`
  - check if input is NOT a finite number OR input is >= 0

*/

function invalidInput(num) {
  return !Number.isFinite(num) || num < 0;
}

function sumSquareDifference(numOfInts) {
  if (invalidInput(numOfInts)) return undefined;
  if (numOfInts === 0) return 0;
  numOfInts = Math.ceil(numOfInts);

  let nums = [];
  for (let num = 1; num <= numOfInts; num++) {
    nums.push(num);
  }

  let sqSum = nums.reduce((total, num) => total + num)**2;
  let sumSq = nums.reduce((total, num) => total + num**2);

  return sqSum - sumSq;
}



console.log(sumSquareDifference(NaN));      // undefined
console.log(sumSquareDifference(''));      // undefined
console.log(sumSquareDifference(-2));      // undefined
console.log(sumSquareDifference());      // undefined

console.log(sumSquareDifference(2.2));     // 22
console.log(sumSquareDifference(2.5));     // 22

console.log(sumSquareDifference(0));      // 0
console.log(sumSquareDifference(3, 1));    // 22

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

//23 mins