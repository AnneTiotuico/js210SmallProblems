/*
A stack is a list of values that grows and shrinks dynamically. A stack may be
implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of
values. Each operation in the language operates on a register, which can be
thought of as the current value. The register is not part of the stack.
An operation that requires two values pops the topmost item from the stack
(i.e., the operation removes the most recently pushed value from the stack),
operates on the popped value and the register value, and stores the result back in the register.

Consider a MULT operation in a stack-and-register language.
It removes the value from the stack, multiplies the removed stack value with
the register value, then stores the result back in the register.
For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost
item in the stack) and a register value of 7, the MULT operation mutates
the stack to [3, 6] (the 4 is removed), and the result of the multiplication,
28, is left in the register. If we do another MULT at this point, the stack
is mutated to [3], and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based
programming language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument.
Your function may assume that all arguments are valid programs — i.e.,
they will not do anything like trying to pop a non-existent value from the stack,
and they will not contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively.
*/

/*
Problem:
create a function that implements a mini stack-and-register programming language with commands:
- n: place a value n in `register`; don't modify stack
- PUSH: push `register` value onto stack [], leave value in `register`
- ADD: pop a value from `stack` and ADD to register, storing result in register
- SUB: pop a value from stack and SUBTRACT from register and store result in register
- MULT: pop a value from stack and multiply by register and store in register
- DIV: pop value from stack and divide register value by popped value, store INTEGER (round to integer) in the register
- REMAINDER: pop value from stack, divide register value by popped stack value, store INTEGER (round to nearest int) remainder back into register
- POP: remove last item from stack array and place in register
- PRINT: log the register value


rules/requirements:
- a stack may be implemented as an Array that uses push() and pop()
- register can be though of as the current value
- register is not part of the stack
- if an operation requires 2 values
  - the topmost (last) item in the array is popped and operates on the popped value
      and register value and the result is stored back in the register
- all operations are INTEGER operations (only important for DIV and REMAINDER)
- assume all arguments are valid
  - they wont try popping a non-existent value from the stack
  - wont contain any unknown tokens (commands)
- initialize stack to []
- initialize register to 0
- all numeric inputs will be integers, can be negative
- only output something when PRINT is included in the input

input: string representing operations
output: integer

questions:
- Do we need to worry about spaces other than between each command?
  - Do we need to worry about multiple spaces between commands?
- Should the program be case sensitive?
- Do we round up or down to nearest integer?


Examples / test cases:
- MULT operation with stack [3, 6, 4] and register 7
  - we pop() 4 so stack is mutated to [3, 6] we operate on 4
  - multiply register 7 with 4 and get 28 which is stored in the register
  - if we do another MULT
    - pop() 6 and stack is [3]
    - multiply register 28 with 6 and get 168 which is stored in the register

minilang('PRINT'); // 0 since register is initialize to 0 and we don't do anything besides PRINT the register value

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
- 3 register = 3
- PUSH push 3 into stack [3]
- PUSH push 3 into stack [3, 3]
- 7 register = 7
- DIV pop 3 from stack [3] and register = round(7 / 3) = 2
- MULT pop 3 from stack [] register = round(2 * 3) = 6
- PRINT log 6

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
- (3) register becomes 3, don't modify stack
- (PUSH) push 3 into stack [3], leave value in register
- (4) register becomes 4
- (PUSH) push 4 into stack [3, 4], leave register = 4
- (5) register = 5
- (PUSH) push 5 into stack, [3, 4, 5], register = 5
- (PRINT) output 5 register value
- (ADD) pop 5 out of stack [3, 4], add to register, register = 10
- PRINT output 10
- POP remove 4 from stack [3] place in register = 4
- PRINT output 4 register value
- ADD pop 3 [], add to register = 7
- PRINT output 7


Data structures:
string (input, logged output)
array (stack)
numbers (values)

Algorithm:
- initialize `stack` []
- initialize `register` 0
- initialize `commandList` => split input `commands` to array of commands (split on spaces)
- iterate through list of commands
  - check for each command (maybe use switch/case)
    - if it is 'PUSH' invoke push on stack and pass in register
    - if ADD add popped value with register reassign return value to register
    - if SUB subtract popped value from register  reassign return value to register
    - if MULT multiply popped value with register r and reassign return value to register
    - if DIV divide register with popped value and reassign return value to register
      - make sure you round to nearest int
    - if REMAINDER register % popped value and reassign return value to register
      - make sure you round to nearest int
    - if POP invoke pop helper and reassign return value to register
    - if PRINT log the register value
    - else its a number, reassign register to it

*/


function minilang(commands) {
  let stack = [];
  let register = 0;
  let commandList = commands.split(' ');

  commandList.forEach(command => {
    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.round(register / stack.pop());
        break;
      case 'REMAINDER':
        register = Math.round(register % stack.pop());
        break;
      default:
        register = Number(command);
    }
  });
}


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)