"use strict";

/*
Write a function that takes an array of numbers and returns the sum of the sums
of each leading subsequence in that array. Examine the examples to see what
we mean. You may assume that the array always contains at least one number.

problem:
create a function `sumOfSums` that takes an array of numbers and returns
the sum of the sums of each leading subsequence in that array
rules-input array will always have at least one number
input-array of integer(s)
output-number

examples:
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
(1) + (1 + 2) + (1 + 2 + 3) + (1 + 2 + 3 + 4) + (1 + 2 + 3 + 5) -->

data structures:
arrays, numbers

algorithm:
iterate through the array of ints
get each subsequence of the array starting from the first int to the last int
(3) + (3 + 5) + (3 + 5 + 2)
iterate through those subsquences and sum up the numbers together
*/

function sumOfSums(arrOfInts) {
  return arrOfInts.reduce((sum, _, idx) =>  {
    return sum + arrOfInts.slice(0, idx + 1)
                          .reduce((total, int) => total + int);
  });
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

/*
LS Solution:
function sumOfSums(numbers) {
  return numbers.map((number, idx) => numbers.slice(0, idx + 1)
                                             .reduce((sum, value) => sum + value))
                                             .reduce((sum, value) => sum + value);
}

This solution can be bit tricky to look at. Let's break it down using a list
processing approach so that it's easier to make sense of. Let's take a look
at what happens when the array, [3, 5, 2], is passed as an argument:

The solution first transforms the input array of numbers into its expanded form.
Each element is mapped to a subarray containing a leading subsequence of elements
from the input array. The length of each subarray is equal to the value of
that subarray's index plus 1.

[[3], [3, 5], [3, 5, 2]]    // result from `slice`

Next, the solution reduces the values of each subarray, adding them together
to get their sum.

[3, 8, 10]                  // result from `map` and first `reduce`

Finally, the solution reduces one more time. This time it adds all the
sums together to get the sum of sums, and returns it.

21                          // result from second `reduce`
*/

/*
using reverse:
function sumOfSums(arrOfInts) {
  return arrOfInts.reverse().reduce((sum, num, idx) =>  {
    return sum + (num * (idx + 1))
  })
}
*/