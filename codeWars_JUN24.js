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

///////////////////////////////cassidoo Interview Question of the Week 03JUN24///////////////////////////////

//TASK
// Write a function that takes an array of integers and returns a new array containing only the even numbers, and sorted.

//PSEUDOCODE
// get array of numbers
// create new arr
// use .filter to select only even values using % 2 === 0
// use .sort to sort array values
// return sorted arr

//SOLUTION
// function onlyEvens(arr) {
// 	let ans = arr.filter(elem => elem % 2 === 0)
// 	return (ans = ans.sort((a, b) => a - b))
// }

// console.log(onlyEvens([1, 2, 3, 4, 5, 2]))
// console.log(onlyEvens([7, 8, 1, 0, 2, 5]))
// console.log(onlyEvens([11, 13, 15]))

///////////////////////////////codeWars 04JUN24///////////////////////////////

//TASK
// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

//PSEUDOCODE
// get name
// return `Hello ${name}`, using template literal

//SOLUTION
// function sayHello(name) {
// 	return `Hello, ${name}`
// }

// BEST SOLUTION

//TASK
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits
// that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//PSEUDOCODE
// get text as input
// break up string into array
// create for loops to run through all characters
// main for loop with compare all characters against the first character, if matches then iterate variable
// secondary for loop in main will check the next letter

//SOLUTION
// function duplicateCount(text) {
// 	let arr = text.split('')
// 	for (let i = 1; i < arr.length; i++) {
// 		let first = 0
// 		if (arr[first] === arr[i]) {
// 			first += 1
// 		} else {
// 			first = first
// 		}
// 		return first
// 	}
// }

// function duplicateCount(text) {
// 	let arr = text.toLowerCase().split('').sort()
// 	let duplArr = []

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === arr[i + 1] && !duplArr.includes(arr[i])) {
// 			duplArr.push(arr[i])
// 		}
// 	}
// 	return duplArr.length
// }

// console.log(duplicateCount('Indivisibilities'))
// BEST SOLUTION

///////////////////////////////codeWars 05JUN24///////////////////////////////

//TASK
// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

//PSEUDOCODE
// set starting value of people on the bus as 0
// loop through each pair of array values, adding the first element and subtracting the second element
// simplify all array pairs by reducing to one number, then add all of those

//SOLUTION
// const number = function (busStops) {
// 	let numPassengers = 0
// 	for (let i = 0; i < busStops.length; i++) {
// 		numPassengers = numPassengers + (busStops[i][0] - busStops[i][1])
// 	}
// 	return numPassengers
// }

// console.log(
// 	number([
// 		[3, 0],
// 		[9, 1],
// 		[4, 10],
// 		[12, 2],
// 		[6, 1],
// 		[7, 10],
// 	])
// )

// BEST SOLUTION
// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

///////////////////////////////codeWars 06JUN24///////////////////////////////

//TASK
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//PSEUDOCODE
// take s1 and s2
// combine both strings into single array
// sort array
// remove duplicates
// return

//SOLUTION
function longest(s1, s2) {
	let ans = (s1 + s2).split('').sort()
	let finArr = []
	for (let i = 0; i < ans.length; i++) {
		if (ans[i] !== ans[i + 1] && !finArr.includes(ans[i])) {
			finArr.push(ans[i])
		}
	}
	return finArr.join('')
}

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'))

// BEST SOLUTION
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')
