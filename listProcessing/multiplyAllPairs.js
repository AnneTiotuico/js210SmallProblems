"use strict";

/*
Write a function that takes two array arguments, each containing a list of
numbers, and returns a new array containing the products of all combinations
of number pairs that exist between the two arrays. The returned array
should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.
*/

// function multiplyAllPairs(arr1, arr2) {
//   return arr1.reduce((result, num1) => {
//     for (let index = 0; index < arr2.length; index++) {
//       result.push(num1 * arr2[index]);
//     }
//     return (result || []);
//   }, []).sort((a,b) => a - b);
// }

function multiplyAllPairs(arr1, arr2) {
  return arr1.reduce((result, num1) => {
    arr2.forEach(num2 => result.push(num1 * num2));
    return result;
  }, []).sort((a,b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

/*
LS Solution:
function multiplyAllPairs(array1, array2) {
  const result = [];

  array1.forEach(number1 => {
    array2.forEach(number2 => {
      result.push(number1 * number2);
    });
  });

  return result.sort((a, b) => a - b);
}

The solution uses the iteration list processing strategy because it is an
efficient way of performing an action on each element in each array, and then
updating the value of the result array with the result of each action.
Together, the nested Array.prototype.forEach loops get all combinations
of number pairs from the two arrays. The inner forEach loop multiplies the
outer number1 by the inner number2, then pushes the product of the pair to
the result array.

After the iteration finishes, the solution uses the Array.prototype.sort
method to sort the values of the result array from lowest to highest,
then returns the result.
*/