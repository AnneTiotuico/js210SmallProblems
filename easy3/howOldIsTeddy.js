/*
Build a program that randomly generates Teddy's age, and logs it to the console.
Have the age be a random number between 20 and 200 (inclusive).

Example Output:
Teddy is 69 years old!
*/

function teddysAge() {
  let min = Math.ceil(20);
  let max = Math.floor(200);
  let age = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`Teddy is ${age} years old!`);
}

teddysAge();

/*
LS Solution:
The Math object has a random() method that might be useful. Check out the documentation on MDN.
How many possible numbers can be generated?
How can you make sure that the numbers generated won't go below the minimum value?

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const age = randomBetween(20, 200);
console.log(`Teddy is ${age} years old!`);

The solution makes use of the random() method of the Math object. The random()
method generates a random floating-point number between 0 (inclusive)
and 1 (exclusive). To have the random number be between 20 and 200,
the solution uses the function randomBetween. It takes a min and a max value as arguments.

The first part of the expression returned by randomBetween function,
Math.floor(Math.random() * (max - min + 1)), generates a number based
on the range (distance) between the max and the min. If the arguments
passed are 20 and 200, there are 181 possible values, starting from 0 up to 180.

The second part, + min;, which completes the expression,
offsets the current value so that the number returned falls
within the range of the arguments passed.

Finally, the Math.floor() method turns the generated number into an integer.
The method takes a number and reduces it to the next lower integer,
effectively truncating any digits following the decimal point.

Further Exploration
The randomBetween function used the Math.floor() method. Would it make a
difference if the Math.round() method was used instead?

Also, how can we make the function more robust? What if the user
inadvertently gave the inputs in reverse order
(i.e., the value passed to min was greater than max)?
*/