///////////////////////////////codeWars 01MAY24///////////////////////////////

//TASK
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

//PSEUDOCODE
// get input of str
// use splice() method
// return and console.log result

//SOLUTION
// let ans
// function removeChar(str){
//     ans = str.slice(1)
//     ans = ans.slice(0, ans.length - 1)
//     console.log(ans)
//     return ans
// }

// removeChar('railgunners')

// BEST SOLUTION
// function removeChar(str) {
//     return str.slice(1, -1);
// }

///////////////////////////////codeWars 02MAY24///////////////////////////////

//TASK
//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input,
// and return the largest and lowest number in that list, respectively.
//
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

//PSEUDOCODE
// get input of an array of numbers
// use Math.min / Math.max on array and assign to variable
// may have to use (...arr) in syntax of Math methods

//SOLUTION
// let min = function(list){
//     return Math.min(...list)
// }

// let max = function(list){
//     return Math.max(...list)
// }

// BEST SOLUTION
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

///////////////////////////////codeWars 03MAY24///////////////////////////////

//TASK
//Given a non-empty array of integers, return the result of multiplying the values together in order.
// Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//PSEUDOCODE
// get array as input
// let sum
// iterate through array and continually reassign sum variable
// return answer
//console log outside of the function for the call

//SOLUTION

// function grow(x){
//     let sum = x[0]
//     for (let i = 1; i < x.length; i++){
//         sum *= x[i]
//     }
//     return sum
// }

// console.log( grow ( [1, 2, 3, 4] ) )

// BEST SOLUTION
// const grow=x=> x.reduce((a,b) => a*b);

///////////////////////////////codeWars 04MAY24///////////////////////////////

//TASK
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
//
// Example(Input1, Input2 --> Output):
//
// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

//PSEUDOCODE
// get input from function call
// compare input 1 and input 2
// conditional. if input 1 === input 2, then calculate area (input 1 * input 2) and set to variable
// else if input 1 !== input 2, calculate perimeter ( (input 1 * 2) + (input 2 * 2) ) and set to variable
// return values

//SOLUTION
// Normal Function
// const areaOrPerimeter = function(l , w) {
//     if (l === w){
//         let area = l * w
//         console.log(area)
//         return area
//     }else if (l !== w){
//         let perimeter = (l * 2) + (w * 2)
//         console.log(perimeter)
//         return perimeter
//     }
// }

//Arrow Function
// const areaOrPerimeter = (l , w) => {
//     if (l === w){
//         let area = l * w
//         console.log(area)
//         return area
//     }else if (l !== w){
//         let perimeter = (l * 2) + (w * 2)
//         console.log(perimeter)
//         return perimeter
//     }
// }

// areaOrPerimeter (6, 10)
// areaOrPerimeter (3, 3)

// BEST SOLUTION
//const areaOrPerimeter = (l , w) => l === w ? l*w : 2*(l+w);

///////////////////////////////codeWars 05MAY24///////////////////////////////

//TASK
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
// For example, for [1, 2, 2] it should return 9

//PSEUDOCODE
// take in array values
// set starting value for "current value"
// use reduce (acc, currValue) where currValue starts at 0 (since we add in the end, 0 won't negatively affect anything)
// then acc should be squared first, so (acc * acc), then added to currValue, so (acc * acc) + currValue
// reduce runs for each element in the array
// return answer, use big arrow syntax, one line

//SOLUTION
// function squareSum (numbers){
//     return ( numbers.reduce( (acc, currValue) => (acc) + (currValue * currValue), 0) )

// }

// let ans = squareSum( [1, 2, 2] )
// console.log(ans)

// BEST SOLUTION

///////////////////////////////codeWars 06MAY24///////////////////////////////

//TASK
// Given an array of integers your solution should find the smallest integer.
//
// For example:
//
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//PSEUDOCODE
// get array from argument
// use Math.min on the array, use spread operator to unpack each array item and analyze
// return value

//SOLUTION
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min(...args)
//     }
// }

// BEST SOLUTION

//codeWars 06MAY24

//TASK
// Write a function which converts the input string to uppercase.

//PSEUDOCODE
// get input and use .toUpperCase and return

//SOLUTION
// function makeUpperCase(str) {
//     return str.toUpperCase()
// }

// console.log(makeUpperCase('let\'s go to the mall'))

// BEST SOLUTION

///////////////////////////////codeWars 07MAY24///////////////////////////////

//TASK
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

//PSEUDOCODE
// get argument as name
// make string to lowercase, check for "r" using .charAt(0) and return
// if conditional, if contains "r" then return plays bajo
// if else, return does not play banjo

//SOLUTION
// function areYouPlayingBanjo(name) {
//     if ( (name.charAt(0)) === 'r'  || name.charAt(0) === 'R'){
//         return (name + ' plays banjo')
//     }else {
//         return (name + ' does not play banjo')
//   }
// }

// BEST SOLUTION
// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
//   }

///////////////////////////////codeWars 08MAY24///////////////////////////////

//TASK
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

//PSEUDOCODE
// get inputs of n and m
// check if n < 0 || m < 0 then return 0
// else return n * m

//SOLUTION
// function paperwork(n, m) {
// 	if (n < 0 || m < 0) {
// 		return 0
// 	} else return n * m
// }

// BEST SOLUTION
// function paperwork(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
//   }

///////////////////////////////codeWars 09MAY24///////////////////////////////

//TASK
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//PSEUDOCODE
// get input of array
// get length of array
// sum all array elements using reduce function
// divide reduced array by length
// return value

//SOLUTION
// function findAverage(array) {
//     if (array.length === 0){
//         return 0
//     }else {
//         return (array.reduce((acc, currValue) => acc + currValue, 0)) / array.length
//     }
//   }

// BEST SOLUTION

///////////////////////////////codeWars 10MAY24///////////////////////////////

//TASK
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//PSEUDOCODE
// get number input
// if number < 0, return number.
// if number > 0, Use Math.abs and multiply by -1
// if number = 0, return 0

//SOLUTION
// function makeNegative(num) {
// 	if (num === 0) {
// 		return 0
// 	} else if (num < 0) {
// 		return num
// 	} else return Math.abs(num) * -1
// }

// BEST SOLUTION
// function makeNegative(num) {
//     return -Math.abs(num);
// }

///////////////////////////////codeWars 11MAY24///////////////////////////////

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
// function betterThanAverage(classPoints, yourPoints) {
// 	classPoints.push[yourPoints]
// 	let average =
// 		classPoints.reduce((acc, currVal) => acc + currVal, 0) /
// 		classPoints.length
// 	if (yourPoints > average) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

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
// function basicOp(operation, value1, value2) {
// 	if (operation === '+') {
// 		return value1 + value2
// 	} else if (operation === '-') {
// 		return value1 - value2
// 	} else if (operation === '*') {
// 		return value1 * value2
// 	} else if (operation === '/') {
// 		return value1 / value2
// 	}
// }

// BEST SOLUTION

///////////////////////////////codeWars 12MAY24///////////////////////////////
//TASK
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//PSEUDOCODE
// get function
// need to concatenate and multiply the concatenation by n, return this answer

//SOLUTION

// function repeatStr(n, s) {
// 	let array = []
// 	for (let i = 0; i < n; i++) {
// 		array.push(s)
// 	}
// 	return array.join('')
// }

// repeatStr(5, 'i')

// BEST SOLUTION
// function repeatStr (n, s) {
//     return s.repeat(n);
//   }

//codeWars 12MAY24

//TASK
//Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//PSEUDOCODE
// if conditional for each use case, return string

//SOLUTION
// const rps = (p1, p2) => {
// 	if (p1 === 'scissors' && p2 === 'paper') {
// 		return 'Player 1 won!'
// 	} else if (p1 === 'scissors' && p2 === 'rock') {
// 		return 'Player 2 won!'
// 	} else if (p1 === p2) {
// 		return 'Draw!'
// 	} else if (p1 === 'rock' && p2 === 'scissors') {
// 		return 'Player 1 won!'
// 	} else if (p1 === 'rock' && p2 === 'paper') {
// 		return 'Player 2 won!'
// 	} else if (p1 === 'paper' && p2 === 'scissors') {
// 		return 'Player 2 won!'
// 	} else if (p1 === 'paper' && p2 === 'rock') {
// 		return 'Player 1 won!'
// 	}
// }

//BEST SOLUTION

///////////////////////////////codeWars 13MAY24///////////////////////////////
//TASK
//You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//PSEUDOCODE
// iterate through each array using for loop or for.each loop or REDUCE()?
// check to see if number is positive ( n > 0)
// if positive, accumlator/currVAl
// return answer
// else nothing to sum, return 0

//SOLUTION

// function positiveSum(arr) {
// 	let posSum = 0
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 0) {
// 			posSum = posSum + arr[i]
// 		} else if (arr[i] < 0) {
// 			posSum = posSum
// 		}
// 	}
// 	return posSum
// }

// positiveSum([1, -4, 7, 12])

//BEST SOLUTION
///////////////////////////////codeWars 14MAY24///////////////////////////////
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
// function century(year) {
// 	let century = year.toString().slice(0, 2)
// 	if (year.toString().slice(-2) === '00') {
// 		return Number(century)
// 	} else if (year <= 100) {
// 		return 1
// 	} else if (year > 99999) {
// 		return Number(year.toString().slice(0, 4)) + 1
// 	} else if (year > 9999) {
// 		return Number(year.toString().slice(0, 3)) + 1

// 	} 	} else if (year > 9999 && ) {
// 		return Number(year.toString().slice(0, 3)) + 1

//     else {
// 		return Number(year.toString().slice(0, 2)) + 1
// 	}
// }

// console.log(century(1705))
// console.log(century(1900))
// console.log(century(42679))
// console.log(century(720445))
// console.log(century(116261))

// // BEST SOLUTION
// const century = year => Math.ceil(year/100)

///////////////////////////////codeWars 15MAY24///////////////////////////////
//TASK
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//PSEUDOCODE
// get array, set arr.filter() to new variable
// return new array

//SOLUTION
// function filter_list(l) => return l.filter(Number)

// function filter_list(l) {
// 	return l.filter(Number.isInteger)
// }

// console.log(filter_list([1, 2, 'a', 'b']))
// console.log(filter_list([1, 'a', 'b', 0, 15]))

// // BEST SOLUTION

// //DELETE
// function coinFlip() {
// 	if (Math.random() < 0.5) {
// 		return 'heads'
// 	} else return 'tails'
// }
// console.log(coinFlip())

// let coin = _ => (Math.random() < 0.5 ? 'heads' : 'tails')
// console.log(coin())

///////////////////////////////codeWars 16MAY24///////////////////////////////
//TASK
// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

//PSEUDOCODE
// get array
// use reduce(acc, currVal => function, startVal)

//SOLUTION
// Sum Numbers
// function sum(numbers) {
// 	return numbers.reduce((acc, currVal) => acc + currVal, 0)
// }

// console.log(sum([1, 5.2, 4, 0, -1]))

// BEST SOLUTION

///////////////////////////////codeWars 17MAY24///////////////////////////////
//TASK
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//PSEUDOCODE
// get boolean value, true or false, then return yes or no with conditional

//SOLUTION
// function boolToWord(bool) {
// 	if (bool === true) {
// 		return 'Yes'
// 	} else if (bool === false) {
// 		return 'no'
// 	}
// }

// BEST SOLUTION
// let boolToWord = bool => bool ? 'Yes' : 'No';

///////////////////////////////codeWars 18MAY24///////////////////////////////

//TASK
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
// Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter,
// he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Link to Jaden's former Twitter account @officialjaden via archive.org

//PSEUDOCODE
// get input string
// separate input string into array elements by word using .split(' ')
// loop through array and capitalize the first letter, which is array index [0] using .toUpperCase
// concatenate capitalized letter with the rest of the array element using .substr
// join array back into string using join(' ')
// console.log and check

//SOLUTION
// String.prototype.toJadenCase = function () {
// 	return this.split(' ')
// 		.map(function (word) {
// 			return word.charAt(0).toUpperCase() + word.slice(1)
// 		})
// 		.join(' ')
// }

//BEST SOLUTION

///////////////////////////////codeWars 19MAY24///////////////////////////////

//TASK
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//PSEUDOCODE
// get array, arr.sort((a,b) => a-b), this will make the index [0] and index [1] the lowest two integers
// return index [0] + index [1]

//SOLUTION
// function sumTwoSmallestNumbers(numbers) {
// 	let sortArr = numbers.sort((a, b) => a - b)
// 	return sortArr[0] + sortArr[1]
// }

// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))
// console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))

// BEST SOLUTION
