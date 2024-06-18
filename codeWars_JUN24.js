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
// function longest(s1, s2) {
// 	let ans = (s1 + s2).split('').sort()
// 	let finArr = []
// 	for (let i = 0; i < ans.length; i++) {
// 		if (ans[i] !== ans[i + 1] && !finArr.includes(ans[i])) {
// 			finArr.push(ans[i])
// 		}
// 	}
// 	return finArr.join('')
// }

// console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'))

// BEST SOLUTION
// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')

///////////////////////////////codeWars 07JUN24///////////////////////////////

//TASK
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//PSEUDOCODE
// get word, split into array using .split('')
// use forEach loop and indexOf to get any values with duplicates
// if duplicate, then change element to ), else change value to (
// join array together and return

//SOLUTION
// function duplicateEncode(word) {
// 	let arr = word.split('')
// 	let newArr = []
// 	console.log(arr) // word turned into array
// 	for (let i = 0; i < arr.length; i++) {
//         if (arr.has(arr[i]))
//     }
// }

// duplicateEncode('recede')

// BEST SOLUTION
// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
//   }

///////////////////////////////codeWars 08JUN24///////////////////////////////

//TASK
// Implement the function unique_in_order which takes as argument a sequence and returns a list of
//items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//PSEUDOCODE
// keep original array or string, do not edit
// if typeof iterable === 'string', iterable.split('')
// for loop with conditional
// newarr.push[index[i]]
// if index[i] === index [i+1], i++
// else newarr.push(index[i])

//SOLUTION
// var uniqueInOrder = function (iterable) {
// 	let startArr = []
// 	let newArr = []
// 	if (typeof iterable === 'string') {
// 		startArr = iterable.split('')
// 	} else {
// 		startArr = iterable
// 	}
// 	for (let i = 0; i < startArr.length; i++) {
// 		if (startArr[i] !== startArr[i + 1]) {
// 			newArr.push(startArr[i])
// 		}
// 	}
// 	return newArr
// }

// console.log(uniqueInOrder([1, 2, 2, 3, 3]))

// BEST SOLUTION
// var uniqueInOrder = function (iterable) {
// 	return [...iterable].filter((a, i) => a !== iterable[i - 1])
// }

//TASK
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//PSEUDOCODE

//SOLUTION
// let check = (a, x) => (a.includes(x) ? true : false)

// BEST SOLUTION
// const check = (a,x) => a.includes(x);

//TASK
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//PSEUDOCODE

//SOLUTION
// function findShort(s) {
// 	let arr = s.split(' ')
// 	arr = arr.sort((a, b) => a.length - b.length)
// 	console.log(arr)
// 	return arr[0].length
// }

// console.log(findShort('the eggs are being cooked on the grill'))

// BEST SOLUTION

///////////////////////////////codeWars 11JUN2024///////////////////////////////

//TASK
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//PSEUDOCODE
// get array input
// loop through array, replace array[i] with 1: array[i]
// return array

//SOLUTION
// var number = function (array) {
// 	let newArr = []
// 	for (let i = 0; i < array.length; i++) {
// 		newArr[i] = `${i + 1}: ${array[i]}`
// 	}
// 	return newArr
// }

// console.log(number(['a', 'b', 'c']))
// console.log(number([]))

// BEST SOLUTION
// let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)

///////////////////////////////cassidoo Interview Question of the Week 10JUN24///////////////////////////////

//TASK
//Write a function that takes an array of integers and a target sum, and returns all unique quadruplets [a, b, c, d] in the array such that a + b + c + d = target.
//If it's impossible, return an empty array.

// Example:

// > fourSum([1, 0, -1, 0, -2, 2], 0)
// > [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]

// > fourSum([], 0)
// > []

// > fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11)
// > [[-5, -4, -3, 1]]

//PSEUDOCODE
// get array of numbers and target sum
// conditional statements

//SOLUTION

///////////////////////////////codeWars 12JUN24///////////////////////////////

//TASK
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//PSEUDOCODE
// loop through string
// conditional using unicode characters (65 - 90 is uppercase unicode), if charCodeAt is 65-90, then its uppercase
// if uppercase, then substr is 0 through i, then substr is i+1 through full .length-1

//SOLUTION
// function solution(string) {
// 	for (let i = 0; i < string.length; i++) {
// 		arr = string.split('')
// 		if (arr[i] === arr[i].toUpperCase) {
// 			arr[i] = ' ' + arr[i]
// 		}
// 	}
// 	return arr.join('')
// }

// function solution(string) {
// 	string = string.split('').map(function (el) {
// 		if (el === el.toUpperCase()) {
// 			el = ' ' + el
// 		}
// 		return el
// 	})
// 	return string.join('')
// }

// console.log(solution('camelCasing'))

// BEST SOLUTION

///////////////////////////////codeWars 13JUN2024///////////////////////////////

//TASK
// Code as fast as you can! You need to double the integer and return it.

//PSEUDOCODE

//SOLUTION
// function doubleInteger(i) {
//     return i*2;
//   }

// BEST SOLUTION

//TASK
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//PSEUDOCODE
// get array
// if first element matches with second element, do not add to new array
// if first element does not match with second element, and new array does not have second element, add to new array
// if first element is not in new array, add to new array

//SOLUTION
// function stray(numbers) {
// 	for (let i = 0; i < numbers.length; i++) {
// 		if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
// 			return numbers[i]
// 		}
// 	}
// }

// console.log(stray([17, 17, 3, 17, 17, 17, 17, 17]))

// BEST SOLUTION
// function stray(numbers) {
// 	for (var i in numbers) {
// 		if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
// 			return numbers[i]
// 		}
// 	}
// }

///////////////////////////////codeWars 15JUN2024///////////////////////////////

//TASK
// Write function bmi that calculates body mass index (bmi = weight / (height*height)).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//PSEUDOCODE
// get weight and height inputs
// let bmi = weight * height
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
// use switch case

//SOLUTION
// function bmi(weight, height) {
// 	let bmi = weight / (height * height)
// 	switch (true) {
// 		case bmi <= 18.5:
// 			return 'Underweight'
// 			break
// 		case bmi <= 25.0:
// 			return 'Normal'
// 			break
// 		case bmi <= 30.0:
// 			return 'Overweight'
// 			break
// 		case bmi > 30:
// 			return 'Obese'
// 			break
// 	}
// }

// console.log(bmi(80, 1.8))

// BEST SOLUTION

///////////////////////////////codeWars 17JUN2024///////////////////////////////

//TASK
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//PSEUDOCODE

//SOLUTION
// const countSheep = function (num) {
// 	let string = ''
// 	if (num === 0) {
// 		return ''
// 	} else {
// 		for (let i = 1; i <= num; i++) {
// 			string += `${i} sheep...`
// 		}
// 		return string
// 	}
// }

// console.log(countSheep(4))

// BEST SOLUTION

///////////////////////////////cassidoo Interview Question of the Week June 17th, 2024///////////////////////////////

//TASK
// Last week, I had you find a sum of four numbers in an array. Awesome job Muhammad, Sean, Amine, Ricardo, Nikhil, Ten, John, and Vyaas!

// This week's question:
// Write a function that takes a list of names and returns the names sorted by the number of vowels in each name in descending order. If two names have the same number of vowels, sort them alphabetically.

// Example:

// > sortNames(["Goku", "Vegeta", "Piccolo", "Gohan"])
// > ["Piccolo", "Vegeta", "Gohan", "Goku"]

// > sortNames(["Edward", "Alphonse", "Roy", "Winry"])
// > ["Alphonse", "Edward", "Winry", "Roy"]

//PSEUDOCODE
// get array
// create function to count number of vowels in the word
// push array elements to new array paired with number of vowels per word
// sort based on vowels, then based on alphabetical order

//SOLUTION
// let names = ['Goku', 'Vegeta', 'Piccolo', 'Gohan']
// const newArr = names.map(elem => elem.toLowerCase())
// console.log(newArr)

// const numVowels = arr => {
// 	let vowelCount
// 	let vowelCountArr = []
// 	arr.forEach(string => {
// 		for (let i = 0; i < string.length; i++) {
// 			if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
// 				vowelCount++
// 				vowelCountArr.push([arr[i], vowelCount])
// 			}
// 		}
// 		return vowelCountArr
// 	})
// }

// console.log(numVowels(newArr))

// BEST SOLUTION

///////////////////////////////codeWars 18JUN2024///////////////////////////////

//TASK
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

//PSEUDOCODE
// get name from function parameter
// use template literal, change to arrow function

//SOLUTION
// const greet = name => `Hello, ${name} how are you doing today?`

// BEST SOLUTION

//TASK
// You were camping with your friends far away from home, but when it's time to go back,
// you realize that your fuel is running out and the nearest pump is 50 miles away!
// You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

//PSEUDOCODE

//SOLUTION
const zeroFuel = (distanceToPump, mpg, fuelLeft) => (distanceToPump <= mpg * fuelLeft ? true : false)

// BEST SOLUTION
