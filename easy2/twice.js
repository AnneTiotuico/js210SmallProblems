/*
problem:
given a number, return the number multiplied by 2
but if it is a double number, return it as is
-a double number is an even length number where the left side digits
are the same as the right side digits if you cut it in half
like 3333 is a double number and so id 103103
but 444 is not and 334433 is not
-input: number
-output: number

examples:
twice(37);          // 74
-multiply by 2 to get 74
-not double since left and right number aren't the same

twice(44);          // 44
-return as is since double number
-even length and left/right exactly same

twice(334433);      // 668866
-multiply by 2 to get 668866
-not double since left and right number aren't the same

twice(444);         // 888
-multiply by 2 to get 888
-not double since not even length

twice(107);         // 214
-multiply by 2 to get 214
-not double since not even length

twice(103103);      // 103103
-return as is since double number
-even length and left/right exactly same

twice(3333);        // 3333
-return as is since double number
-even length and left/right exactly same

twice(7676);        // 7676
-return as is since double number
-even length and left/right exactly same

data structures:
numbers

algorithm:
create guard clause if num.length % === 1 then multiply num by 2
else
convert num to string then create substrings to get left side and right side
get middle index by getting length of string


*/

function twice(num) {
  // if (num.length % 2 === 1) return num * 2;
  
  let string = String(num);
  let middle = string.length / 2;
  let left = string.substring(0, middle);
  let right = string.substring(middle, string.length);
  
  return left === right ? num : num * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676