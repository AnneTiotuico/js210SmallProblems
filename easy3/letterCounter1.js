/*
Write a function that takes a string consisting of one or more
space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.
*/

function wordSizes(string) {
  let result = {};
  if (!string) return result;

  string.split(' ').forEach(word => {
    result[word.length] ? result[word.length] += 1 : result[word.length] = 1;
  });

  return result;
}


// function wordSizes(string) {
//   if (!string) return {};

//   return string.split(' ').reduce((result, word) => {
//     result[word.length] ? result[word.length] += 1 : result[word.length] = 1;
//     return result;
//   }, {});
// }

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}


/*
LS Solution:
function wordSizes(words) {
  const wordsArray = words.split(' ');
  const count = {};

  for (let i = 0; i < wordsArray.length; i += 1) {
    let wordSize = wordsArray[i].length;
    if (wordSize === 0) {
      continue;
    }

    count[wordSize] = count[wordSize] || 0;
    count[wordSize] += 1;
  }

  return count;
}

The goal of this exercise is to count the number of words of each size.
To do that, the solution first obtains a list of words by splitting the
words argument string into an array of words. Computing the size of a word
is easy, but incrementing the count for that word size is slightly trickier.

The solution stores the counts of word sizes as properties of the count object.
It does this by iterating over the list of words and performing the following:

Initialize the wordSize variable to the length of the current word.
Check if wordSize is equal to 0. If yes, proceed immediately to the next
iteration since there is no need to account for words of zero length.
Initialize the property for the current wordSize in the count object.
If the property does not exist (i.e., count[wordSize] evaluates to undefined),
set it to 0.
Increment the count for a particular wordSize by 1.
*/