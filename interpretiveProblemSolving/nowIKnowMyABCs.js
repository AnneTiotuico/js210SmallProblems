// Now I Know My ABCs
// A collection of spelling blocks has two letters per block, as shown in this list:


// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

// Examples:

/*
Problem:
given a string, return a boolean - true if the word can be spelled with the blocks, false otherwise

rules/requirements:
- you can only use a block once
- each block has 2 letters
- 13 blocks
- case insensitive
- if not a string, return false
  - if empty string return false
- can be one letter, just return true
- if spaces, ignore and remove and continue with just the letters
- if other chars other than space, return false

input: string of letters
output: boolean true/false

examples / test cases:
console.log(isBlockWord('BATCH'));      // true
B:0 N:A G:T C:P H:U
each block is only used once, so we return true

console.log(isBlockWord('BUTCH'));      // false
B:0 H:U G:T C:P H:U
we use H:U twice, return false

console.log(isBlockWord('jest'));       // true
J:W R:E F:S G:T
each block is only used once, so we return true

console.log(isBlockWord('bAtCh')) // true
console.log(isBlockWord('a'))     // true
console.log(isBlockWord('ba tch'))     // true
console.log(isBlockWord('bu tch'))     // false

edge cases:
console.log(isBlockWord())     // false
console.log(isBlockWord(1))     // false
console.log(isBlockWord([]))     // false
console.log(isBlockWord(''))     // false
console.log(isBlockWord('batch123'))     // false

data structures:
strings (input)
booleans (output)
array (to hold the blocks)
regex (to check for invalid) and maybe to remove the spaces




algorithm:
- initialize an array `blocks`
  - 13 strings containing 2 letters each ['BO', 'XK', 'DQ'....]
- guard clause:
  - helper method `invalidInput`
    - if that returns true return false
    - if not, continue
- `cleanedLetters` equal to the input string with the spaces removed
  - split into array of letters
  - map through it and transform each letter to its capitalized form
- initialize a `count` to 0 (this represents how many times we use a block)

- initialize a copy of blocks `blocksCopy`
- iterate through the `cleanedLetters`

  - iterate through a copy `blocks` with index
    - check if current letter is included in current block
      - if yes, increment `count` by 1
        - remove current block from copy of `blocks`
      - if not, continue
- check that the `count` is equal to the length of the input string
  - return true if equal
  - return false if count is less than length


- helper method `invalidInput`
  - check if the input's type is 'string' and that is contains only letters (case insensitive) and spaces
    -also check if its length is greater than 0
    - we want the inverse of the above so we use the ! operator
  - returns true if invalid input false otherwise

*/

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

function invalidInput(input) {
  return !(typeof input === 'string' && !/[^a-z ]/gi.test(input) && input.length > 0)
}

function isBlockWord(string) {
  const blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  if (invalidInput(string)) return false;
  let cleanedLetters = string.replace(/ /g, '').split('').map(letter => letter.toUpperCase())
  if (cleanedLetters.length < 1) return false;
  let count = 0;
  let blocksCopy = blocks.slice();


  cleanedLetters.forEach(letter => {
    blocksCopy.forEach((block, idx) => {
      if (block.includes(letter)) {
        count += 1;
        blocksCopy.splice(idx, 1);
      }
    })
  })

  return count === cleanedLetters.length;
}


// console.log(isBlockWord('BATCH'));      // true
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true

// console.log(isBlockWord('bAtCh')) // true
// console.log(isBlockWord('a'))     // true
// console.log(isBlockWord('ba tch'))     // true
// console.log(isBlockWord('bu tch'))     // false

// // edge cases:
// console.log(isBlockWord())     // false
// console.log(isBlockWord(1))     // false
// console.log(isBlockWord([]))     // false
// console.log(isBlockWord(''))     // false
// console.log(isBlockWord('batch123'))     // false


// console.log(isBlockWord("   "));        // false
// console.log(isBlockWord('je s t'));     // true
console.log(isBlockWord('ZAGA')) // false