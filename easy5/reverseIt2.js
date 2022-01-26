/*
Write a function that takes a string argument containing one or more words and
returns a new string containing the words from the string argument.
All five-or-more letter words should have their letters in reverse order.
The string argument will consist of only letters and spaces. Words will be separated by a single space.
*/

// function reverseWords(str) {
//   return str.split(' ').map(word => {
//     if (word.length >= 5) {
//       return word.split('').reverse().join('');
//     } else {
//       return word;
//     }
//   }).join(' ');
// }

function reverseWords(str) {
  return str.split(' ').map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  }).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

/*
LS Solution:

function reverseWords(string) {
  const words = string.split(' ');
  const reversedWords = [];

  for (let i = 0; i < words.length; i += 1) {
    let currentWord = words[i];
    if (currentWord.length >= 5) {
      reversedWords.push(currentWord.split('').reverse().join(''));
    } else {
      reversedWords.push(currentWord);
    }
  }

  return reversedWords.join(' ');
}

This version of the "Reverse It" exercise is a little bit more complicated.
The solution still splits the string argument into an array of words,
but instead of reversing the order of words within the string, the solution
reverses the order of letters within words containing five-or-more letters.

During each iteration of the for loop, the solution checks if the length of
the currentWord is greater than or equal to 5; if it is, the solution reverses
the letters of the currentWord using a similar approach as the previous
"Reverse It" exercise, but with a different separator argument.
The solution then pushes the reversed word to the reversedWords array.
If the currentWord is less than 5 letters, the solution pushes the currentWord
to the array as-is.

After the loop finishes, the solution joins the reversedWords array with a
space () as a separator, and returns the resulting string.

*/


