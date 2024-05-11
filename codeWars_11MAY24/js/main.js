//codeWars 11MAY24

//TASK
// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

//PSEUDOCODE
// receive classPoints in array form
// add yourPoints to classPoints using .push
// let average = classPoints.reduce() / classPoints.length
// conditional, if yourPoints > average, return true, else if return false

//SOLUTION
function betterThanAverage(classPoints, yourPoints) {
	classPoints.push[yourPoints]
	let average =
		classPoints.reduce((acc, currVal) => acc + currVal, 0) /
		classPoints.length
	if (yourPoints > average) {
		return true
	} else {
		return false
	}
}

// BEST SOLUTION
// function betterThanAverage(classPoints, yourPoints) {
//     return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
//   }

//NEW TASK

//TASK
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

//PSEUDOCODE
// if operation = +, return value1 + value 2
// do for all operations

//SOLUTION
function basicOp(operation, value1, value2) {
	if (operation === '+') {
		return value1 + value2
	} else if (operation === '-') {
		return value1 - value2
	} else if (operation === '*') {
		return value1 * value2
	} else if (operation === '/') {
		return value1 / value2
	}
}

// BEST SOLUTION
