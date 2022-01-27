"use strict";

/*
Write a function that takes an array of integers between 0 and 19 and returns
an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven,
twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

Do not mutate the argument.

problem:
create a function `alphabeticNumberSort` that takes an array of integers
between 0 and 19 then return an array of those integers sorted based on
the english word for each number
rules-don't mutate the array
input-array of ints
output-array of ints (sorted based on word equivalent)

examples:

data structures:
arrays, numbers, strings

algorithm:
create an array that holds the word equivalents of the numbers 0-19 `numberWord`
iterate through the array of ints
use bracket notation to access their word equivalent in the `numberWord` array
*/

// function alphabeticNumberSort(arrayOfInts) {
//   const numberWord = ['zero', 'one', 'two', 'three', 'four', 'five',
//                     'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
//                     'twelve', 'thirteen', 'fourteen', 'fifteen',
//                     'sixteen', 'seventeen', 'eighteen', 'nineteen'];

//   return [...arrayOfInts].sort((num1, num2) => {
//     if (numberWord[num1] > numberWord[num2]) {
//       return 1;
//     } else if (numberWord[num1] < numberWord[num2]) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// }

function alphabeticNumberSort(arrayOfInts) {
  const numberWord = ['zero', 'one', 'two', 'three', 'four', 'five',
                    'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                    'twelve', 'thirteen', 'fourteen', 'fifteen',
                    'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  return arrayOfInts.sort((num1, num2) => numberWord[num1] > numberWord[num2] ? 1 : -1);
}

// function alphabeticNumberSort(arrayOfInts) {
//   const numberWord = ['zero', 'one', 'two', 'three', 'four', 'five',
//                     'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
//                     'twelve', 'thirteen', 'fourteen', 'fifteen',
//                     'sixteen', 'seventeen', 'eighteen', 'nineteen'];

//   return arrayOfInts.map(int => numberWord[int])
//                     .sort()
//                     .map(word => numberWord.indexOf(word));
// }


console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


/*
LS Solution:
function wordSort(num1, num2) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                        'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                        'twelve', 'thirteen', 'fourteen', 'fifteen',
                        'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}

For this exercise, the first part to consider is what data structure to use
for looking up the word counterpart of each number. The solution handles this
by providing an array of words mapped to their index. The second part to consider
is how to sort the numbers. For this one, the solution leverages the
Array.prototype.sort method.

The sort method is a higher-order function that can be passed a sorting
function as a callback. In this solution, the callback function passed to
sort is the wordSort function. The wordSort function also defines the data
structure used for the lookup. The function performs the comparison by
comparing the word equivalent of each number (num1 and num2) accessed through their indices.

We apply sort to the return value of [...array], which uses array deconstruction
to create a shallow copy of the array. We do this since sort mutates the array
it is called on, but we don't want to mutate the array in this code.

Futher Exploration
The Array.prototype.sort method can also take a function expression as an argument.
If you didn't use one the first time, try refactoring the solution using a function expression.
*/