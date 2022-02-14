/*
Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.
*/

/*
Problem:
given a string `plaintext` and number `shiftValue`, encrypt/shift the string by `shiftValue`


rules/requirements:
- each letter in the `plaintext` is substituted by the letter located given a number of positions away in the alphabet
- if 'A' is shifted by 3 positions, it will be subbed with 'D'
- only encrypt letters upper and lowercase (case insensitive)
- any other non letter is left as is
- make sure the subbed letters are the same letter case as the original
- if key shift value exceeds length of alphabet, wrap around from the beginning

input: string and number
output: string

Examples/ test cases:
// simple shift
caesarEncrypt('A', 0);       // "A"
- 0 means no shift, so 'A' stays 'A'
caesarEncrypt('A', 3);       // "D"
- shift 3 positions so 'A' => 'D'

// wrap around
caesarEncrypt('y', 5);       // "d"
- starts back at 'a' after going past 'z'
caesarEncrypt('a', 47);      // "v"
- wraps around multiple times

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
- encrypts all letters and keeps the original cases
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"
- leaves the spaces and punctuation as is

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

Data Structure:
- array (alphabet, plaintext chars)
- string (input/output)
- number (input)
- regex for matching letters?

Algorithm:
- initialize constant to hold the alphabet

- guard clauses:
  - if `invalidStrInput` returns true, return empty string ''
  - if `invalidIntInput` returns true, return original plaintext

- split the plaintext into array of chars `chars`
- iterate through `chars` with map
  - check if `char` is included in `alphabet`
    - if yes, get its index within `alphabet`
    - initialize `alphaIndex` to above index
    - initialize `newIndex` to adding `alphaIndex` and `shiftValue`
      - if the sum is greater than 25. Use the sum % 26 so it stays within the range of valid indexes
      - if it's greater, reassign the result of sum % 26 to `newIndex` else just add alpha and shift
      - return alphabet[newIndex]
  - if not capitalized, check if the uppercase version of the `char` is in the `alphabet`
    - if yes, get its index within `alphabet`
    - initialize `alphaIndex` to above index
    - initialize `newIndex` to adding `alphaIndex` and `shiftValue`
      - if the sum is greater than 25. Use the sum % 26 so it stays within the range of valid indexes
      - if it's greater, reassign the result of sum % 26 to `newIndex` else just add alpha and shift
      - return alphabet[newIndex].toLowerCase()
  - if neither two branches execute
    - return `char` as is
- join the transformed array back into a string and return the result


- helper method `invalidStrInput`
  - check if the value is NOT a string type and length is NOT greater than 0 and does not contain letters
  - if above is true, return true
  - else false

- helper method `invalidIntInput`
  - check if value is NOT an integer and NOT greater than 0
  - if above is true, return true
  - else false

*/

function invalidStrInput(str) {
  return typeof str !== 'string' || str.replace(/ /g, '').length < 1 || !/[a-z]/i.test(str);
}

function invalidIntInput(int) {
  return !Number.isInteger(int) || int < 0;
}

function caesarEncrypt(plaintext, shiftValue) {
  const alphabet = [
                    'A', 'B', 'C', 'D', 'E', 'F',
                    'G', 'H', 'I', 'J', 'K', 'L',
                    'M', 'N', 'O', 'P', 'Q', 'R',
                    'S', 'T', 'U', 'V', 'W', 'X',
                    'Y', 'Z'
                   ];
  if (invalidStrInput(plaintext)) return '';
  if (invalidIntInput(shiftValue)) return plaintext;

  let chars = plaintext.split('');

  return chars.map(char => {
    if (alphabet.includes(char)) {
      let alphaIndex = alphabet.indexOf(char);
      let newIndex = alphaIndex + shiftValue;
      newIndex = newIndex > 25 ? newIndex % 26 : newIndex;
      return alphabet[newIndex];
    }

    if (alphabet.includes(char.toUpperCase())) {
      let alphaIndex = alphabet.indexOf(char.toUpperCase());
      let newIndex = alphaIndex + shiftValue;
      newIndex = newIndex > 25 ? newIndex % 26 : newIndex;
      return alphabet[newIndex].toLowerCase();
    }

    return char;
  }).join('');
}


// simple shift
console.log(caesarEncrypt('A', 0) === "A");
console.log(caesarEncrypt('A', 3) === "D");

// wrap around
console.log(caesarEncrypt('y', 5) === "d");
console.log(caesarEncrypt('a', 47) === "v");

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");


// invalid str input
console.log(caesarEncrypt(12, 5) === '');
console.log(caesarEncrypt(' ', 2) === '');
console.log(caesarEncrypt('1205', 1) === '');

// invalid int input
console.log(caesarEncrypt('a', -5) === "a");
console.log(caesarEncrypt('a12', NaN) === "a12");

