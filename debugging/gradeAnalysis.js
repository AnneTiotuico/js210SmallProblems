/*
Professor Graham wrote some simple code to help him determine the average and
median scores on each of his quarterly exams, but some of the test cases are
failing. Figure out why, and write the code necessary for the program to work
as expected.
*/

function average(nums) {
  const sum = nums.reduce((total, num) => total + num);

  return sum / nums.length;
}

function median(nums) {
  nums.sort();

  let median;
  const length = nums.length;
  if (length % 2 === 0) {
    median = average([nums[(length / 2) - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }

  return median;
}

// Tests

const quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
const quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
const quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
const quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// should all log 'true':
console.log(average(quarter1ExamScores) === 86.8);
console.log(average(quarter2ExamScores) === 86.3);
console.log(average(quarter3ExamScores) === 83.7);
console.log(average(quarter4ExamScores) === 88.8);

console.log(median(quarter1ExamScores) === 89.5);
console.log(median(quarter2ExamScores) === 89.5);
console.log(median(quarter3ExamScores) === 87);
console.log(median(quarter4ExamScores) === 89.5);

// my answer:
function median(nums) {
  nums.sort((a,b) => a - b); // <---

  let median;
  const length = nums.length;
  if (length % 2 === 0) {
    median = average([nums[(length / 2) - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }

  return median;
}

/*
LS Solution:

// average omitted

function median(nums) {
  nums.sort(compareNums);

  let median;
  const length = nums.length;
  if (length % 2 === 0) {
    median = average([nums[(length / 2) - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }

  return median;
}

function compareNums(num1, num2) {
  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  } else {
    return 0;
  }
}


Array.prototype.sort()'s default sort order is according to string Unicode
code points, even for numeric values. For example:

const grades = [94, 73, 88, 100, 82, 91, 97, 99, 80, 84];

grades.sort();

console.log(grades);
// [100, 73, 80, 82, 84, 88, 91, 94, 97, 99]

This means that some of the arrays in our code were not sorted as we assumed,
and as a result, some of the median scores were calculated incorrectly.

The solution is to provide a callback function to sort(), and use the callback
to dictate the manner in which we want the elements of the array to be sorted.

You may wish to review the assignment on sorting.

*/