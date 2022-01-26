/*
Write a function that takes a positive integer as an argument and returns
that number with its digits reversed.
*/

function reverseNumber(int) {
  return Number(String(int).split('').reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1

/*
LS Solution:
function reverseNumber(number) {
  const numberStringArray = String(number).split('');
  return parseInt(numberStringArray.reverse().join(''), 10);
}

The approach used in this solution leverages the Array.prototype.reverse method.
The solution converts the number argument to a string and splits it using an
empty string ('') as a separator. The solution stores the result in the
numberStringArray variable. The solution then reverses the array,
joins it together with an empty string ('') as a separator, passes the
resulting string to parseInt to convert it to a number, and returns the result.

Notice the radix of 10 as a second argument to parseInt.
This gives the parseInt function the base by which it parses the number.
f the number string contains leading zeroes (e.g., '00021'), parseInt will
convert the number to 21 (base 10) instead of 17 (base 8). Without the radix of 8,
parseInt defaults to base 10 and parses the number string as such, even if
there are leading zeroes which typically denote base 8.

*/


