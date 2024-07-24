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

///////////////////////////////codeWars 16JUL2024///////////////////////////////

// TASK
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// PARAMETERS
// input will be the url argument in string form
// input will have a .com and "#" at the end for some cases, if it does have a #... then remove the #...
// input may not have the "#" at all

// RETURNS
// return url with # and everything after removed in string format
// no other return

// EXAMPLES
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// PSEUDOCODE
// url as argument variable
// use split to break the string into the "first part" and then the "second part" starting with the anchor "#"
// return the first string only

// SOLUTION
function removeUrlAnchor(url) {
	return url.split('#')[0]
}

console.log(removeUrlAnchor('www.codewars.com#about'))

// BEST SOLUTION

///////////////////////////////codeWars 17JUL2024///////////////////////////////

// TASK
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// PARAMETERS
// dna is inputted as argument
// argument will contain only a string with capital letters

// RETURNS
// return converted RNA answer
// changing any T to an U
// no other returns

// EXAMPLES
// "GCAT"  =>  "GCAU"

// PSEUDOCODE
// use replaceAll method

// SOLUTION
// function DNAtoRNA(dna) {
// 	return dna.replaceAll('T', 'U')
// }

// console.log(DNAtoRNA('GCAT'))

// BEST SOLUTION

///////////////////////////////codeWars 18JUL2024///////////////////////////////

// TASK
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument,
// and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// PARAMETERS
// take in in argument 'word', which will be a single non-empty string of only lowercase and uppercase ASCII letters

// RETURNS
// return ordered list containing index of all capital (uppercase) letters in the string
// ordered list will be an array

// EXAMPLES
// "CodEWaRs" --> [0,3,4,6]

// PSEUDOCODE
// iterate through string and use conditional
// for conditional, if the toUpperCase of the current string element matches current string element, then it is uppercase and push to new array
// else, continue iteration
// return array

// SOLUTION
// var capitals = function (word) {
// 	let wordArr = word.split('')
// 	let ans = []
// 	wordArr.forEach((elem, index) => {
// 		if (elem.toUpperCase() === elem) {
// 			ans.push(index)
// 		}
// 	})
// 	return ans
// }

// console.log('Quokka is currently running')
// console.log(capitals('CodEWaRs'))

// BEST SOLUTION

///////////////////////////////codeWars 19JUL2024///////////////////////////////

// TASK
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side.
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// PARAMETERS
// receiving "dna" as argument.
// dna will be a string with only letters from the english alphabet
// dna will never be empty

// RETURNS
// need to return the complimentary of dna where A and T values are swapped, and C and G values are swapped
// need to return in string format

// EXAMPLES
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// PSEUDOCODE
// get dna as argument
// make new empty array (which will be converted into a string later)
// conditional, nonmutating, for loop
// if dna[i] = A, push T into new arr
// if dna[i] = T, push A into new arr
// if dna[i] = C, push G into new arr
// if dna[i] = G, push C into new arr
// else push dna[i]
// join arr and return

// SOLUTION
// function dnaStrand(dna) {
// 	let ans = []
// 	for (let i = 0; i < dna.length; i++) {
// 		if (dna[i] === 'A') {
// 			ans.push('T')
// 		} else if (dna[i] === 'T') {
// 			ans.push('A')
// 		} else if (dna[i] === 'G') {
// 			ans.push('C')
// 		} else if (dna[i] === 'C') {
// 			ans.push('G')
// 		} else {
// 			ans.push(dna[i])
// 		}
// 	}
// 	return ans.join('')
// }

// console.log(dnaStrand('ATTGC'))

// BEST SOLUTION

///////////////////////////////codeWars 20JUL2024///////////////////////////////

// TASK
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence
// "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// PARAMETERS
// receive parameter called string
// string will contain only letters from the english alphabet, spaces, and punctuation marks.
// string will not contain any numbers
// no other parameters given

// RETURNS
// return true if pangram, false if not pangram
// can mutate string if needed

// EXAMPLES
// "The quick brown fox jumps over the lazy dog" => true

// PSEUDOCODE
// get string, .split('') to make into array
// use .includes to give criteria of all alphabet letters, using conditional
// if includes all alphabet letters, then return true, else false

// SOLUTION
// function isPangram(string) {
// 	string = string.replaceAll(' ', '')
// 	string = string.replaceAll('!', '')
// 	string = string.replaceAll('?', '')
// 	string = string.replaceAll('.', '')
// 	string = string.replaceAll("'", '')
// 	let stringArr = string.toLowerCase().split('')
// 	console.log(stringArr)
// 	if (stringArr.every(letter => stringArr.includes('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'))) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// BEST SOLUTION
// function isPangram(string) {
// 	const alphabetList = [...'abcdefghijklmnopqrstuvwxyz']

// 	return alphabetList.every(letter => string.toLowerCase().includes(letter))
// }

// console.log(isPangram('The quick brown fox jumps over the lazy dog'))
// console.log(isPangram('elbow'))

///////////////////////////////codeWars 22JUL2024///////////////////////////////

// TASK
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
// How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// PARAMETERS
// p0 is the initial population  of the town, which is 1000. this will be a number parameter, not a string and will not contain decimals
// percent is the rate of population increase, which is 2% or 0.02. this will be a number paramter, not a string and will contain decimals
// aug is the decrease/increase of the population outside of the 2% increase, which is 50 per year.
// p is the population to equal or surpass, as requested in the formula
// answer must be a whole number rounded down, use .floor method

// RETURNS
// return the number of years it will take to reach "p," rounding down the number of inhabitans per year that is calculated by the formula
// this return is for the function nb_year and should return the number of entire years needed to get a populatio ngreate or equal to p
// we are returning a full year, not a decimal year, round up

// EXAMPLES
// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// PSEUDOCODE
// write the formula for population increase with parameters, no hard coded numbers
// p0 + (p0 * percent/100) + aug => if this is less than p0, then continue to the next year
// if this is greater than or equal to p0, then return what year you are on
// need to use while loop to continue looping until the formuala conditional is satisfied

// SOLUTION
// function nbYear(p0, percent, aug, p) {
// 	let totalPopulation = 0
// 	let populationChange = 0
// 	let yearCounter = 0
// 	while (totalPopulation < p) {
// 		yearCounter++
// 		populationChange = Math.floor(p0 * (percent / 100) + aug)
// 		totalPopulation = p0 + populationChange
// 		p0 = totalPopulation
// 	}
// 	return yearCounter
// }

// console.log(nbYear(1500, 5, 100, 5000))

// BEST SOLUTION

///////////////////////////////codeWars 23JUL2024///////////////////////////////

// TASK
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// PARAMETERS
// a and b will be positive integers with a being first and b being second at all times
// operations are "add" "subtract" 'divide" and "multiply"

// RETURNS
// return a operator b

// EXAMPLES
// A few examples:(Input1, Input2, Input3 --> Output)

// PSEUDOCODE
// conditionals with cases being based on operator names

// SOLUTION
// function arithmetic(a, b, operator) {
// 	if (operator === 'add') {
// 		return a + b
// 	} else if (operator == 'subtract') {
// 		return a - b
// 	} else if (operator == 'divide') {
// 		return a / b
// 	} else if (operator == 'multiply') {
// 		return a * b
// 	}
// }

// BEST SOLUTION

///////////////////////////////codeWars 24JUL2024///////////////////////////////

// TASK
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// PARAMETERS
// getting array of numbers, only integers, unsorted

// RETURNS
// returning sum of all numbers excluding highest and lowest values
// returning only the sum as a number, no array or string

// EXAMPLES
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// PSEUDOCODE
// sort array
// remove first value, remove last value
// reduce

// SOLUTION
function sumArray(array) {
	if (array == null) {
		return 0
	} else if (array.length == 1) {
		return 0
	} else {
		array = array.sort((a, b) => a - b)
		array[0] = 0
		array[array.length - 1] = 0
		console.log(array)
		return array.reduce((acc, currVal) => acc + currVal, 0)
	}
}

console.log(sumArray([6, 2, 1, 8, 10]))

// BEST SOLUTION
