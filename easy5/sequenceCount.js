/*
Create a function that takes two integers as arguments.
The first argument is a count, and the second is the starting number of a
sequence that your function will create. The function should return an array
containing the same number of elements as the count argument.
The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than
or equal to 0. The starting number can be any integer. If the count is 0,
the function should return an empty array.
*/

// function sequence(count, start) {
//   let result = Array(count);
//   for (let index = 0; index < count; index++) {
//     result[index] = start * (index + 1);
//   }

//   return result;
// }

function sequence(count, start) {
  return Array(count).fill('').map((_, index) => start * (index + 1));
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

/*
LS Solution:
function sequence(count, startNum) {
  const result = [];
  let sum = 0;

  for (let i = 0; i < count; i += 1) {
    result.push(sum += startNum);
  }

  return result;
}

The solution uses a for loop to create the sequence and store it in the result array.
The loop uses the count argument to determine the appropriate number of iterations.
During each iteration, the solution increments sum by startNum, and pushes
the new value of sum to the result array. After the loop, the solution returns
the result array.

*/


