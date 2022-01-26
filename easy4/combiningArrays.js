/*
Write a function that takes two arrays as arguments and returns an array
containing the union of the values from the two. There should be no duplication
of values in the returned array, even if there are duplicates in the original
arrays. You may assume that both arguments will always be arrays.
*/

// function union(arr1, arr2) {
//   let result = arr1.slice();
//   for (let index = 0; index < arr2.length; index++) {
//     if (!result.includes(arr2[index])) result.push(arr2[index]);
//   }
//   return result;
// }

// function union(arr1, arr2) {
//   return arr2.reduce((result, item, index) => {
//     if (!result.includes(arr2[index])) result.push(arr2[index]);
//     return result;
//   }, arr1.slice());
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

// -----combiningArrays refactored

function union(arr1, arr2) {
  return arr2.reduce((result, item) => {
    if (!result.includes(item)) result.push(item);
    return result;
  }, arr1.slice());
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

/*
LS Solution:

Solution 1
function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(array1, array2) {
  const newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}

Solution 2
function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(...args) {
  const newArray = [];

  args.forEach(value => copyNonDupsTo(newArray, value));

  return newArray;
}

Both of these solutions use the copyNonDupsTo function to copy elements from
an array to a result array, without duplication. The two versions are identical.
The function loops through the array it is copying, and appends each element to
the result array, but only if that element is not already there.

Solution 1 adheres strictly to the exercise description, and constructs a
new array from the two argument arrays. We simply call copyNonDupsTo for each of the two arrays.

Solution 2 provides a more general solution to the problem: it works properly
with two array arguments, but also works with only one array, or with three or more arrays.
To accomplish this, it makes use of the args rest parameter.
The function simply iterates over the args array, and calls copyNonDupsTo for each element.
*/

// My solution to take in any amount of args:

// function union(...args) {
//   let result = []
//   args.forEach(subarr => {
//     for (let item of subarr) {
//       if (!result.includes(item)) result.push(item);
//     }
//   })

//   return result;
// }