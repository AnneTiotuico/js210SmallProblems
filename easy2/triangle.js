/*
problem: 
given a positive int `n`, log a right triangle whose sides each have `n` sides
the diagnol side should have one end at the lower left and other at upper right
-each row of asterisks should be on its own line
input: int
output: string of asterisks

example:
triangle(5)
-each side of the triangle has 5 stars
-first row has 4 spaces and 1 star
-second row has 3 spaces and 2 stars
-third row has 2 spaces and 3 stars
-fourth row has 1 space and 4 stars
-fifth row has 0 spaces and 5 stars

data structures:
number
string

algorithm:
initialize a variable spaceCount to int `n - 1
initialize a variable starCount to int `n` - spaceCount
while spaceCount is greater than 0, loop through
to log a row where spaces are repeated by spaceCount and stars are repeated by starCount
decrement spaceCount after each iteration

*/


// function triangle(int) {
//   let spaceCount = int - 1;
  
//   while (spaceCount >= 0) {
//     let starCount = int - spaceCount;
//     console.log(`${' '.repeat(spaceCount)}${'*'.repeat(starCount)}`);
//     spaceCount -= 1;
//   }
// }

// function triangle(int) {
//   let spaceCount = int - 1;
  
//   for (let starCount = 1; starCount <= int; starCount++) {
//     console.log(`${' '.repeat(spaceCount)}${'*'.repeat(starCount)}`);
//     spaceCount -= 1;
//   }
// }

function triangle(int) {
  for (let starCount = 1; starCount <= int; starCount++) {
    console.log(`${' '.repeat(int - starCount)}${'*'.repeat(starCount)}`);
  }
}


triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********