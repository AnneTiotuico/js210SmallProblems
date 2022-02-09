/*
You have a bank of switches before you, numbered from 1 to n.
Every switch is connected to exactly one light that is initially off.
You walk down the row of switches and toggle every one of them.
You walk back to the beginning of the row and start another pass.
On this second pass, you toggle switches 2, 4, 6, and so on.
On the third pass, you go back to the beginning again, this time
toggling switches 3, 6, 9, and so on. You continue to repeat this
process until you have gone through n repetitions.

Write a program that takes one argument—the total number of
switches—and returns an array of the lights that are on after n repetitions.

Problem:
given a number (n) representing a total number of switches, return an array representing
an array of lights that are ON after n repetitions

rules/requirements:
- the input represents:
  - how many total switches/lights there are
  - as well as how many reptitions

- the switches are numbered 1 to n
- every switch is connected to exactly 1 light that is initially OFF
- your 1st round, you turn every light ON starting from 1 to n
- 2nd round you toggle switches 2, 4, 6, etc (every multiple of 2)
  - these are all turned OFF
- 3rd round you toggle 3, 6, 9 etc, (every multiple of 3)
  - all evens of multiples of 3 are turned ON while odds are OFF
- you continue until you have gone through n repetitions
- light 1 will always be on, since it never gets toggled off

input: number
output: array

questions:
- How do we handle non-number/invalid inputs?
  - What about a string that contains digit values? '5'
- How do we handle an argument being omitted?
- Can we expect that it will be an integer(whole number) input?
  - What about negative numbers?
  - Decimals?
  - Special numbers like NaN, Infinity and -Infinity?
- How do we handle leading zeros?
- How do we handle 0?
- Is there a max/min number that can be input?

Examples / test cases:
lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(10); // [1, 4, 9]

lightsOn(11); // [1, 4, 9]
lightsOn(16); // [1, 4, 9, 16]
lightsOn(17); // [1, 4, 9, 16]
lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

notes:
all result arrays start with 1 and all others are perfect squares
1*1 = 1
2*2 = 4
3*3 = 9
4*4 = 16
etc


Data structures:
number (input and elements in array)
arrays (output)

Algorithm:
- guard clause:
  - if input is not an integer return return empty array
  - if input is 0 return empty array
  - if empty array return empty array
- initialize a result array to an empty array
- use a for loop starting at idx 1 and stop when we get the square root of the given input
  - push the current idx's squared number to result array

*/

function invalidInput(input) {
  return !Number.isInteger(input) || input === 0 ;
}

function lightsOn(switches) {
  if (invalidInput(switches)) return [];

  let result = [];
  for (let idx = 1; idx <= Math.sqrt(switches); idx++) {
    result.push(idx**2);
  }

  return result;
}

/*
Other approach:
/*
Problem:
given a number n representing a total number of switches, return an array of 'lights' that are on after n repetitions

rules/requirements:
- you have n amount of switches
- each switch is connected to exactly one light
- all n switches are initially off
- 1st round you toggle all n, they are now all on (multiples of 1)
- 2nd round you only toggle the even numbered switches (multiples of 2)
- 3rd round you only toggle the switches that are multiples of 3
- each round you toggle the ones that are multiples of that nth round
- you do this until you reach n repetitions
- you must return an array of the numbered switches that are ON

input- number (integer)
output- array (array of integers)

examples:

data structure:

algorithm:
- guard clause(s) `invalidInput`
  - check if the input is an integer greater than 0
    - if yes, continue
    - if no, return empty array []

- initialize an array of 'lights'
  - there should be n amount of items
  - the items should all be the boolean `false` to represent them being OFF
- use nested loops
  - the outer should iterate n times starting at 1 `round`
  - the inner loop should iterate over the `lights` array with idx
    - check if the current element's idx + 1 is a multiple of the current `round`
      - if yes, toggle the switch, if it is currently `true` switch to `false` and vice versa
      - if no, continue
- iterate over the new array with transformation (map) to get their current index + 1
- iterate over the transformed array, and filter only the ones that are truthy (have an index/value)



function invalidInput(input) {
  return !Number.isInteger(input) || input < 1
}


function lightsOn(switches) {
  if (invalidInput(switches)) return [];

  let lights = Array(switches).fill(false);

  for (let round = 1; round <= switches; round++) {
    lights.forEach((light, idx) => {
      if ((idx + 1) % round === 0) {
        light ? lights[idx] = false : lights[idx] = true;
      }
    })
  }

  return lights.map((light, idx) => { if (light) return idx + 1 }).filter(on => on);
}
*/

console.log(lightsOn(1)); // [1]
console.log(lightsOn(2)); // [1]
console.log(lightsOn(3)); // [1]

console.log(lightsOn(4)); // [1, 4]
console.log(lightsOn(5)); // [1, 4]

console.log(lightsOn(9));  // [1, 4, 9]
console.log(lightsOn(11)); // [1, 4, 9]

console.log(lightsOn(16)); // [1, 4, 9, 16]
console.log(lightsOn(17)); // [1, 4, 9, 16]
console.log(lightsOn(24)); // [1, 4, 9, 16]

console.log(lightsOn(25)); // [1, 4, 9, 16, 25]
console.log(lightsOn(28)); // [1, 4, 9, 16, 25]

console.log(lightsOn(100));// [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


// //Invalid number input return an empty array
console.log(lightsOn(NaN)); // []
console.log(lightsOn(5.4)); // []
console.log(lightsOn(Infinity)); // []
console.log(lightsOn(0)); // []

// //Invalid data types, return an empty array
console.log(lightsOn({})); // []
console.log(lightsOn(() => '')); // []
console.log(lightsOn('')); // []
console.log(lightsOn(false)); // []