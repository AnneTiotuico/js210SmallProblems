/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution.
It uses a series of Caesar Ciphers based on the letters of a keyword.
Each letter of the keyword is treated as a shift value.
For instance, the letter 'B' corresponds to a shift value of 1, and the
letter 'd' corresponds to a shift value of 3. In other words, the shift value
used for a letter is equal to its index value in the alphabet.
This means that the letters 'a'-'z' are equivalent to the numbers 0-25.
The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by
applying the current shift value to a Caesar Cipher for that particular
character. To make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!
Notice that in the example, the key isn't moved forward if the character
isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only
encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the
keyword doesn't matter—in other words, the resulting encryption won't
change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').


Problem:
given a msg string and keyword string, return a string that has been shifted
using the keyword

rules/requirements:
- 'B' and 'b' corresponds to the shift value 1
- 'd' and 'D' corresponds to the shift value of 3
- the shift value used for a letter is equal to its index value in the alphabet (0 based index)
- all letters a-z/A-Z are equivalent to numbers 0-25
- case insensitive
- the nonletters such as spaces and punctuation are ignored when encrypting
  - but they must stay in their original spots for the result


input: 2 strings
output: 1 string

Questions:
- Do we need to worry about non string inputs?
- How do we handle no arguments?
  - only 1 argument?
  - more than 2 arguments?
- How do we handle empty strings for either input?
- Is there a min/max length for either input?

examples / test cases:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notes:
- the length of the keyword is 4
- the plain text is broken up in 4 letter chunks (excluding non letters)
- the keyword shiftvalues are applied to every chunk individually

- P, m => 12 shift value => P becomes B
- i, e => 4 shift value => i becomes m
- n, a => 0 shift value => n stays n
- e, t => 19 shift value => e becomes x

data structure:
string (input/output)
arrays (arr of chars)
numbers (indexes)
regex? (clean strings)

algorithm:
- create an array of the alphabet `alphabet`

- guard clause helper method `invalidInput`
  - check if either input is invalid
    - if yes, return empty string ''
    - else, continue

- initialize `msgChars` => split msg into array of chars
- initialize `keywordLength` => keyword.length
- initialize `shiftValues` =>
  - split keyword into array of chars
  - map through and get the index of each char within the alphabet (ex [12, 4, 0, 19])

- initialize `nonLetters` =>
  - iterate through `msgChars` using map with index; get only the ones that aren't letters
    - this should give us an array of undefineds and non letter chars
    - filter through transformed array and get only the ones that aren't undefined
      - use this later to put the non letters back in the correct place

- initialize `onlyLetters` =>
  - using msg str, remove anything that isn't a letter (replace) then split into chars

- initialize `numOfChunks` => length of `onlyLetters` / `keywordLength` (ex 6)
- initialze `substrArr` to empty array [] (we want all the substrs we need to shift)

- use a for loop starting at num = 0 while num is less than `numOfChunks`
  - create a subarr from `onlyLetters` starting at idx `num` and use keywordLength to get the right amt of chars (splice)
  - push that subarr into `substrArr`

- at this point we should have an array of shift values and an array of substr chunks


- outer loop, iterate through `substrArr` using map (save return to a variable `shiftedMsg`)
  - inner loop iterate through each letter in the subarr with idx
    - initialize variable shiftValue to `shiftValues`[idx] (since the current letter should match indexes w appropriate shift value)
    - get the indexOf current letter in the alphabet array
    - add `shiftValue` to that index of current letter, if its >= 26 subtract 26 save this value to `newIndex`
    - return alpha[newIndex]
  => should now have array of subarrays containing the correct letters
    - use flat to get just an array of all the letters

- iterate through `msgChars` using map to get transformed letters
  - check if the char is included in the alphabet array
    - if yes, return the first letter of `shiftedMsg`
  - check if the char is a letter
    - if yes, return the first letter of `shiftedMsg` but lowercased
  - if none of those apply, return the first char of nonLetters
  - join the transformed array to get the result string

- helper method `invalidInput`
  - check if input is not string type
    - return true if it isn't
    - else false

*/

function invalidInput(input) {
  return typeof input !== 'string';
}

function vigenereCipher(msg, keyword) {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  if (invalidInput(msg) || invalidInput(keyword)) return '';
  if (!invalidInput(msg) && (invalidInput(keyword) || keyword.length < 1)) return msg;

  let msgChars = msg.split('');
  let keywordLength = keyword.length;
  let shiftValues = keyword.split('').map(char => alphabet.indexOf(char.toUpperCase()));
  let nonLetters = msgChars.map((char, idx) => {
    if (!alphabet.includes(char.toUpperCase())) return char;
  }).filter(nonLetter => nonLetter);

  let onlyLetters = msg.replace(/[^a-z]/gi, '').split('');
  let numOfChunks = onlyLetters.length / keywordLength;

  let substrArr = [];

  for (let num = 0; num < numOfChunks; num++) {
    substrArr.push(onlyLetters.splice(0, keywordLength));
  }

  let shiftedMsg = substrArr.map(subarr => {
    return subarr.map((letter, idx) => {
      let shiftValue = shiftValues[idx];
      let alphaIndex = alphabet.indexOf(letter.toUpperCase());
      let newIndex = alphaIndex + shiftValue;
      newIndex = newIndex >= 26 ? newIndex - 26 : newIndex;
      return alphabet[newIndex];
    });
   }).flat();

  let result = msgChars.map(char => {
    if (alphabet.includes(char)) {
      return shiftedMsg.shift();
    }
    if (/[a-z]/.test(char)) {
      return shiftedMsg.shift().toLowerCase();
    }
    return nonLetters.shift();
  }).join('');

  return result;
}

console.log(vigenereCipher('Pineapples don\'t go on pizzas!', 'meat') === 'Bmnxmtpeqw dhz\'x gh ar pbldal!');
console.log(vigenereCipher('The weather is nice today.', 'sun') === 'Lbr oynlbrj cf fcpw nbvul.');
console.log(vigenereCipher('There\'s a bird in the tree!', 'bird') === 'Upvuf\'a r ejzu lo byh uzvh!');

console.log(vigenereCipher('hi', 'there') === 'ap');
console.log(vigenereCipher('hello', 'b') === 'ifmmp');
console.log(vigenereCipher('hello', 'a') === 'hello');

console.log(vigenereCipher('Pineapples don\'t go on pizzas!', 1)); // ''
console.log(vigenereCipher(1, 'meat')); // ''

console.log(vigenereCipher('', '') === '');
console.log(vigenereCipher('', 'a') === '');
console.log(vigenereCipher('a', '') === 'a');

// invalid args return empty str
