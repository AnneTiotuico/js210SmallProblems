/*
Write a function that takes an array of integers as input, multiplies all of
the integers together, divides the result by the number of entries in the array,
and returns the result as a string with the value rounded to three decimal places.
*/

function showMultiplicativeAverage(arr) {
  return (arr.reduce((product, num) => product * num) / arr.length).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"


/*
LS Solution:
function showMultiplicativeAverage(numbers) {
  let product = 1;

  for (let i = 0; i < numbers.length; i += 1) {
    product *= numbers[i];
  }

  return (product / numbers.length).toFixed(3);
}

The solution iterates over all the elements in the array.
With each iteration, it multiplies the product variable's value
by the value at the current index. After looping, it divides the product by
the length of the numbers argument. It then calls the Number.prototype.toFixed
method on the result, which rounds the number to 3 decimal places and converts it to a string.

*/