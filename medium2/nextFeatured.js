/*
Next Featured Number Higher than a Given Value
A featured number (something unique to this exercise) is an odd number that is
a multiple of 7, with all of its digits occurring exactly once each.
For example, 49 is a featured number, but 98 is not (it is not odd), 97
is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next
featured number greater than the integer. Issue an error message if there is
no next featured number.

NOTE: The largest possible featured number is 9876543201.

*/

/*
Problem:
given a number, return the next featured number greater than given number,
return error message if no next featured num

rules/requirements:
- featured number =>
  - an odd number that is a multiple of 7
  - all of its digits occurring exactly once each
- ex: 49 is a featured num => 7 * 7 = 49, its odd and 4 and 9 occur only once each
      98 is not, not odd
      97 is not, not a multiple of 7
      133 is not (the digit 3 appears twice)
- largest possible featured num is 9876543201

input: number (int)
output: number or invalid string message

questions:
- Can we assume we will always have an integer input?
  - How do we handle decimals?
  - How do we handle 0?
  - How do we handle negative numbers?
  - How do we handle special nums NaN, (-)Infinity
- How do we handle non number inputs?
- Do we have to worry about leading 0s?
- How do we handle no arguments?
  -More than 1 arg?

Examples/test cases:
49 is a featured num => 7 * 7 = 49, its odd and 4 and 9 occur only once each
98 is not, not odd
97 is not, not a multiple of 7
133 is not (the digit 3 appears twice)
9876543201
  - last featured num
9876543202
  - is not, since its greater than max featured num
featured(12);           // 21
  - next featured is 21 since the nearest featured num greater than 12 and ODD (3*7)
  - since 14 is not odd (2*7)
featured(20);           // 21
  - next featured is 21 since the nearest featured num greater than 12 and ODD (3*7)
featured(21);           // 35
  - we don't count the given num as the next greatest featured num
  - return value can't be equal to given num
  - 7*5 = 35, multiple of 7 and odd
featured(997);          // 1029
- 997 % 7 = 3
- 997 - 3 = 994
- 994 + 7 = 1001 but repeated nums
- 1001 + 1008
- 1008 + 7
- 1015 + 7
- 1022 + 7
- 1029 odd, no repeated numbers

Data structures:
- numbers (intput.output)
- strings (output, if error)

Algorithm:
- guard clause(s): helper method `invalidInput`
  - if `invalidInput` returns true, return 'Invalid Input'
  - if `noNextNum` return true, return 'There is no possible number that fulfills those requirements.'
  - if `lessThan7` returns true, return 7

- reassign input `num` to  Math.round(num) (to account for decimals)
- initialize featuredNum = 0;

- initialize `starting` use modulo to get remainder of given num % 7
  - subtract given num - remainder

- do a while loop, while `starting` is NOT odd
  - add 7 to `starting`
  - if sum is Odd (sum % 2 === 1) and new Set(String(sum)).length === String(sum).length
    - if yes, reassign `starting` to sum
- return `starting`


- helper method `invalidInput`
  - check if input is NOT a finite number (not (-)Infinity or NaN) or less than 0
    - return true if above is true,
    - else return false

- helper method `noNextNum`
  - check if input > 9876543201
    - return true if above is true,
    - else return false

- helper method `lessThan7`
  - check if input is less than 7
    - return true if above is true
    - else return false
*/

function invalidInput(num) {
  return !Number.isFinite(num) || num < 0;
}

function noNextNum(num) {
  return num >= 9876543201;
}

function allUnique(num) {
  let strDigits = String(num);
  return new Set(strDigits).size === strDigits.length;
}

// function featured(num) {
//   if (invalidInput(num)) return 'Invalid Input';
//   if (noNextNum(num)) return 'There is no possible number that fulfills those requirements.';

//   num = Math.round(num);
//   let featuredNum;
//   let starting = num - (num % 7) + 7;
//   starting = starting % 2 === 1 ? starting : starting + 7;

//   while (!featuredNum) {
//     if (allUnique(starting)) featuredNum = starting;
//     starting += 14;
//   }

//   return featuredNum;
// }

// didnt need the math.round since % takes care of decimals

function featured(num) {
  if (invalidInput(num)) return 'Invalid Input';
  if (noNextNum(num)) return 'There is no possible number that fulfills those requirements.';

  let featuredNum;
  let starting = num - (num % 7) + 7;
  starting = starting % 2 === 1 ? starting : starting + 7;

  while (!featuredNum) {
    if (allUnique(starting)) featuredNum = starting;
    starting += 14;
  }

  return featuredNum;
}


console.log(featured(NaN));           // 'Invalid Input'
console.log(featured(Infinity));           // 'Invalid Input'
console.log(featured(-Infinity));           // 'Invalid Input'
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
console.log(featured(9876543202));   // "There is no possible number that fulfills those requirements."
console.log(featured(6));           // 7
console.log(featured(0));           // 7

console.log(featured(7));           // 21
console.log(featured(12));           // 21
console.log(featured(12.5));         // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(997.125));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
