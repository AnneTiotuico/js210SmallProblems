/*
Merge Sort
Merge sort is a recursive sorting algorithm that works by breaking down an
array's elements into nested subarrays, then combining those nested subarrays
back together in sorted order. It is best explained with an example.
Given the array [9, 5, 7, 1], let's walk through the process of sorting it
with merge sort. We'll start off by breaking the array down into nested subarrays:


[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]

We then work our way back to a flat array by merging each pair of nested
subarrays back together in the proper order:
[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]

Write a function that takes an array argument and returns a new array that
contains the values from the input array in sorted order. The function should
sort the array using the merge sort algorithm as described above.
You may assume that every element of the array will be of the same data
type—either all numbers or all strings.

Feel free to use the merge function you wrote in the previous exercise.


*/
function merge(arr1, arr2) {
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();
  let totalLength = arr1.length + arr2.length;
  let result = [];

  for (let idx = 0; idx < totalLength; idx++) {
    if (copy1[0] < copy2[0] || copy2.length < 1) {
      result.push(copy1.shift());
    } else if (copy1[0] > copy2[0] || copy1.length < 1) {
      result.push(copy2.shift());
    }
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let half = Math.ceil(arr.length / 2);
  let firstHalf = mergeSort(arr.slice(0, half));
  let secondHalf = mergeSort(arr.slice(half));

  return merge(firstHalf, secondHalf);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
//[1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]