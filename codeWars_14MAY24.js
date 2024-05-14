//codeWars 14MAY2024

//TASK
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

//PSEUDOCODE
// get year, use .slice() method
// if last two integers === 0, then return first two integers
// else if if conditional --> if year > xxxx AND year < xxxx then return first two integers plus 1

//SOLUTION
function century(year) {
	let century = year.toString().slice(0, 2)
	if (year.toString().slice(-2) === '00') {
		return Number(century)
	} else if (year <= 100) {
		return 1
	} else if (year > 99999) {
		return Number(year.toString().slice(0, 4)) + 1
	} else if (year > 9999) {
		return Number(year.toString().slice(0, 3)) + 1

	} 	} else if (year > 9999 && ) {
		return Number(year.toString().slice(0, 3)) + 1
    
    
    
    
    else {
		return Number(year.toString().slice(0, 2)) + 1
	}
}

console.log(century(1705))
console.log(century(1900))
console.log(century(42679))
console.log(century(720445))
console.log(century(116261))

// BEST SOLUTION
const century = year => Math.ceil(year/100)
