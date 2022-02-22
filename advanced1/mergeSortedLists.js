/*
Merge Sorted Lists
Write a function that takes two sorted arrays as arguments and returns a new
array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array.
You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

*/

/*
Problem:
given 2 sorted array, return 1 sorted array

rules/requirements:
- do not sort the result array, you must build the result one element ar a
time in proper order
- do not mutate the input arrays
- duplicate numbs are possible
- arr lengths can be the same or different

input: 2 sorted arrays
output: 1 new sorted array

questions:


Examples/test cases:
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
- combine the 2 arrays to form 1 sorted array, sorted ascending
- we compare the 1st num in each, 1 is less than 2 so 1 should come first [1]
- compare 5 and 2, 2 comes first [1, 2]
- compare 5 and 6, 5 comes first [1, 2, 5]
- compare 9 and 6, 6 comes first [1, 2, 5, 6]
- compare 9 and 8, 8 comes first [1, 2, 5, 6, 8]
- 9 is the last num, so [1, 2, 5, 6, 8, 9]

merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
- compare 1 and 2, 1 comes first [1]
- compare 2 and 1, 1 comes first [1, 1]
- compare 2 and 3, 2 comes first [1, 1, 2]
- compare 3 and 2, 2 comes first [1, 1, 2, 2]
- 3 is last [1, 1, 2, 2, 3]

merge([], [1, 4, 5]);             // [1, 4, 5]
- 1st arr is empty, so just return items within 2nd arr

merge([1, 4, 5], []);             // [1, 4, 5]
- 2nd arr is empty, so just return items within 1st arr

Data structures:
- arrays
- numbers

Algorithm:
- initialize a `result` arr = [];
- guard clause(s):
  - if arr1 is empty, return copy of arr2
  - if arr2 is empty, return copy of arr1

- let `longest` = whichever array length is bigger
- let `shortest` = whichever array length is smaller

- for loop start num = 0 and num2 = 0; num < longest
    - compare arr1[num] and arr2[num2]
      - if arr1 is smaller, push that num into `result` and increment num by 1
      - if arr2 is bigger, push arr2[num2] into `result` and increment num2 by 1
      - if tie, push both in and increment both

- return `result`

*/

function merge(arr1, arr2) {
  if (arr1.length < 1) return arr2.slice();
  if (arr2.length < 1) return arr1.slice();

  let result = [];
  let longest = arr1.length > arr2.length ? arr1 : arr2;

  for (let num = 0, num2 = 0; num < longest.length; ) {
      if (arr1[num] < arr2[num2]) {
        result.push(arr1[num]);
        num += 1;
      } else if (arr1[num] > arr2[num2]) {
        result.push(arr2[num2]);
        num2 += 1;
      } else {
        result.push(arr1[num], arr2[num2]);
        num += 1;
        num2 += 1;
      }
  }

  return result.filter(num => num);
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

// 22 mins 26 secs

// OR:

function merge(arr1, arr2) {
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();
  let totalLength = arr1.length + arr2.length;
  let result = [];

  for (let idx = 0; idx < totalLength; idx++) {
    if (copy1[0] < copy2[0] || copy2.length < 1) {
      result.push(copy1.shift())
    } else if (copy1[0] > copy2[0] || copy1.length < 1) {
      result.push(copy2.shift())
    }
  }

  return result;
}
