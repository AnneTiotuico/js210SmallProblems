/*
Seeing Stars
Write a function that displays an 8-pointed star in an nxn grid, where n is an
odd integer that is supplied as an argument to the function.
The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).
*/

/*
Problem:
given an odd integer `oddInt`, output an 8-pointed star in an `oddInt` x `oddInt` grid.

rules/requirements:
- the star must have 8 points
  - 3 on the top, 3 on the bottom, and 2 in the middle
- the smallest input is 7
  - inputs will be 7 and greater

input: number
output: log the star

questions:
- Do we need to worry about non integer inputs?
  - What should we return?
- How do we handle inputs less than 7?
- What about special numbers NaN, Infinity, -Infinity?
  - Fractional numbers?
- How do we handle a string integer? '7'?
- How do we handle no argument passed in?
  - What about more than 1 argument?
- What about negative numbers?
- Leading zeros?

Examples / test cases:

star(7);
// logs
// *  *  *   // 0 starting spaces, 1 star, 2 spaces, 1 star, 2 spaces, 1 star, 0 spaces = 7 chars
//  * * *    // 1 starting space, 1 star, 1 space, 1 star, 1 space, 1 star, 1 space = 7 chars
//   ***     // 2 starting spaces, 3 stars, 2 spaces = 7 chars
// *******   // 0 starting spaces, 7 stars, 0 spaces = 7 chars
//   ***     // 2 starting spaces, 3 stars, 2 spaces = 7 chars
//  * * *    // 1 starting space, 1 star, 1 space, 1 star, 1 space, 1 star, 1 space = 7 chars
// *  *  *   // 0 starting spaces, 1 star, 2 spaces, 1 star, 2 spaces, 1 star = 7 chars

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

notes:
- all rows besides the middle row have 3 stars in them
- middle row has `oddInt` stars and 0 spaces
- the starting spaces and end spaces are equal
- the 2 between spaces are equal
- starting space starts at 0 and increases by 1 until it hits the middle (where stars count = `oddInt`)
  - then we do the bottom half and between spaces are back to 2 then decrement 1 until we hit 0 again
- between space starts at `oddInt` - 3 / 2
- middle row is `oddInt` / 2 rounded up

Data structures:
- numbers (input)
- strings (output, spaces, stars)
- arrays?

Algorithm:
- guard clause helper method `invalidInput`
  - if `invalidInput` returns true, return empty string ''
  - else continue w program

- initialize `startSpaces` to 0
- initialize `betweenSpaces` to `oddInt` - 3 / 2
- initialize `bottomHalf` to false
- use a for loop to iterate starting at row 1 while row is <= `oddInt`
  - concatenate a space `startSpaces` times and one '*'' and ' ' `betweenSpaces` times
    and one '*' and ' ' `betweenSpaces` times and one '*'
  - log the above
  - check if `row` is equal to `oddInt` / 2 rounded up
    - if yes, log '*' repeated `oddInt`  times
    - if no, continue
  - check if `bottomHalf` is true
    - if yes then decrement startSpaces by 1 and increment betweenSpaces by 1
    - if no, then increment startSpaces by 1 and decrement betweenSpaces by 1

- helper method `invalidInput`
  - check if input is NOT (an integer, greater than or equal to 7, odd)
    - if true return true
    - else false

*/

function invalidInput(input) {
  return !(Number.isInteger(input) && input >= 7 && input % 2 !== 0);
}

function star(oddInt) {
  if (invalidInput(oddInt)) return '';

  let startSpaces = 0;
  let betweenSpaces = (oddInt - 3) / 2;
  let bottomHalf = false;
  let middle = Math.ceil(oddInt / 2);

  for (let row = 1; row <= oddInt; row++) {
    if (row === middle) {
      console.log('*'.repeat(oddInt));
      bottomHalf = true;
      continue;
    } else {
      console.log(`${' '.repeat(startSpaces)}*${' '.repeat(betweenSpaces)}*${' '.repeat(betweenSpaces)}*`);
      if (bottomHalf) {
        startSpaces -= 1;
        betweenSpaces += 1;
      } else if (row !== middle - 1) {
        betweenSpaces -= 1;
        startSpaces += 1;
      }
    }
  }
}

// star(0);   // ''
// star('a'); // ''
// star(6);   // ''
// star([]);  // ''

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *



star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

//45 mins 32 secs