function julianCalendar(year) {
	return (year % 4 === 0) ? true : false;
}

function gregorianCalendar(year) {
	if (year % 400 === 0 && year % 100 === 0)  return true;
	if (year % 4 === 0 && year % 100 !== 0) return true;
	return false;
}

function isLeapYear(year) {
	if (year <= 1752) {
		return julianCalendar(year);
	} else {
		return gregorianCalendar(year);
	} 
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true
