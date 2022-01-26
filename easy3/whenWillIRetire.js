/*
Build a program that logs when the user will retire and how many
more years the user has to work until retirement.

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

const rlSync = require('readline-sync');

const age = parseInt(rlSync.question('What is your age? '), 10);
const retiredAge = parseInt(rlSync.question('At what age would you like to retire? '), 10);
const difference = retiredAge - age;
const currentYear = new Date().getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + difference}.`);
console.log(`You only have ${difference} years of work to go!`);


/*
LS Solution:
const age = parseInt(prompt('What is your age?'), 10);
const retirementAge = parseInt(prompt('At what age would you like to retire?'), 10);

const today = new Date();

const currentYear = today.getFullYear();
const workYearsToGo = retirementAge - age;
const retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${workYearsToGo} years of work to go!`);

The solution makes use of the Date object. It uses the Date.prototype.getFullYear
method to return the year value of the Date object that was created.
Note that there is also Date.prototype.getYear method available in the
Date object, which returns a 2-3 digit representation of the year
(the getYear method is deprecated, so it's best to avoid using it).

With the use of the getFullYear method, the solution gets the currentYear.
It then computes the value of workYearsToGo by subtracting the current age
from the retirementAge. Then to get the retirementYear, it adds
the currentYear to the number of workYearsToGo.

Further Exploration
What would happen if the new keyword wasn't used in defining
the today variable on line 4?

*/
