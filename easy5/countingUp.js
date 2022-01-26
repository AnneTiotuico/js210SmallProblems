/*
Write a function that takes an integer argument and returns an array containing
all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.
*/

// function sequence(int) {
//   let result = [];
//   for (let num = 1; num <= int; num++) {
//     result.push(num);
//   }

//   return result;
// }

function sequence(int) {
  return Array(int).fill('').map((_, index) => index + 1);
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

/*
LS Solution:
function sequence(limit) {
  const result = [];

  for (let i = 1; i <= limit; i += 1) {
    result.push(i);
  }

  return result;
}


The solution uses a for loop to create the sequence and store it in the result array.
The key parts are determining the starting value of the loop (i = 1) and
determining the stopping condition (i <= limit).

*/


