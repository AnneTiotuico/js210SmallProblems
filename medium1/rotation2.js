/*
Write a function that rotates the last n digits of a number.
For the rotation, rotate by one digit to the left, moving the first digit to the end.
*/

/*
Problem:
given a number of multiple digits and a number of a single digit `n`,
return a digit where the last `n` digits are rotated where we rotate one digit
to the left which causes the first digit of the `n` digits to move to the end

rules/requirements:
- the second argument represents how many digits starting from the end need to be rotated
- the first argument is the number we need to modify/rotate
- given the last `n` digits, the second digit moves one to the left and the first digit moves to the end

input: two numbers
output: one number

Questions:
- Do we need to handle non number inputs?
- How do we handle special numbers?
  - NaN, Infinity, -Infinity
- How do we handle fractional numbers?
- How do we handle no argument?
  - more than 2 arguments?
- Will the first arg always be 6 digits?
  - How do we handle 1 digit? return the same digit

examples /test cases:
rotateRightmostDigits(735291, 1);      // 735291
- we only rotate the last digit => no change since the digit is already at the end

rotateRightmostDigits(735291, 2);      // 735219
- rotate the last 2 digits `91` => `19` the rest of the number stays the same
- second digit moves left, and first digit moves to the end

rotateRightmostDigits(735291, 3);      // 735912
- rotate the last 3 digits `291` => `912` the rest of the number stays the same
- second digit `9` moves one left and first digit moves to the end

rotateRightmostDigits(735291, 4);      // 732915
- rotate the last 4 digits `5291` => `2915` the rest of the number stays the same
- second digit `9` moves one left and first digit moves to the end

notes:
- second digit of the last `n` digits moves one to the left
  - causes all following digits to move one left as well
- first digit moves to the end of the number

data structures:
numbers
array

algorithm:
- guard clause(s):
  - if `invalidInput` helper method return true, return undefined
    - remember to check both args are integers

- convert the digits input to a string '735291'
- initialize a variable `digits` to the digits String split into digits ['7', '3', '5', ...]
- initialize a variable `firstHalf` to the slice of the `digits` array
  - starting from index 0 up to the negative of `numToRotate` (second arg)
- initialize `numsToRotate` to slice of `digits` array with negative of `numToRotate` passed in
  - this gets the last `n` digits

- remove the first element of `numsToRotate` and save to variable `firstEl`
- push `firstEl` to the end of `numsToRoate`

- concatenate `firstHalf` with `secondHalf` save to variable `result`
- join the `result` to be one number ['1', '2'] => '12'
- return the `result` converted back to a Number

- `invalidInput` helper method
  - check if input is not an integer
    - return true if yes
    - false otherwise
*/

function invalidInput(input) {
  return !Number.isInteger(input);
}

function rotateRightmostDigits(num, numToRotate) {
  if (invalidInput(num) || invalidInput(numToRotate)) return undefined;

  let digits = String(num).split('');
  let firstHalf = digits.slice(0, -numToRotate);
  let numsToRotate = digits.slice(-numToRotate);

  numsToRotate.push(numsToRotate.shift());

  let result = firstHalf.concat(numsToRotate).join('');
  return Number(result);
}

console.log(rotateRightmostDigits(735291, 1) === 735291);      // 735291
console.log(rotateRightmostDigits(735291, 2) === 735219);      // 735219
console.log(rotateRightmostDigits(735291, 3) === 735912);      // 735912
console.log(rotateRightmostDigits(735291, 4) === 732915);      // 732915
console.log(rotateRightmostDigits(735291, 5) === 752913);      // 752913
console.log(rotateRightmostDigits(735291, 6) === 352917);      // 352917

console.log(rotateRightmostDigits());           // undefined
console.log(rotateRightmostDigits('', 5));      // undefined
console.log(rotateRightmostDigits('12345', 2));      // undefined

// 31 mins 33 secs