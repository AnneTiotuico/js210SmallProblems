/*
Write a function that takes a floating point number representing an angle
between 0 and 360 degrees and returns a string representing that angle in
degrees, minutes, and seconds. You should use a degree symbol (˚) to
represent degrees, a single quote (') to represent minutes, and a double quote (")
to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

Note: your results may differ slightly depending on how you round values,
but should generally be within a second or two of the results shown.

problem:
given a floating point number, return a string representing that angle
in degrees, minutes and seconds
input: number
output: string

rules- use a degree symbol to represent degrees, single quote for minutes,
double quote for seconds
-60mins/1 degree
-60secs/1 min

examples:

use Math.floor(angle) to get the degrees
use Math.floor((angle % 1) * 60) to get the minutes
use Math.floor(((angle % 1) * 60) % 1 * 60) to get the seconds

data structures:
numbers, strings

algorithm:

*/

const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function addZero(num) {
  return (String(num).length < 2) ? `0${num}` : num;
}

function dms(angle) {
  let degrees = Math.floor(angle);
  let minutes = (angle % 1) * MINUTES_PER_DEGREE;
  let wholeMinutes = addZero(Math.floor(minutes));
  let wholeSeconds = addZero(Math.floor((minutes % 1) * SECONDS_PER_MINUTE));

  return `${degrees}°${wholeMinutes}'${wholeSeconds}"`;
}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

/*
LS Solution:
const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  const degreesInt = Math.floor(degreesFloat);
  const minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  const seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return `${String(degreesInt) + DEGREE + padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

function padZeroes(number) {
  const numString = String(number);
  return numString.length < 2 ? (`0${numString}`) : numString;
}

The tricky part with this exercise is the mathematical component.
That said, there are websites that provide details on how to compute this.

This solution computes the degreesInt component by flooring the input to
remove the decimal component. It computes the minutes component by subtracting
from the input the degreesInt component, and then multiplying the result
by MINUTES_PER_DEGREE. Lastly, it computes the seconds component by subtracting
from the input the degreesInt and minutes divided by MINUTES_PER_DEGREE,
and then multiplying the result by SECONDS_PER_DEGREE. For both the minutes
and seconds components, the solution subtracts from the input to get the value
of the decimal components, which it multiplies with their respective conversion factors.

The next part, which is more programmatic in nature, is the formatting of
the string output. The solution uses a helper function to pad a zero to the
left of any single-digit numbers. The return value of the dms function is a
string that includes padded values and the DEGREE variable.
The DEGREE variable holds the hexadecimal escape sequence representing the degree symbol.

Further Exploration
The current solution implementation only works with positive numbers in
the range of 0 to 360 (inclusive). Can you refactor it so that it works
with any positive or negative number?

Our solution returns the following results for inputs outside the range 0-360:

dms(-1);   // -1°00'00"
dms(400);  // 400°00'00"
dms(-40);  // -40°00'00"
dms(-420); // 420°00'00"

Since degrees are normally restricted to the range 0-360, can you modify the
code so it returns a value in the appropriate range when the input is less than 0 or greater than 360?

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"

*/