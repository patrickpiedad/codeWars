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
// let move = (position, roll) => position + roll * 2

// BEST SOLUTION

///////////////////////////////codeWars 09JUL2024///////////////////////////////

//TASK

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

//PSEUDOCODE
// loop through array
// if current element length is 4, then push to friendArr
// return friendArr

//SOLUTION
// function friend(friends) {
// 	let friendArr = []
// 	for (let i = 0; i < friends.length; i++) {
// 		if (friends[i].length === 4) {
// 			friendArr.push(friends[i])
// 		}
// 	}
// 	return friendArr
// }

// console.log(friend(['Ryan', 'Kieran', 'Mark']))

// BEST SOLUTION

///////////////////////////////codeWars 10JUL2024///////////////////////////////

//TASK
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

//PARAMETERS
//program takes in a number. number will always be a positive integer greather than 0. no decimals

//RETURNS
//returning the sum of all numbers from 1 to the number

//EXAMPLES
//num = 2 returns 3
//num = 8 returns 36

//PSEUDOCODE
//starting with 0 as variable
//loop from 1 until the num, to include num <=
//return ans

//SOLUTION
// var summation = function (num) {
// 	let ans = 0
// 	for (let i = 1; i <= num; i++) {
// 		ans += i
// 	}
// 	return ans
// }

// console.log(summation(8))

//BEST SOLUTION

///////////////////////////////codeWars 11JUL2024///////////////////////////////

// TASK
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

// PARAMETERS
// given array called strarr that consists of strings and only strings
// given integer k that is will always be an integer

// RETURNS
// returns the first longest string consisting of k consecutive strings from the array

// EXAMPLES
// longest_consec(strarr, 2) should return "folingtrashy"

// PSEUDOCODE

// SOLUTION
// function longestConsec(strarr, k) {
// 	// your code
// }

// BEST SOLUTION

// function longestConsec(strarr, k) {
// 	var longest = ''
// 	for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
// 		var tempArray = strarr.slice(i, i + k)
// 		var tempStr = tempArray.join('')
// 		if (tempStr.length > longest.length) {
// 			longest = tempStr
// 		}
// 	}
// 	return longest
// }

// TASK
// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// PARAMETERS
// all inputs "str" will be a string
// "str" will be a one for one representation of an integer
// no decimals will be in the string

// RETURNS
// return number only

// EXAMPLES
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// PSEUDOCODE
// get string from input
// use Number() method

// SOLUTION
// const stringToNumber = str => Number(str)

// console.log(stringToNumber('1234'))

// BEST SOLUTION
// const stringToNumber = function(str){
//     return parseInt(str);
//   }

///////////////////////////////codeWars 12JUL2024///////////////////////////////

// TASK
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

// PARAMETERS
// taking in list as parameter
// list will be an array of numbers only, no strings

// RETURNS
// return list in reverse order
// allowed to mutate list or return new list

// EXAMPLES
// [1, 2, 3, 4]  -> [4, 3, 2, 1]
// [9, 2, 0, 7]  -> [7, 0, 2, 9]

// PSEUDOCODE
// use method .reverse()

// SOLUTION
// let reverseList = list => list.reverse()

// console.log(reverseList([1, 2, 3, 4]))

// BEST SOLUTION

///////////////////////////////codeWars 13JUL2024///////////////////////////////

// TASK
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// PARAMETERS
// array of integers will be passed into function
// array will only be of integers, no strings
// array will be a normal array, not an array of arrays
// integers are defined as negative, positive, or zero
// there will only be ONE integer that repeats an odd amount of times

// RETURNS
// return only the number that appears an odd amount of times
// do not return an array, only the single number

// EXAMPLES
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// PSEUDOCODE
// need to count the number of times an integer repeats in an array
// then use that number with % 2 to determine whether it is odd, since there is only one integer that repeats an odd amount of times
// use indexOf and lastIndexOf NOT being equal, which will get you values that repeat at some point, then use % to see if they are repeat an odd number of times

// SOLUTION
// let findOdd = A => A.find(thing => A.filter(elem => elem == thing).length % 2);

// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// BEST SOLUTION
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// const findOdd: This line declares a constant variable findOdd and assigns it an arrow function. The function takes one parameter, xs, which represents the array of integers.

// (a, b) => a ^ b: This part of the code is an arrow function used as a callback for the reduce method. The ^ operator in JavaScript performs a bitwise XOR operation. XOR (exclusive OR) returns 1 for bits that are different and 0 for bits that are the same. For example, 1 ^ 1 results in 0, and 1 ^ 0 results in 1.

// xs.reduce((a, b) => a ^ b): Here, the reduce method is used on the input array xs. The reduce method takes a callback function that is applied to each element of the array. In this case, the callback function (a, b) => a ^ b calculates the XOR of the accumulated result a and the current element b. This operation is performed iteratively over the elements of the array until a single result is obtained.

// The XOR operation has a special property: if you XOR a number with itself an odd number of times, the result will be the number itself. If you XOR a number with itself an even number of times, the result will be 0. Since all numbers in the array appear even times except for one, the XOR operation will eventually leave you with the number that appears an odd number of times.

// In summary, this code calculates the XOR of all the elements in the array, effectively finding the number that appears an odd number of times, and returns that number as the result of the findOdd function.

///////////////////////////////codeWars 15JUL2024///////////////////////////////

// TASK
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// PARAMETERS
// passing in array of numbers
// array of numbers will only have numbers in integer form, no strings
// array COULD be empty or null, in which case, it should return an empty array

// RETURNS
// return sorted array of numbers in ascending order
// if empty or null, return empty array

// EXAMPLES
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// PSEUDOCODE
// get array of numbers
// have conditional to check if array is empty or null, in which case return []
// use sort function with a - b parameter to sort in ascending order, according to the ASCII table

// SOLUTION
// function solution(nums) {
// 	if (nums === null || nums === undefined) {
// 		return [];
// 	} else {
// 		return nums.sort((a, b) => a - b);
// 	}
// }

// console.log(solution([1, 2, 10, 50, 5]));

// BEST SOLUTION
