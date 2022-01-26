// const rlSync = require('readline-sync');

// const int = parseInt((rlSync.question('Please enter an integer greater than 0: ')), 10);
// const operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

// function getSum(int) {
// 	let result = 0;
	
// 	for (let num = 1; num <= int; num++) {
// 		result += num;
// 	}
	
// 	return result;
// }

// function getProduct(int) {
// 	let result = 1;
	
// 	for (let num = 1; num <= int; num++) {
// 		result *= num;
// 	}
	
// 	return result;
// }

// let selectedOperation;
// let result;

// if (operation === 's') {
// 	selectedOperation = 'sum';
// 	result = getSum(int);
// } else if (operation === 'p') {
// 	selectedOperation = 'product';
// 	result = getProduct(int);
// }


// console.log(`The ${selectedOperation} of the integers between 1 and ${int} is ${result}.`);

// further exploration

let nums = [1, 2, 3, 4, 5];
let nums2 = [1, 2, 3, 4, 5, 6];

function computeSum(arr) {
	return arr.reduce((acc, num) => acc + num);
}

function computeProduct(arr) {
	return arr.reduce((acc, num) => acc * num);
}

console.log(computeSum(nums));
console.log(computeProduct(nums2));