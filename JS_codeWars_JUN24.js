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
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => (distanceToPump <= mpg * fuelLeft ? true : false)

// BEST SOLUTION

///////////////////////////////codeWars 19JUN2024///////////////////////////////

//TASK
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

//PSEUDOCODE
// function getAge(inputString) {
// 	return Number(inputString[0])
// }

//SOLUTION

// BEST SOLUTION

///////////////////////////////codeWars 20JUN2024///////////////////////////////

//TASK
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//PSEUDOCODE
// get array input
// .split on string to break into array
// reverse on array
// join

//SOLUTION
// function reverseWords(str) {
// 	str = str.split(' ')
// 	console.log(str)
// 	let str2 = str.map(x => x.split('').reverse())
// 	console.log(str2)
// 	let str3 = str2.map(x => x.join(''))
// 	console.log(str3)
// 	return str3.join(' ')
// }

// console.log(reverseWords('This is an example!'))

// BEST SOLUTION

///////////////////////////////codeWars 21JUN2024///////////////////////////////

//TASK
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//PSEUDOCODE
// function will take in 'pin' as a parameter
// pin will go through a conditional. if pin.length is === 4 OR 6 AND is a number, then return true
// else, return false

//SOLUTION
// function checkIfDigit(num) {
// 	return num >= '0' && num <= '9'
// }

// function validatePIN(pin) {
// 	if ((pin.toString().length === 4 || pin.toString().length === 6) && pin.split('').every(checkIfDigit) === true) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// console.log(validatePIN('4251'))

// BEST SOLUTION

///////////////////////////////codeWars 22JUN2024///////////////////////////////

//TASK
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//PSEUDOCODE

//SOLUTION
// function correct(string) {
// 	string = string.split('')
// 	console.log(string)
// 	console.log(string.length)
// 	for (let i = 0; i < string.length; i++) {
// 		if (string[i] === '5') {
// 			string[i] = 'S'
// 		} else if (string[i] === '0') {
// 			string[i] = 'O'
// 		} else if (string[i] === '1') {
// 			string[i] = 'I'
// 		}
// 	}
// 	return string.join('')
// }

// console.log(correct('L0ND0N'))

// BEST SOLUTION

///////////////////////////////codeWars 24JUN2024///////////////////////////////

//TASK
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

//PSEUDOCODE
// receive array with string
// seperate string into array with single words as each element
// seperate array of single words into multiple arrays of single letters
// create function to manipulate each element in this array, use conditional to check if the element is a letter (use toUpperCase() === toLowerCase())
// if element is a letter, we need to replace that letter with its position in the alphabet, use charcount

//SOLUTION
// function alphabetPosition(text) {
// 	let ansArray = []
// 	for (let i = 0; i < text.length; i++)
// 		if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
// 			ansArray.push(text.charCodeAt(i) - 64)
// 		} else if (text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123) {
// 			ansArray.push(text.charCodeAt(i) - 96)
// 		}
// 	return ansArray.join(' ')
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))

// BEST SOLUTION

///////////////////////////////codeWars 25JUN2024///////////////////////////////

//TASK
// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

//PSEUDOCODE

//SOLUTION
// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
// 	return laLigaGoals + copaDelReyGoals + championsLeagueGoals
// }

// BEST SOLUTION

///////////////////////////////codeWars 26JUN2024///////////////////////////////

//TASK
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

//PSEUDOCODE
// take in positive integer n
// for loop, using i and n to figure out the problem, n % i === 0
// add one to divisor count
// return divisor count

//SOLUTION

// BEST SOLUTION

//TASK
// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

// function getDivisorsCnt(n) {
// 	let divisorCount = 0
// 	for (let i = 1; i <= n; i++) {
// 		if (n % i === 0) {
// 			divisorCount++
// 		}
// 	}
// 	return divisorCount
// }

// console.log(getDivisorsCnt(500000))

// BEST SOLUTION

///////////////////////////////codeWars 27JUN2024///////////////////////////////

//TASK
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//PSEUDOCODE

//SOLUTION
// function noSpace(x){
// 	return x.replaceAll(' ', '')
// }

// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"))

// BEST SOLUTION
// function noSpace(x){
// 	return x.replaceAll(' ', '')
// function fakeBin(x) {
// 	let ans = []
// 	x.split('')
// 	for (let i = 0; i < x.length; i++) {
// 		if (Number(x[i]) < 5) {
// 			ans.push('0')
// 		} else if (Number(x[i]) >= 5) {
// 			ans.push('1')
// 		}
// 	}
// 	return ans.join('')
// }

// console.log(fakeBin('45385593107843568'))

// BEST SOLUTION
// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

///////////////////////////////codeWars 28JUN2024///////////////////////////////

//TASK
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//PSEUDOCODE

//SOLUTION
// function countPositivesSumNegatives(input) {
// 	let posCount = 0
// 	let negSum = 0
// 	let newArr = []
// 	if (input === null || input.length === 0) {
// 		return []
// 	} else {
// 		for (let i = 0; i < input.length; i++) {
// 			if (input[i] > 0) {
// 				posCount++
// 			} else if (input[i] < 0) {
// 				negSum += input[i]
// 			}
// 		}
// 	}
// 	newArr.push(posCount)
// 	newArr.push(negSum)
// 	return newArr
// }

// console.log(countPositivesSumNegatives[[0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]])

// BEST SOLUTION

///////////////////////////////codeWars 29JUN2024///////////////////////////////

//TASK
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// 1. "I love you"
// 2. "a little"
// 3. "a lot"
// 4. "passionately"
// 5. "madly"
// 6. "not at all"

// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

//PSEUDOCODE
// get number of petals from function argument
// if else for each petal - saying
// 1. "I love you" , 1, 7, 13, 19, 25
// 2. "a little", 2, 8, 14, 20
// 3. "a lot", 3, 9, 15, 21
// 4. "passionately", 4, 10, 16, 22
// 5. "madly", 5, 11, 17, 23
// 6. "not at all", 6, 12, 18, 24

//SOLUTION
// function howMuchILoveYou(nbPetals) {
// 	let sayings = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
// 	return sayings[(nbPetals - 1) % 6]
// }

// console.log(howMuchILoveYou(10))

// BEST SOLUTION
