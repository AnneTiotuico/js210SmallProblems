/*
A 3x3 matrix can be represented by an array of arrays: an outer array containing
three subarrays that each contain three elements.
For example, the 3x3 matrix shown below:
1  5  8
4  7  2
3  9  6

is represented by the following array of arrays:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];


An array of arrays is sometimes called a "nested array" because each inner
subarray is nested inside an outer array. It also may be called a
"two-dimensional array"

To access an element in the matrix, you can use bracket notation twice
(such as array[][]), and include both the row index and column index within
the brackets. Given the above matrix, matrix[0][2] is 8, and matrix[2][1] is 9.
An entire row in the matrix can be referenced using a single index: matrix[1]
is the row (subarray) [4, 7, 2]. Furthermore, given a row, we can determine
the total number of columns by counting the number of elements in the row.
Unfortunately, a convenient notation for accessing an entire column does not exist.

The transpose of a 3x3 matrix is the matrix that results from exchanging the
rows and columns of the original matrix. For example, the transposition of the
matrix shown above is:

1  4  3
5  7  9
8  2  6

Write a function that takes an array of arrays that represents a 3x3 matrix
and returns the transpose of the matrix. You should implement the function on
your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a
new matrix and leave the input matrix array unchanged.

Examples:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

*/

/*
Problem:
given an array of arrays that represents a 3x3 matrix, return a transpose of that matrix

rules/requirements:
- do not modify the input matrix, return a new matrix
- the input will be one array of 3 subarrays which each contain 3 elements

input: array of subarrays
output: different array of subarrays

Examples/test cases:
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

=> [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
- index 0 of each array is in the first subarr
- index 1 of each array is in the second subarr
- index 2 of each array is in the third subarr

Data structures:
- arrays (input/output)
- numbers (elements in arrays)

Algorithm:
- initialize `transposedArr` = [[], [], []]
- for loop idx = 0 < transposedArr.length
  - push matrix[0][idx], matrix[1][idx], matrix[2][idx] into transposedArr[idx]
- return transposedArr

*/


// function transpose(matrix) {
//   let transposedArr = [[], [], []];

//   for (let idx = 0; idx < matrix.length; idx++) {
//     transposedArr[idx].push(matrix[0][idx], matrix[1][idx], matrix[2][idx])
//   }


//   return transposedArr;
// }

// 8 mins 21 secs

function transpose(matrix) {
  return matrix.map((_, col, arr) => arr.map((_, row) => arr[row][col]));
}

// refactored 17 mins

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

const matrix2 = [
  [1, 5, 8, 1],
  [4, 7, 2, 2],
  [3, 9, 6, 3],
  [1, 2, 3, 4]
];

const newMatrix2 = transpose(matrix2);

console.log(newMatrix2);      // [ [ 1, 4, 3, 1 ], [ 5, 7, 9, 2 ], [ 8, 2, 6, 3 ], [ 1, 2, 3, 4 ] ]
console.log(matrix2);         // [ [ 1, 5, 8, 1 ], [ 4, 7, 2, 2 ], [ 3, 9, 6, 3 ], [ 1, 2, 3, 4 ] ]