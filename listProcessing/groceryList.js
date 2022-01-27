"use strict";

/*
Write a function that takes a grocery list in a two-dimensional array and
returns a one-dimensional array. Each element in the grocery list contains
a fruit name and a number that represents the desired quantity of that fruit.
The output array is such that each fruit name appears the number of times
equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas.
Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.
*/

// function buyFruit(groceryList) {
//   let result = [];
//   groceryList.forEach(subarr => {
//     for (let count = 0; count < subarr[1]; count++) {
//       result.push(subarr[0]);
//     }
//   });

//   return result;
// }

// function buyFruit(groceryList) {
//   return groceryList.reduce((result, subarr) => {
//     for (let count = 0; count < subarr[1]; count++) {
//       result.push(subarr[0]);
//     }
//     return result;
//   }, []);
// }

function getFruit(fruit) {
  const result = [];

  for (let i = 0; i < fruit[1]; i += 1) {
    result.push(fruit[0]);
  }

  return result;
}

function buyFruit(groceryList) {
  return groceryList.flatMap(fruit => getFruit(fruit));
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

/*
LS Solution:
function buyFruit(fruitsList) {
  return fruitsList.map(fruit => repeat(fruit))
                   .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruit) {
  const result = [];

  for (let i = 0; i < fruit[1]; i += 1) {
    result.push(fruit[0]);
  }

  return result;
}


To get the expected result, the solution makes use of two list processing
strategies. The first is to transform the array elements into the expanded
grocery list with each item repeated based on the quantity value
(second element of each subarray). The second strategy is to flatten the
array of arrays using a folding strategy, which flattens the array by
consecutively concatenating each subarray together. The solution also
makes use of a repeat helper function to facilitate the transformation of
the original array's elements.
*/