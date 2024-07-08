///////////////////////////////codeWars 01JUL2024///////////////////////////////

//TASK
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons!
// each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry..
// Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

//PSEUDOCODE

//SOLUTION
// let hero = (bullets, dragons) => (bullets / 2 >= dragons ? true : false)

// console.log(hero(10, 5))

// BEST SOLUTION

///////////////////////////////codeWars 02JUL2024///////////////////////////////

//TASK
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//PSEUDOCODE
// receive string from argument
// create variable for counting x's and o's
// make string lower case, split into array, loop through and iterate x and o variables as needed
// if variable x and o are equal, return true, else return false

//SOLUTION
// function XO(str) {
// 	let xCount = 0
// 	let oCount = 0
// 	let strArr = str.toLowerCase().split('')
// 	console.log(strArr)
// 	for (let i = 0; i < strArr.length; i++) {
// 		if (strArr[i] === 'x') {
// 			xCount++
// 		} else if (strArr[i] === 'o') {
// 			oCount++
// 		}
// 	}
// 	if (xCount === oCount) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// console.log(XO('ooxx'))

// BEST SOLUTION
// function XO(str) {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }

///////////////////////////////codeWars 03JUL2024///////////////////////////////

//TASK
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

//PSEUDOCODE

//SOLUTION
// let hoopCount = n => (n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it')

// BEST SOLUTION

///////////////////////////////codeWars 04JUL2024///////////////////////////////

//TASK
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0

//PSEUDOCODE

//SOLUTION
// function finalGrade(exam, projects) {
// 	if (exam > 90 || projects > 10) {
// 		return 100
// 	} else if (exam > 75 && projects >= 5) {
// 		return 90
// 	} else if (exam > 50 && projects >= 2) {
// 		return 75
// 	} else {
// 		return 0
// 	}
// }
// BEST SOLUTION
// function finalGrade (exam, projects) {
//     if(exam > 90 || projects > 10) return 100;
//     if(exam > 75 & projects >= 5) return 90;
//     if(exam > 50 & projects >= 2) return 75;
//     return 0;
//   }

///////////////////////////////codeWars 05JUL2024///////////////////////////////

//TASK
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

//PSEUDOCODE

//SOLUTION
// let litres = time => Math.floor(0.5 * time)

// BEST SOLUTION

//TASK
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

//PSEUDOCODE

//SOLUTION
// function rowSumOddNumbers(n) {
// 	let arr = [[1], [3, 5], [7, 9, 11], [13, 15, 17, 19], [21, 23, 25, 27, 29]]
// 	let finalSum = arr[n - 1].reduce((acc, curr) => acc + curr, 0)
// 	return finalSum
// }

// console.log(rowSumOddNumbers(1))

// // BEST SOLUTION
// function rowSumOddNumbers(n) {
// 	return Math.pow(n, 3)
// }

//TASK
// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

//PSEUDOCODE

//SOLUTION
// Return an array
// function fizzbuzz(n) {
// 	let arr = []
// 	for (let i = 1; i <= n; i++) {
// 		if (i % 3 === 0 && i % 5 === 0) {
// 			arr.push('FizzBuzz')
// 		} else if (i % 3 === 0) {
// 			arr.push('Fizz')
// 		} else if (i % 5 === 0) {
// 			arr.push('Buzz')
// 		} else {
// 			arr.push(i)
// 		}
// 	}
// 	return arr
// }

// fizzbuzz(30)

// BEST SOLUTION

//TASK
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

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

//SOLUTION
// Sum Numbers
// function sum(numbers) {
// 	if (numbers === undefined) {
// 		return 0
// 	} else {
// 		return numbers.reduce((acc, currVal) => acc + currVal, 0)
// 	}
// }

// let sum = numbers => (numbers === undefined ? 0 : numbers.reduce((acc, currVal) => acc + currVal, 0))

// console.log(sum([]))

// BEST SOLUTION
// function sum(numbers) {
// 	return numbers.reduce((a, b) => a + b, 0)
// }

///////////////////////////////codeWars 06JUL2024///////////////////////////////

//TASK
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//PSEUDOCODE
// nested for loop, iterate through each word (put into array), and check indexOf iterating through i which will look for word with 0, 1, 2, 3, 4, and push them in order
// join array and return string

//SOLUTION

// function order(words) {
// 	let arr = words.split(' ')
// 	let sortArr = []
// 	console.log(arr)
// 	console.log(arr[0].indexOf(2))
// 	for (let i = 0; i <= arr.length; i++) {
// 		for (let j = 0; j < arr.length; j++) {
// 			if (arr[j].indexOf(i) >= 0) {
// 				sortArr.push(arr[j])
// 			}
// 		}
// 	}
// 	console.log(sortArr)
// 	return sortArr.join(' ')
// }

// function order(words) {
// 	let arr = words.split(' ')
// 	let sortArr = []
// 	console.log(arr)
// 	console.log(arr[3])
// 	console.log(arr[1].indexOf(0))

// 	for (let i = 0; i <= arr.length; i++) {
// 		for (let j = 0; j < arr.length; j++) {
// 			if (arr[j].indexOf(i) >= 0) {
// 				sortArr.push(arr[j])
// 			}
// 		}
// 	}
// 	console.log(sortArr)
// 	return sortArr.join(' ')
// }

// console.log(order('is2 Thi1s T4est 3a'))

// BEST SOLUTION

///////////////////////////////codeWars 08JUL2024///////////////////////////////

//TASK
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

//PSEUDOCODE

//SOLUTION
let move = (position, roll) => position + roll * 2

// BEST SOLUTION
