/*
problem:
-input: string
-output: string
given a string, return a new string that contains the value of the original string, but with consecutive
duplicate characters collapsed into a single char
-if empty string, return empty string


examples:
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
-collapse all consecutive duplicated letters to a single letter
-keep the space where it is

crunch('4444abcabccba');              // "4abcabcba"
-collapse all consecutive duplicated letters and numbers to a single char


crunch('ggggggggggggggg');            // "g"
-reduce all the g's to one g

crunch('a');                          // "a"
- single letter, return single letter

crunch('');                           // ""
-empty string return empty string


data structures:
strings

algorithm:
declare variable and assign to empty string result = ''
iterate through each char with index
if char that comes before it is equal to itself, continue
if not, add to result string
return string

*/

// function crunch(string) {
//   let result = '';
  
//   for (let index = 0; index < string.length; index++) {
//     if (string[index - 1] !== string[index]) {
//       result += string[index]; 
//     } 
//   }
  
//   return result;
// }

// function crunch(string) {
//   return string.split().map(word => word.replace(/(.)\1+/g, '$1')).join();
// }

function crunch(string) {
  return string.replace(/([a-zA-Z0-9])\1+/g, '$1');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""