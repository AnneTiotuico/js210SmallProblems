/*
Lettercase Percentage Ratio
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.
*/

/*
Problem:
given a string, return an object that contains 3 properties
  - 1 percentage of chars in the string that are lowercase lettres
  - 2 percentage of chars that are uppercase letters
  - 3 percentage of chars that are neither

rules/requirements:
- input will always contain at least one char
- string can contain letters upper/lowercase and non letters
- 1st property key should be lowercase
  - valus is % of chars that are lowercase => lowercase letters / all chars * 100
- 2nd property key should be uppercase
  - valus is % of chars that are uppercase => uppercase letters / all chars * 100
- 3rd property key should be neither
  - valus is % of chars that are neither =>  100 - (lowercase + uppercase)
- percentages should be in decimals rounded to 2 places but in string form
  - 50% should be '50.00'

input: string
output: object (with 3 properties)

questions:
- Will the input always be a string?
- If the input isn't a string, what should be return?


Examples/test cases:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
- lowercase => '50.00'
  - lowercase letters are abdef (5 chars)
  - total chars = 10 (including spaces and numbers)
  - 5 / 10 = 0.5 * 100 = 50
  - parseFloat(50).toFixed(2)

- uppercase => '10.00'
  - uppercase letters are C (1 char)
  - total chars = 10 (including spaces and numbers)
  - 1 / 10 = 0.1 * 100 = 10
  - parseFloat(10).toFixed(2)

- neither => '40.00'
  - 100 - (lower + upper)
  - 100 - 60 = 40
  - parseFloat(40).toFixed(2)

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Data structures:
- strings (input)
- objects (output)
- numbers (lengths, percentages)
- regex? to check for letters only

Algorithm:
- initialize result object with 3 properties {lowercase: '0.00', uppercase: '0.00', neither: '0.00'}
- guard clause(s)
  - helper method `invalidInput`
    if `invalidInput` returns true, return empty object {};
  - helper method `hasLetters`
    - if `hasLetters` returns true, continue
    - else return result with obj[neither] = '100.00'

- initialize `totalChars` = input.length

- initialize `lowercasePercentage`
  - use match to get an array of matches for lowercase chars only
  - get the length of the result array and divide by `totalChars` * 100
  - use parseFloat(quotient).toFixed(2) to get the quotient into a string form and rounded to 2 decimals

- reassign result[lowercase] to `lowercasePercentage`

- initialize `uppercasePercentage`
  - use match to get an array of matches for uppercase chars only
  - get the length of the result array and divide by `totalChars` * 100
  - use parseFloat(quotient).toFixed(2) to get the quotient into a string form and rounded to 2 decimals

- reassign result[uppercase] to `uppercasePercentage`

- initialize `neitherPercentage`
  - subtract 100 - (Number(lowercasePerc) + Number(uppercasePerc))
  - use parseFloat(difference).toFixed(2) to get the difference into a string form and rounded to 2 decimals

- reassign result[neither] to `neitherPercentage`

- return result

- helper method `invalidInput`
  - check if input is NOT a string or length is less than 1
    - if above is true, return true
    - else false

- helper method `hasLetters`
  - check if input has any letters
    - if yes return true
    - else false
*/

// function invalidInput(input) {
//   return typeof input !== 'string' || input.length < 1;
// }

// function hasLetters(input) {
//   return /[a-z]/i.test(input);
// }

// function formatNum(percentage) {
//   return parseFloat(percentage).toFixed(2);
// }

// function casePercentage(str, regex, total) {
//   return formatNum(str.match(regex).length / total * 100);
// }

// function letterPercentages(str) {
//   let result = { lowercase: "0.00", uppercase: "0.00", neither: "0.00" }
//   if (invalidInput(str)) return {};

//   if (!hasLetters(str)) {
//     result.neither = '100.00';
//   } else {
//     let totalChars = str.length;

//     let lowercasePct = casePercentage(str, /[a-z]/g, totalChars);
//     result.lowercase = lowercasePct;

//     let uppercasePct = casePercentage(str, /[A-Z]/g, totalChars);
//     result.uppercase = uppercasePct;

//     let neitherPct = formatNum(100 - (Number(lowercasePct) + Number(uppercasePct)));
//     result.neither = neitherPct;
//   }

//   return result;
// }

function invalidInput(input) {
  return typeof input !== 'string' || input.length < 1;
}

function percentage(str, regex, total) {
  return parseFloat((str.match(regex) || []).length / total * 100).toFixed(2);
}

function letterPercentages(str) {
  if (invalidInput(str)) return {};

  let totalChars = str.length;
  return {
    lowercase: percentage(str, /[a-z]/g, totalChars),
    uppercase: percentage(str, /[A-Z]/g, totalChars),
    neither: percentage(str, /[^A-Z]/gi, totalChars)
  };
}


console.log(letterPercentages(123)); // {}
console.log(letterPercentages([])); // {}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }