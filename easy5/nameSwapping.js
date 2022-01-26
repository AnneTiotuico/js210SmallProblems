/*
Write a function that takes a string argument consisting of a first name, a space,
and a last name, and returns a new string consisting of the last name, a comma,
a space, and the first name.
*/

// function swapName(str) {
//   let fullName = str.split(' ');
//   return `${fullName[1]}, ${fullName[0]}`;
// }

function swapName(str) {
  return str.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

/*
LS Solution:

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

Given a full name as a string and a space as a separator, the solution uses
the String.prototype.split method to get an array of words (e.g., ['Joe', 'Roberts']).
The solution then uses Array.prototype.reverse to get ['Roberts', 'Joe'], and finally,
uses Array.prototype.join, with a separator string containing a comma and a space (', '),
to return the desired result.

Further Exploration
What if the person had more than one first name? Refactor the current solution
so that it can accommodate this.

*/

function swapName2(name) {
  let names = name.split(' ');
  return `${names.slice(-1)}, ${names.slice(0, -1).join(' ')}`;
}

console.log(swapName2('Anne Melody Tiotuico'));
