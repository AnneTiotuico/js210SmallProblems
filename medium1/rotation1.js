/*
Write a function that rotates an array by moving the first element to the end
of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

Problem:
given an array, return an array with the first element in the input array moved to the end

rules/requirements:
- do not mutate the original array
- if input is not an array, return undefined
- if input is an empty array, return empty array


input: array
output: new array

Questions:
- Do we want the function to return the result or log it?
- Do we need to worry about input that isn't an array?
  -What should we return? => undefined
- How do we handle no argument? => return undefined
- Do we have to handle sparse arrays?
- Are sparse arrays with just empty items considered an empty array?
- What is considered an element?
  - null? undefined? object property pairs [a: '1']
- How do we handle an input of an array that contains an empty array? [[]]


Examples/test cases:
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
- move the first element `7` to the end of the array

rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
- move the first element `a` to the end

rotateArray(['a']);                    // ["a"]
- one element, just return a new array with the same element as the input

rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
- move first element `1` to the end

rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
- objects are treated like one element
- move first element object `{ a: 2 }` to the end

rotateArray([]);                       // []
- empty array, return empty array

rotateArray();                         // undefined
- no argument, return undefined

rotateArray(1);                        // undefined
- input is not an array, return undefined

const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]
- move the first element `1` to the end
- input array is not mutated

Data Structures:
array (input and output)
numbers, strings, objects, etc (elements in the arrays)

Algorithm:
(assuming we don't have to worry about sparse arrays and object properties)
- guard clause(s):
  -if input is not an array, return `undefined`
  -if input is an empty array, return empty array

- make a copy of the input array `result`
- remove the first element of the `result` array and save that into `itemToRotate` (shift())
- append that `itemToRotate` to the end of the `result` array

*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length < 1) return [];

  let result = array.slice();
  let itemToRotate = result.shift();
  result.push(itemToRotate);

  return result;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined
console.log(rotateArray('1'));                      // undefined
console.log(rotateArray('[]'));                     // undefined
console.log(rotateArray({}));                       // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]


console.log(rotateArray([7, 3]));       // [3, 7]
console.log(rotateArray([[]]));         // [[]]

// 25 mins 27 secs