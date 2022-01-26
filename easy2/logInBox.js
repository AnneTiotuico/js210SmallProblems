/*
length is 3 | and + at each end ( 5 rows total)
string is at the line of the 3nd row
width is length of string plus 2 spaces


*/

// function logInBox(string, maxWidth) {
//   let topAndBottom = `+-${'-'.repeat(string.length)}-+`;
//   let padding = `| ${' '.repeat(string.length)} |`;
  
//   console.log(topAndBottom);
//   console.log(padding);
//   console.log(`| ${string} |`);
//   console.log(padding);
//   console.log(topAndBottom);
// }

// further exploration:
function leftSpaces(string, width) {
  return ' '.repeat((width - string.length) / 2);
}

function rightSpaces(string,width) {
  return ' '.repeat(Math.round((width - string.length) / 2));
}

function wrapText(string, maxWidth) {
  if (string.length < maxWidth) {
    console.log(`| ${leftSpaces(string, maxWidth) + string + rightSpaces(string, maxWidth)} |`);
    return;
  }
  
  let chars = string.split('');
  let withinMax = chars.splice(0, maxWidth).join('');
  
  console.log(`| ${withinMax} |`);
  
  wrapText(chars.join(''), maxWidth);
  
  return;
}


function logInBox(string, maxWidth) {
  let width = maxWidth || string.length;
  let topAndBottom = `+-${'-'.repeat(width)}-+`;
  let padding = `| ${' '.repeat(width)} |`;
  
  console.log(topAndBottom);
  console.log(padding);
  
  if (string.length > maxWidth) {
    wrapText(string, maxWidth);
  } else {
    console.log(`| ${leftSpaces(string, width) + string + rightSpaces(string, width)} |`);
  }
  
  console.log(padding);
  console.log(topAndBottom);
}

logInBox('To boldly go where no one has gone before.', 50);


logInBox('To boldly go where no one has gone before.');

// logs:
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');

// logs:
// +--+
// |  |
// |  |
// |  |
// +--+