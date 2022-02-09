/*
Write a function that displays a four-pointed diamond in an nxn grid,
where n is an odd integer supplied as an argument to the function.
You may assume that the argument will always be an odd integer.

Problem:
given a number `n`, display a 4-pointed diamond that is `n` rows and `n` columns

rules/requirements:
- input will always be an odd integer
- the diamond will be `n`by`n` and will be made up of `*`

input - number
output - displayed diamond (console.log rather than return)

questions:
- Do we have to worry about taking care of invalid inputs?
  - inputs that aren't an odd integer
- Do we ignore leading 0s?
- How do we handle negative numbers?
- How do we handle 0?
- Is there a max number?
- If we are given a string integer '5' do we coerce it into a number or treat it as invalid?
- How do we handle missing argument?
  - Multiple arguments? Should we just use the first and ignore any others?

Examples / test cases:
happy paths:
diamond(5);
  *
 ***
*****
 ***
  *

diamond(1);
// logs
// *


diamond(3);
// logs
//  *
// ***
//  *

 diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

edge cases:
diamond(2);    // ''
diamond(4);    // ''
diamond('3');  // ''
diamond();     // ''
diamond(NaN);  // ''
diamond(5, 7);
logs
  *
 ***
*****
 ***
  *


Data Structure:
number (input)
string (output)
arrays?


Notes:
the middle row of the diamond is always `n` *'s long
the first and last row are always 1 * with (n/2) rounded up spaces on either side
starting from the top the count of * is 1 and spaces is n - 1
then we add 2 stars and subtract 1 space until we reach the middle where stars is equal to `n`

then we go the opposite direction
add 1 space and subtract 2 stars

Algorithm:
- guard clause(s) helper method `invalidInput`
  - if `invalidInput` return true, log 'Invalid Input' then return empty string ''
  - else continue with program
- initialize `spaceCount` to (n - 1) / 2
- initialize `starCount` to 1
- initialize `secondHalf` = false
- use a for loop starting at row 1 and iterate while row is less than or equal to `n`
  - create a result string with ' ' repeated spaceCount times and concatenate with
    '*' repeated starCount times
  - if `secondHalf` is false increment starCount by 2 else decrement by 2
  - if `secondHalf` is false decrement space count by 1 else increment by 1
  - if starCount === `n` reassign `secondHalf` to true


- helper `invalidInput`
  - check if value is not an Integer or is not odd
    - return true if yes
    - return false otherwise


*/

function invalidInput(input) {
  return !Number.isInteger(input) || input % 2 === 0;
}

function diamond(n) {
  let result = ''
  if (invalidInput(n)) {
    console.log('Invalid Input')
    return result;
  }

  let starCount = 1;
  let spaceCount = (n - starCount) / 2;
  let secondHalf = false;

  for (let row = 1; row <= n; row++) {
    result = `${' '.repeat(spaceCount)}${'*'.repeat(starCount)}`;
    console.log(result);
    secondHalf ? starCount -= 2 : starCount += 2
    secondHalf ? spaceCount += 1 : spaceCount -= 1
    if (starCount === n) secondHalf = true;
  }
  return result
}



diamond(5);
//   *
//  ***
// *****
//  ***
//   *

diamond(1);
// logs
// *


diamond(3);
// logs
//  *
// ***
//  *

 diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// edge cases:
// diamond(2);    // ''
// diamond(4);    // ''
// diamond('3');  // ''
// diamond();     // ''
// diamond(NaN);     // ''
// diamond(5, 7);
// logs
//   *
//  ***
// *****
//  ***
//   *