//codeWars 24APR24

//TASK
//Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

//PSEUDOCODE
// get input time
// convert input time into milliseconds
// hours milliseconds + minutes to milliseconds + seconds to milliseconds
// subtract input time from 0, representing midnight
// convert to positive number since the number would be negative
// return answer

//SOLUTION
// let ans
//
// function past(h, m, s){
//     ans = ( (h * 3600) + (m * 60) + (s) ) * 1000
//     console.log(ans)
//     return ( (h * 3600) + (m * 60) + (s) ) * 1000
// }
//
// past(1,1,1)

//codeWars 25APR24

//TASK
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!

//PSEUDOCODE

//SOLUTION
smash = function (words) {
	return words.join(' ')
}

//codeWars 24APR24

//TASK
//Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

//PSEUDOCODE
// get input time
// convert input time into milliseconds
// hours milliseconds + minutes to milliseconds + seconds to milliseconds
// subtract input time from 0, representing midnight
// convert to positive number since the number would be negative
// return answer

//SOLUTION
// let ans
//
// function past(h, m, s){
//     ans = ( (h * 3600) + (m * 60) + (s) ) * 1000
//     console.log(ans)
//     return ( (h * 3600) + (m * 60) + (s) ) * 1000
// }
//
// past(1,1,1)

//codeWars 25APR24

//TASK
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!

//PSEUDOCODE

//SOLUTION
smash = function (words) {
	return words.join(' ')
}

//codeWars 26APR24

//TASK
//Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

//PSEUDOCODE

//SOLUTION
function countSheeps(sheep) {
	// let ans = sheep.length
	// console.log(ans)
	// return ans
	let count = 0
	for (let i = 0; i < sheep.length; i++) {
		if (sheep[i] === true || sheep[i] >= 1) {
			// if ( sheep[i] === true, 1) {
			count++
		} else if (
			countSheeps[i] === undefined ||
			countSheeps[i] === null ||
			countSheeps[i] === false
		) {
			// } else if (countSheeps[i] === undefined, null, false){
			count = count
		}
	}
	console.log(count)
	return count
}

let sheep = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
]

countSheeps(sheep)

// BEST SOLUTION
// function countSheeps(sheep) {
//     return sheep.filter(Boolean).length;
// }

//codeWars 27APR24

//TASK
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
//
//     Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

//PSEUDOCODE
// get inputs of three scores
// average scores
// if conditional to check against grades
// return letter according to conditional

//SOLUTION
function getGrade(s1, s2, s3) {
	let avg = (s1 + s2 + s3) / 3
	if (avg >= 90 && avg <= 100) {
		console.log('A')
		return 'A'
	} else if (avg >= 80 && avg <= 90) {
		console.log('B')
		return 'B'
	} else if (avg >= 70 && avg <= 80) {
		console.log('C')
		return 'C'
	} else if (avg >= 60 && avg <= 70) {
		console.log('D')
		return 'D'
	} else if (avg < 60 && avg >= 0) {
		console.log('F')
		return 'F'
	}
}

getGrade(100, 100, 100)

// BEST SOLUTION

//codeWars 29APR24

//TASK
// We need a function that can transform a number (integer) into a string.
//
//     What ways of achieving this do you know?
//
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

//PSEUDOCODE
// receive inputted number from function
// use to.String method on input to create string
// return string
// console.log function (which will give the value because of the return)

//SOLUTION
// function numberToString(num) {
//     let ans = num.toString()
//     console.log(ans)
//     return ans
// }
//
// numberToString(123)

// BEST SOLUTION
function numberToString(num) {
	return num.toString()
}

//codeWars 30APR24

//TASK
//After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
//
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//
// Write a code that gives out the total amount for different days(d).

//PSEUDOCODE
// get input of how many days you are renting the car
// conditional statement if
// if renting days >= 7 then 40 * days - 50
// else if renting days >= 3 AND < 7 then 40 * days - 20
// return
// console log answer

//SOLUTION
let price

function rentalCarCost(d) {
	if (d >= 7) {
		price = d * 40 - 50
	} else if (d >= 3 && d < 7) {
		price = d * 40 - 20
	} else if (d >= 0 && d < 3) {
		price = d * 40
	} else {
		alert('Please input proper amount of days')
	}
	console.log(price)
	return price
}

rentalCarCost(7)

// BEST SOLUTION
