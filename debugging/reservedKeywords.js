/*
We have been asked to implement a function that determines whether or not a
given word is a reserved keyword. We wrote the isReserved function below along
with some test cases, but we aren't seeing the expected result. Why not?
Fix the code so that it behaves as intended.

const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      return true;
    }
  });

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

*/

const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  let reservedWord = false;

  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      reservedWord = true;
    }
  });

  return reservedWord;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true


/*
LS Solution:
function isReserved(name) {
  for (let i = 0; i < RESERVED_KEYWORDS.length; i += 1) {
    if (RESERVED_KEYWORDS[i] === name) {
      return true;
    }
  }

  return false;
}

Recall that Array.prototype.forEach executes the callback function once for
each element of the array, and in the end always returns undefined.
The return value of the callback is ignored, so our return statement
does not have any impact. If you want to return early and with a different
value than undefined, you need to iterate differently, for example using a for loop.

You can check out the documentation for forEach on MDN.

Further Exploration
ES2016 provides an array method Array.prototype.includes, which performs the
check we're after and returns a Boolean. Then the function gets even simpler:

function isReserved(name) {
  return RESERVED_KEYWORDS.includes(name);
}

*/