/*
Take the number 735291 and rotate it by one digit to the left, getting 352917.
Next, keep the first digit fixed in place and rotate the remaining digits to
get 329175. Keep the first two digits fixed in place and rotate again to get
321759. Keep the first three digits fixed in place and rotate again to get
321597. Finally, keep the first four digits fixed in place and rotate the
final two digits to get 321579. The resulting number is called the maximum
rotation of the original number.

Write a function that takes an integer as an argument and returns the
maximum rotation of that integer. You can (and probably should) use the
rotateRightmostDigits function from the previous exercise.
*/

/*
Problem:
given a number, rotate it by one digit to the left
then keep the first digit fixed and rotate the remaining digits
then keep the first 2 digits fixed and rotate the remaining digits
then keep the first 3 digits fixed and rotate the remaining digits
repeat until there are only 2 digits to rotate
- repeat process `length of the input - 2` times
then return the maximum rotation of the given number

rules/requirements:
- first move the first digit to the end
- then keep first digit fixed and rotate remaining
- increment the fixed digits by 1 after each iteration
- decrement the numbers to rotate by 1 after each iteration
- repeat `length of input - 2` iterations
- return undefined for non integer inputs
- leading zeros get dropped

input: number
output: number

examples/test cases:
maxRotation(735291);          // 321579
- move `7` to the end => 352917
- keep first num fixed, rotate the rest (5 digits) => 329175
- keep first 2 nums fixed, rotate the rest (4 digits) => 321759
- keep first 3 nums fixed, rotate the rest (3 digits) => 321597
- keep first 4 nums fixed, rotate the rest (2 digits) => 321579

maxRotation(3);               // 3
- return num as is since there is only 1 num

maxRotation(35);              // 53
- move `3` to the end => 53

maxRotation(105);             // 15 -- the leading zero gets dropped
- move `1` to the end => 051
- keep first num fixed, rotate the rest => 015
- drop leading zero => 15

maxRotation(8703529146);      // 7321609845

data structures:
numbers
arrays

algorithm:
- use guard clause from previous ex to make sure we have a valid integer input
  - if it returns true, return undefined

- initialize `result` to the result of moving the first digit to the end
  - convert the input to a string, split into array of digits
  - shift the first digit and push to the end
  - join digits back together and  convert back to number


- use a while loop starting at 1 `rotation` and stopping until we reach length of input - 2
  - pass in `result` to the `rotateRightmostDigits` along with `rotation` as the second arg
    - reassign the return value to result;
  - increment `rotation` by 1
- return `result`

*/

function invalidInput(input) {
  return !Number.isInteger(input);
}

function rotateRightmostDigits(num, numToRotate) {
  let digits = String(num).split('');
  let firstHalf = digits.slice(0, -numToRotate);
  let numsToRotate = digits.slice(-numToRotate);

  numsToRotate.push(numsToRotate.shift());
  let result = firstHalf.concat(numsToRotate).join('');
  return Number(result);
}

function maxRotation(num) {
  if (invalidInput(num)) return undefined;
  let digits = String(num).split('');
  digits.push(digits.shift());
  let result = Number(digits.join(''));
  let rotation = 1;

  while (rotation <= String(num).length - 2) {
    let numToRotate = String(num).length - rotation;
    result = rotateRightmostDigits(result,  numToRotate);
    rotation += 1;
  }

  return result;
}

// Examples:
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845


// 41 mins 22 secs