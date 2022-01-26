/*
Write a program that solicits six numbers from the user and logs a message that describes
whether the sixth number appears among the first five numbers.

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].
*/

const rlSync = require('readline-sync');

const firstFive = [];

firstFive.push(Number(rlSync.question('Enter the 1st number: ')));
firstFive.push(Number(rlSync.question('Enter the 2nd number: ')));
firstFive.push(Number(rlSync.question('Enter the 3rd number: ')));
firstFive.push(Number(rlSync.question('Enter the 4th number: ')));
firstFive.push(Number(rlSync.question('Enter the 5th number: ')));

const lastNum = Number(rlSync.question('Enter the last number: '));

if (firstFive.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in [${firstFive}].`);
} else {
  console.log(`The number ${lastNum} does not appear in [${firstFive}].`);
}


/*
LS Solution:
const numbers = [];

numbers.push(prompt('Enter the 1st number:'));
numbers.push(prompt('Enter the 2nd number:'));
numbers.push(prompt('Enter the 3rd number:'));
numbers.push(prompt('Enter the 4th number:'));
numbers.push(prompt('Enter the 5th number:'));

let lastNumber = prompt('Enter the last number:');

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${lastNumber} does not appear in [${numbers.join(', ')}].`);
}


Discussion
The solution consecutively asks the user for a number and pushes it into the numbers
array declared at the top. The solution uses Array methods. Notice, in particular,
the use of the Array.prototype.includes method to test whether a number is
included in the set of numbers. Be sure to check out the documentation to
have a better understanding of the available methods.

Further Exploration
What if the problem was looking for a number that satisfies some condition
(e.g., a number greater than 25), instead of a specific number?
Would the current solution still work? Why or why not?
Think about this first before scrolling down.

Possible Solution:
function isIncluded(arr, val) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > val) {
      return true;
    }
  }

  return false;
}

Explore the Array.prototype.some method, and see if you can change the possible
solution shown above to make use of that method instead.

*/

console.log(firstFive.some((num) => num > lastNum));