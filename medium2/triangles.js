// Tri-Angles
// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees,
// and every angle must be greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments and
// returns one of the following four strings representing the triangle's
// classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to
// worry about floating point errors. You may also assume that the arguments
// are in degrees.

/*
Problem:
- given 3 numbers, return a string representing the classification
  (right, acute, obtuse or invalid)

rules/requirements:
- right angle => 1 angle is a right angle (exactly 90 degrees)
- acute angle => all 3 angles are < 90 deg
- obstuse => 1 angle is > 90 deg, 2 angles < 90 deg
- valid triangle => all 3 angles must sum up to exactly 180 deg
  - every angle must be > 0 deg
  - if either of the above requirements aren't met, then invalid triangle


input: 3 numbers
output: string

questions:
- decimal args =>
  - treat like normal valid numbers, return classification
- if more than 3 args, just use the first 3
- if less than 3 args => 'invalid'
- anything that isnt a positive whole number or decimal is considered invalid

Examples/ test cases:
console.log(triangle(60, 70, 50));       // "acute"
- all angles < 90 and angles > 0
- sum up to 180 deg

console.log(triangle(30, 90, 60));       // "right"
- 1 angle is 90 deg
- all angles > 0
- sum up to 180 deg

console.log(triangle(120, 50, 10));      // "obtuse"
- 1 angle > 90
- other 2 are < 90
- all angles > 0
- sum up to 180 deg

console.log(triangle(0, 90, 90));        // "invalid"
- not all angles > 0

console.log(triangle(50, 50, 50));       // "invalid"
- sum isn't 180 deg


Data structures:
numbers (input)
arrays ?
strings (output)

notes:
invalid inputs
- less than 3 args
- any of the args are not Numbers
- if any are < 1


- right angle => 1 angle is a right angle (exactly 90 degrees)
  - all angles > 0
  - sum up to 180 deg
- acute angle => all 3 angles are < 90 deg
  - all angles < 90 and angles > 0
  - sum up to 180 deg
- obstuse => 1 angle is > 90 deg, 2 angles < 90 deg
  - 1 angle > 90
  - other 2 are < 90
  - all angles > 0
  - sum up to 180 deg

Algorithm:
- guard clause(s): helper method `invalidInput`
  - if `invalidInput` return true, return 'invalid'

- if `rightAngle` returns true, return 'right'
- if `acuteAngle` returns true, return 'acute'
- return 'obstuse'

- helper method `rightAngle` (takes the angles as an array)
  - iterate through angles use `some` to check if at least one angle is 90
    - if yes, return true

- helper method `acuteAngle` (takes the angles as an array)
  - iterate through angles use `every` to check if all angles are less than 90
    - if yes, return true

- helper method `invalidInput` (args need to be an array to get length)
  - check if length of input is less than 3 OR
  - iterate through args using some to check if any are NOT typeof === 'number' OR
  - iterate through args to check if any are NOT > 0 OR
  - iterate through args using reduce? to sum up the numbers
    - check if return value is < 180
*/

function invalidInput(angles) {
  return angles.length < 3 ||
    angles.some(angle => !Number.isFinite(angle)) ||
    angles.some(angle => angle <= 0) ||
    angles.reduce((sum, angle) => sum + angle) < 180;
}

function rightAngle(angles) {
  return angles.some(angle => angle === 90);
}

function acuteAngle(angles) {
  return angles.every(angle => angle < 90);
}

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  if (invalidInput(angles)) return 'invalid';
  if (rightAngle(angles)) return 'right';
  if (acuteAngle(angles)) return 'acute';
  return 'obtuse';
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"


console.log(triangle(60, 70, 50, 1));       // "acute"
console.log(triangle(30.5, 90, 59.5));       // "right"
console.log(triangle(50, 50));       // "invalid"
console.log(triangle(50, [], 10));       // "invalid"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle(50, 50, Infinity));       // "invalid"
console.log(triangle(50, 50, NaN));       // "invalid"

// 29 mins