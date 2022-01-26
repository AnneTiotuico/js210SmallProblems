/*
Write a function that takes one argument, an array containing integers,
and returns the average of all the integers in the array, rounded down to the
integer component of the average. The array will never be empty,
and the numbers will always be positive integers.
*/

function average(arr) {
  return Math.floor(arr.reduce((sum, num) => sum + num) / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40

/*
LS Solution:
function average(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return Math.floor(sum / numbers.length);
}


The solution uses a for loop to iterate over the numbers array argument.
During each iteration, it increments the sum variable by the value at the current index.
After the loop, the solution returns the floored result of the sum divided by the length of the numbers array.

*/