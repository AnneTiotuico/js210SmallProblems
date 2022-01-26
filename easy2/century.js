/*
problem:
given a year, return the century in belongs to

input: number
output: string that begins with century num and ends with 'st', 'nd', 'rd', 'th'

rules: new centuries begin in years that end with 01
so years 1901-2000 comprise the 20th century
numbers ending in 1 has a 'st' suffix, ending in 2 'nd', 3 'rd'
everything else ends in 'th'

examples:
century(2000);        // "20th"
-1901-2000
century(2001);        // "21st"
-2001-2100
century(1965);        // "20th"
-1901-2000
century(256);         // "3rd"
-201-300
century(5);           // "1st"
-1-100
century(10103);       // "102nd"
-10101-10200
century(1052);        // "11th"
-1001-10100
century(1127);        // "12th"
-1101-1200
century(11201);       // "113th"
-11201-11300

data structures:
numbers
strings

algorithm:
create function that returns the correct suffix
if the last number is a 1, 'st', if 2 'nd', if 3 'rd'
but special cases for 11 12 and 13 that end with 'th'
everything else is 'th'

create main function that rounds up to the nearest 100
divide nearest hundred by 100 to get correct century
return the century num with suffix appended

*/

function getSuffix(num) {
  if (num % 100 === 11 || num % 100 === 12 || num % 100 === 13) return 'th';

  let stringNum = String(num);
  let lastNum = (stringNum[stringNum.length - 1]);
  switch (lastNum) {
    case '1':
      return 'st';
    case '2':
      return 'nd';
    case '3':
      return 'rd';
    default:
      return 'th';
  }
}

function century(year) {
  let result = Math.ceil(year/100);
  console.log(result + getSuffix(result));
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

century(11301);       // "114th"
century(12201);       // "123rd"
century(30000);       // "300th"