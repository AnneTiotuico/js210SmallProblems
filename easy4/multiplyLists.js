/*
Write a function that takes two array arguments, each containing a list of numbers,
and returns a new array that contains the product of each pair of numbers from
the arguments that have the same index. You may assume that the arguments contain
the same number of elements.
*/

function multiplyList(arr1, arr2) {
  return arr1.map((num, index) => num * arr2[index]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]


/*
LS Solution:
function multiplyList(numbers1, numbers2) {
  const result = [];

  for (let i = 0; i < numbers1.length; i += 1) {
    result.push(numbers1[i] * numbers2[i]);
  }

  return result;
}

Given that both arguments will be of the same length,
the solution uses a for loop to iterate over the values at their respective indices.
During each iteration, it computes the product of multiplying the values at
the current index of each array, and pushes that product to a result array.
After the loop has finished, it returns the result array.

*/