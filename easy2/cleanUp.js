// function cleanUp(string) {
//   return string.replace(/[^a-z]/gi, ' ').replace(/([' '])\1+/g, '$1');
// }

// function cleanUp(string) {
//   return string.replace(/[^a-z]+/gi, ' ');
// }


/*
non-regex

algorithm:
create alphabet variable
initialize empty result string
iterate through string character by character
check to see that the char is a letter, if yes, append to result
check if the result's last char is a space, if yes, continue
if not, append a space
if it is a space, don't apend anything to result

*/

function cleanUp(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  let result = '';
  
  for (let index = 0; index < string.length; index++) {
    if (alphabet.includes(string[index].toLowerCase())) {
      result += string[index];
    } else if (result[result.length - 1] === ' ') {
      continue;
    } else {
      result += ' ';
    }
  }
  
  return result;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "