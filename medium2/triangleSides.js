/*
Triangle Sides
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must
be greater than the length of the longest side, and every side must have a
length greater than 0. If either of these conditions is not satisfied,
the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as
arguments and returns one of the following four strings representing the
triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.
*/

/*
Problem:
given 3 numbers, return a string representing the triangle's classification

rules/requirements:
- equilateral: all 3 sides are of equal length
- isosceles: 2 sides are of equal length while 3rd is different
- scalene: all 3 sides are different lengths
- valid triangle:
  - sum of lengths of 2 shortest sides must be > length of longest side
  - all sides must have length > 0
- the sides can be integers or decimals

input: 3 numbers
output: string

questions:
- How do we handle cases where arguments are not numbers?
- Do we need to handle cases that don't have exactly 3 arguments?
  - less than 3 args (2 args, no args)
  - more than 3 args
- Do we need to worry about leading 0s?

Examples/test cases:
triangle(3, 3, 3);        // "equilateral"
- all 3 sides are equal lengths
triangle(3, 3, 1.5);      // "isosceles"
- 2 sides are equal and one is different

triangle(3, 4, 5);        // "scalene"
- all different lengths
- all lengths > 0
- 2 shortest sides > longest side (3 + 4 > 5)

triangle(0, 3, 3);        // "invalid"
- one length is 0 (not greater than 0)

triangle(3, 1, 1);        // "invalid"
- lengths of the 2 shortest sides are NOT greater than longest side
  - 1 + 1 IS NOT > 3

Data Structures:
- numbers (input)
- strings (output)

Algorithm:
- guard clause: helper method `invalidInput`
  - if `invalidInput` returns true, return 'invalid'

- put all 3 sides within an array and sort it from least to greaterst and save in variable `sortedSides`
- iterate through `sortedSides` check if every side is equal to side[0]
  - if yes, return 'equilateral'
  - if no, continue

- check if side[1] is equal to side[0] or side[2]
  - if yes, check if the sum of side[0] and side[1] are > side[3]
    - if yes, return 'isosceles'
    - if no, return 'invalid'

- iterate through `sortedSides` check if some side is equal to side[1] besides side[1]
  - if no, check if the sum of side[0] and side[1] are > side[3]
    - if yes, return 'scalene'
    - if no, return 'invalid'


- helper method `invalidInput`
  - check if input is (NOT a Number and NOT greater than 0 or is Infinity) OR is NOT exactly 3 args
    - if above is true, return true
    - else false

*/

// function invalidInput(...args) {
//   return args.some(arg => typeof arg !== 'number' || arg < 0 || arg === Infinity || Number.isNaN(arg))
// }

// function triangle(side1, side2, side3) {
//   if (invalidInput(side1, side2, side3)) return 'invalid';

//   let sortedSides = [side1, side2, side3].sort();
//   if (sortedSides.every(side => sortedSides[0] === side)) return 'equilateral'
//   if (sortedSides[1] === sortedSides[0] || sortedSides[1] === sortedSides[2]) {
//     if (sortedSides[0] + sortedSides[1] > sortedSides[2]) return 'isosceles'
//   } else {
//     if (sortedSides[0] + sortedSides[1] > sortedSides[2]) return 'scalene'
//   }
//   return 'invalid'
// }

// function invalidInput(...args) {
//   return args.some(arg => !Number.isFinite(arg) || arg < 0) || !validTriangle(args.sort())
// }

// function validTriangle(sides) {
//   return sides[0] + sides[1] > sides[2];
// }

// function triangle(side1, side2, side3) {
//   if (invalidInput(side1, side2, side3)) return 'invalid';

//   let sortedSides = [side1, side2, side3].sort();
//   if (sortedSides.every(side => sortedSides[0] === side)) return 'equilateral';

//   if (sortedSides[1] === sortedSides[0] || sortedSides[1] === sortedSides[2]) {
//     if (validTriangle(sortedSides)) return 'isosceles';
//   } else {
//     if (validTriangle(sortedSides)) return 'scalene';
//   }
// }

function invalidInput(args) {
  return args.some(arg => !Number.isFinite(arg) || arg < 0) || !validTriangle(args);
}

function validTriangle(sides) {
  return sides[0] + sides[1] > sides[2];
}

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort();
  if (invalidInput(sides)) return 'invalid';
  if (sides.every(side => sides[0] === side)) return 'equilateral';
  if (sides[1] === sides[0] || sides[1] === sides[2]) return 'isosceles';
  return 'scalene';
}


console.log(triangle(3, 3, 3) === "equilateral");
console.log(triangle(3, 3, 1.5) === "isosceles");
console.log(triangle(3, 4, 5) === "scalene");
console.log(triangle(0, 3, 3) === "invalid");
console.log(triangle(3, 1, 1) === "invalid");
console.log(triangle(3, 3, Infinity) === "invalid");
console.log(triangle(3, 3, -Infinity) === "invalid");
console.log(triangle(3, 3) === "invalid");
console.log(triangle(3, 3, NaN) === "invalid");

// 38 mins 3 secs