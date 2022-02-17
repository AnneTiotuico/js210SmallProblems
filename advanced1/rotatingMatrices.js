/*
As we saw in the previous exercises, a matrix can be represented by an
array of arrays. For example, the 3x3 matrix shown below:

1  5  8
4  7  2
3  9  6

is represented by the following array of arrays:


const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

A 90-degree rotation of a matrix produces a new matrix in which each side of
the matrix is rotated clockwise by 90 degrees. For example, the 90-degree
rotation of the matrix shown above is:

3  4  1
9  7  5
6  2  8

A 90-degree rotation of a non-square matrix is similar.
For example, given the following matrix:

3  4  1
9  7  5

its 90-degree rotation is:

9  3
7  4
5  1

Write a function that takes an arbitrary MxN matrix, rotates it clockwise
by 90-degrees as described above, and returns the result as a new matrix.
The function should not mutate the original matrix.
*/

/*
Problem:
- given an arbitrary mxn matrix, rotate it clockwise (to the right) by 90 degrees
  return the result as a new matrix

rules/requirements:
- do not mutate original matrix

input: array of subarrays
output: different array of subarrays

Examples/test cases:

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

=> [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
- last subarr's first element becomes first subarr's first ele
- second to last subarrs 1st ele becomes first subarrs 2nd ele
- 1st subarr's 1st ele becomes first arrs last ele

- going backwards ?
  -> matrix[length-1][0]
  -> matrix[length-2][0]
  -> matrix[length-3][0]
  -> until matrix[0][0]
- do again but second bracket should increase by 1 until second bracket is = matrix[0].length

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

=> [[5, 3], [1, 7], [0, 4], [8, 2]]

Data structures:
- arrays
- numbers

Algorithm:
  initialize new

*/

// function rotate90(matrix) {
//   let rotated = Array(matrix[0].length).fill().map(ele => []);
//   matrix[0].map((_, col) => matrix.reduceRight((sub, curr, row) => {
//     rotated[col].push(matrix[row][col])
//   }, []));

//   return rotated;
// }


// function rotate90(matrix) {
//   let rotated = Array(matrix[0].length).fill().map(ele => []);
//   for (let col = 0; col < matrix[0].length; col++) {
//     for (let row = matrix.length - 1; row >= 0; row--) {
//       rotated[col].push(matrix[row][col])
//     }
//   }

//   return rotated;
// }

function rotate90(matrix) {
  return matrix[0].map((_, col) => matrix.reduceRight((sub, curr, row) => {
    sub[col] ? sub[col].push(curr[col]) : sub[col] = [curr[col]];
    return sub;
  }, []).flat());
}


const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]