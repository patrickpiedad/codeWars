///////////////////////////////codeWars 01JUN2024///////////////////////////////

//TASK
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//PSEUDOCODE
// Take in n as argument
// n.split('') to create array with all values
// n.sort(a,b => a-b)
// n.join('')
// return above

//SOLUTION
// function descendingOrder(n) {
// 	let nString = n.toString() // converts n to String in order to use .split
// 	nString = nString.split('') // places all elements of the string to array
// 	for (let i = 0; i < nString.length; i++) {
// 		nString[i] = Number(nString[i])
// 	} // iterates through string and makes them numbers again
// 	function compareNumbers(a, b) {
// 		return b - a
// 	} // creates sorting function to sort array elements from largest to smallest
// 	nString.sort(compareNumbers) // sorts nString using compareNumbers function
// 	return Number(nString.join('')) // joins array elements together
// }

// console.log(descendingOrder(42145))

// BEST SOLUTION
// function descendingOrder(n){
// 	return parseInt(String(n).split('').sort().reverse().join(''))
//   }

///////////////////////////////codeWars 02JUN24///////////////////////////////

//TASK
// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

//PSEUDOCODE
// get parameters
// conditional --> if employed === true && vacation === true, {return true}
// complete for the rest of the options

//SOLUTION
// function setAlarm(employed, vacation) {
// 	if (employed === true && vacation === true) {
// 		return false
// 	} else if (employed === true && vacation === false) {
// 		return true
// 	} else if (employed === false && vacation === true) {
// 		return false
// 	} else if (employed === false && vacation === false) {
// 		return false
// 	}
// }

// BEST SOLUTION

//TASK
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//PSEUDOCODE
// Get input s
// use s.replace('!', ''))

//SOLUTION
// function removeExclamationMarks(s) {
// 	return s.replaceAll('!', '')
// }

// console.log(removeExclamationMarks('that is amazing!'))
// BEST SOLUTION

///////////////////////////////codeWars 03JUN24///////////////////////////////

//TASK
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

//PSEUDOCODE

//SOLUTION
// const booleanToString = b => (b === true ? 'true' : 'false')

// BEST SOLUTION
