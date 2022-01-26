function multisum(num) {
	let sum = 0;
	for (let start = 1; start <= num; start++) {
		if (start % 3 === 0 || start % 5 === 0) sum += start;
	}
	console.log(sum);
}


multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168