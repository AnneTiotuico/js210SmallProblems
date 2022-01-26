/*
Write a function that takes an array as an argument and returns an array that
contains two elements, each of which is an array. Put the first half of the
original array elements in the first element of the return value, and put
the second half in the second element. If the original array contains an odd
number of elements, place the middle element in the first half array.
*/

function halvsies(arr) {
  let middle = Math.ceil(arr.length / 2);
  return [arr.slice(0, middle), arr.slice(middle)];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]


/*
LS Solution:

function halvsies(array) {
  const half = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(half);

  return [firstHalf, secondHalf];
}

The basic task is to split the array argument into two pieces: a first and a second half.
The solution gets the size of the first half by dividing the array argument's length by 2.
If the length is odd, the Math.ceil method will account for it,
making the first half larger than the second by 1.
It creates the second half based on the size of the first half.
It uses the Array.prototype.slice method to create both halves.
Finally, it returns the halvsies array composed of the firstHalf and secondHalf as elements.

*/