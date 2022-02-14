/*
Write a function that takes a sentence string as an argument and returns that
string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three',
'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding
digit character.
*/

/*
Problem:
given a sentence string, return the string with every 'number word' converted to its corresponding digit char

rules/requirements:
- numbers words: 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
- preserve spaces and punctuations in the returned result
- word numbers are lower cased

input: string
output: string

questions:
- Do we need to worry about non string inputs?
- How do we handle empty strings?
- How do we handle no argument?
  - Multiple arguments?
- Will the number words always be zero to nine? no double digit number words?
- Is the function case sensitive?
- What if the string contains digits '1 2', do we ignore them and keep as is?

Examples / test cases:
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

- all the number words get converted to digit equivalent
- `five five five one two three four.` => '5 5 5 1 2 3 4.' (make sure to keep puncuation and spaces)

wordToDigit('');  // ''
wordToDigit(123); // ''
wordToDigit('NaN'); // 'NaN'

Data structures:
- strings
- arrays
- regex?

Algorithm:
- guard clause helper method `invalidInput`
  - if `invalidInput` return true, return ''
  - if not, continue

- initialize const variable `numberWords` containing 'zero', 'one', etc
- iterate through `numberWords`
  - check if numberWord is incuded in string
    - if yes, replace that string section with index of numberWord
      -use regex? to make sure we only replace the number and preserve punctuation and replace all
        - reassign sentence to return value above
- return sentence

- helper method `invalidInput`
  - check if input is NOT string type or length is less than 1
    - return true if above is true
    - false otherwise

*/

function invalidInput(input) {
  return typeof input !== 'string' || input.length < 1;
}

function wordToDigit(sentence) {
  if (invalidInput(sentence)) return '';
  const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five',
                       'six', 'seven', 'eight', 'nine'];

  numberWords.forEach(numWord => {
    if (sentence.includes(numWord)) {
      sentence = sentence.replaceAll(numWord, numberWords.indexOf(numWord));
    }
  });

  return sentence;
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('Hello 1 three! five, nine 7.')); // 'Hello 1 3! 5, 9 7.'


console.log(wordToDigit('NaN')); // 'NaN'
console.log(wordToDigit(''));  // ''
console.log(wordToDigit(123)); // ''