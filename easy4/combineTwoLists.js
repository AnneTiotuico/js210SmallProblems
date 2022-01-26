/*
Write a function that combines two arrays passed as arguments,
and returns a new array that contains all elements from both array arguments,
with each element taken in alternation.

You may assume that both input arrays are non-empty,
and that they have the same number of elements.
*/

// function interleave(arr1, arr2) {
//   let result = [];
//   for (let index = 0; index < arr1.length; index++) {
//     result.push(arr1[index]);
//     result.push(arr2[index]);
//   }

//   return result;
// }

// function interleave(arr1, arr2) {
//   return arr1.flatMap((item, index) => [item, arr2[index]]);
// }

// -----Combine Two Lists using reduce
function interleave(arr1, arr2) {
  return arr1.reduce((result, item, index) => {
    result.push(item, arr2[index]);
    return result;
  },[]);
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

/*
LS Solution:

function interleave(array1, array2) {
  const newArray = [];

  for (let i = 0; i < array1.length; i += 1) {
    newArray.push(array1[i], array2[i]);
  }

  return newArray;
}


The solution iterates n number of times; where n is the value of the length
of either array1 or array2. At every iteration it pushes the values of array1
and array2 to the newArray variable sequentially. It only uses one
Array.prototype.push call per iteration, since push can take one or more arguments.

*/