/*
Write a function that takes a string, doubles every character in the string,
and returns the result as a new string.
*/

function repeater(string) {
  return string.split('').map(char => char.repeat(2)).join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""


console.log(repeater('Hello') === "HHeelllloo");
console.log(repeater('Good job!') === "GGoooodd  jjoobb!!");
console.log(repeater('') ===  "");

/*
LS Solution:
function repeater(string) {
  const stringArray = [];

  for (let i = 0; i < string.length; i += 1) {
    stringArray.push(string[i], string[i]);
  }

  return stringArray.join('');
}

The solution initializes a stringArray, then iterates through the string argument,
each time appending two of the current character to stringArray.
Finally, the solution returns the result of joining together the elements of stringArray.

Student Regex solution:
function repeater(string) {
  return string.replace(/(.)/g, '$1$1');
}
*/


