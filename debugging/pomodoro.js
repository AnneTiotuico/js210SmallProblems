/*
The following code demonstrates the Pomodoro technique. Although it seems
to work in principle, it never prints the minute count from line 11.
What is wrong?
*/

var tasks = 10;
var checkmarks = 0;
var sessions = 0;
var minutes = 0;

function pomodoro() {
  console.log('Work.');

  while (minutes < 25) {
    minutes += 1;
    console.log('...' + minutes);
  }

  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log('Rest for ' + rest + ' minutes.');

  var minutes = 0;
  pomodoro();
}

pomodoro();


// my answer:
// code omitted
//   var rest;
//   if (sessions === 4) {
//     sessions = 0;
//     rest = 30;
//   } else {
//     rest = 5;
//   }

//   console.log('Rest for ' + rest + ' minutes.');

//   minutes = 0; <-- removed var to avoid hoisting
//   pomodoro();
// }

/*
LS Solution:


  console.log('Rest for ' + rest + ' minutes.');

  minutes = 0; <--
  pomodoro();
}

pomodoro();



On line 34 of our original code, we use var to re-declare the variable minutes.
As a consequence, variable hoisting moves the variable declaration (var minutes)
to the top of the scope, in our case the pomodoro function, but the variable
assignment (minutes = 0) will remain on line 34. So the structure of our
program regarding minutes is actually like this:

var minutes = 0;

function pomodoro() {
  var minutes;

  // ...

  minutes = 0;
}

Note that declaring a variable minutes within our pomodoro function will
shadow the variable minutes declared outside of the function. This means that
JavaScript can no longer access that outside variable. So every time we call
pomodoro(), the function-scoped variable minutes is re-declared and thus any
time that minutes is referenced within our function body prior to line 34, its
value is undefined. Because of this, the condition provided to our while loop
on line 9 never evaluates as truthy, and minutes is actually never incremented.

We can simply remove the var on line 34 so that our code will behave as expected.

*/