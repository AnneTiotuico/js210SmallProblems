// function fibonacci(number) {
//   if (number < 2n) return number; 
//   return fibonacci(number - 1n) + fibonacci(number - 2n);
// }

// function findFibonacciIndexByLength(digits) {
//   let currentFib = 0n;
//   let index = 7n;
  
//   while (String(currentFib).length < digits) {
//     currentFib = fibonacci(index);
//     index += 1n;
//   }

//   return index - 1n;
// }

function findFibonacciIndexByLength(digits) {
  let currentFib = 0n;
  let firstNum = 1n;
  let secondNum = 1n;
  let index = 2n;
  
  while (String(currentFib).length < digits) {
    currentFib = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = currentFib;
    index += 1n;
  }
  return index;
}


console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.