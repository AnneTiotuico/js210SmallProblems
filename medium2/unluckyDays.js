/*
Unlucky Days
Write a function that takes a year as an argument and returns the number of
'Friday the 13ths' in that year. You may assume that the year is greater than
1752 (when the modern Gregorian Calendar was adopted by the United Kingdom).
You may also assume that the same calendar will remain in use for the
foreseeable future.
*/

/*
Problem:
given a number (year), return the number of 'Friday the 13ths' in that year


rules/requirements:
- the year will always be greater than 1752
- the same calendar will be used for the foreseeable future

input: number
output: number

questions:
- How do we handle non number args?
- How do we handle no args?
- How do we handle more than 1 arg?
- Will the input always be an integer?
  - how do we handle decimal numbers?
  - what about special numbers like NaN, (-)Infinity

Examples/test cases:
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

Data Structures:
- numbers
- Date objects

Algorithm:
- create a date object with the given year, Jan 1 `year`
- use a for loop to create 12 months that set the date to 13
- get the day for the above dates and count how many times the day is friday
- return the count

*/

// function fridayThe13ths(year) {
//   let date =  new Date(year, 0, 1);
//   let count = 0;
//   for (let month = 0; month < 12; month++) {
//     date.setMonth(month, 13);
//     if (date.getDay() === 5) count += 1;
//   }

//   return count;
// }

function fridayThe13ths(year) {
  let count = 0;

  for (let month = 0; month < 12; month++) {
    let date =  new Date(year, month, 13);
    if (date.getDay() === 5) count += 1;
  }

  return count;
}


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

// 27 mins 17 secs