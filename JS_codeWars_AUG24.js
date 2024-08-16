///////////////////////////////codeWars 01AUG2024///////////////////////////////

// TASK
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// PARAMETERS
// Receives str and ending in string format.
// will also be in string format
// will never be an empty string

// RETURNS
// return true if ending matches the end of string
// else return false

// EXAMPLES
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// PSEUDOCODE
// get length of ending
// splice str from end to the size of ending
// compare spliced str and endind, if equal then return true, else return false

// SOLUTION
// const solution = (str, ending) => (ending === str.slice(-ending.length) || ending === '' ? true : false)

// console.log(solution('abc', 'bc'))

// BEST SOLUTION

///////////////////////////////codeWars 02AUG2024///////////////////////////////

// TASK
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// PARAMETERS
// receiving two arrays (a and b)
// arrays will have integers in them, no decimals or other types of numbers
// array will not be empty and always have numbers in them

// RETURNS
// return one array
// returned array must have only values that are not repeated from list b in list a
// basically, anything in b must be removed from a, and order of numbers must be preserved and not necessarily is put in sorted order when given

// EXAMPLES
//arrayDiff([1,2,2,2,3],[2]) == [1,3]

// PSEUDOCODE
// get array a and array b
// foreach element in a, compare to element in b and remove if equal

// SOLUTION
// function arrayDiff(a, b) {
// 	for (let i = 0; i < a.length; i++) {
// 		console.log(a[i])
// 		if (b.length === 0) {
// 			return a
// 		}
// 		for (let j = 0; j < b.length; j++) {
// 			if (a[i] === b[j]) {
// 				a(a[i])
// 			}
// 		}
// 	}
// 	return a
// }

// function arrayDiff(a, b) {
// 	return a.filter(element => !b.includes(element))
// }

// console.log(arrayDiff([1, 2, 3], [1, 2]))

// BEST SOLUTION

///////////////////////////////codeWars 03AUG2024///////////////////////////////

// TASK
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// EXAMPLES
// "Robin Singh" ==> ["Robin", "Singh"]

// REPEAT
// I'm writing a function that will take a string and convert the stirng into an array of words
// The string words will be separated by a space
// I will return an array of strings, to include numbers as strings if the argument has numbers in the string

// APPROACH
// Take the input string and use .split method, separating members to be split by a space

// CODE
// const stringToArray = string => string.split(' ')

// // TEST
// console.log(stringToArray('I love arrays they are my favorite'))

// OPTIMIZE
// No other optimizations for this problem

// BEST SOLUTION

///////////////////////////////codeWars 05AUG2024///////////////////////////////

// TASK
// Now you have to write a function that takes an argument and returns the square of it.

// REPEAT
// The task is to write a function that will take an argument and return the square of that argument.
// I assume the argument will always be in number form (ie. not in string form and require conversion)
// I assume that the argument will never be null

// EXAMPLES
// 4 => 16
// 10 => 100

// APPROACH
// simply function with arrow function format, take in number and return number * number

// CODE
// const square = number => number * number

// TEST
// console.log(square(4))
// console.log(square(10))

// OPTIMIZE
// Possible to also use Math.sqrt function

// BEST SOLUTION

///////////////////////////////codeWars 06AUG2024///////////////////////////////

// TASK
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// REPEAT
// I will be given an array of numbers. This array will have only numbers, both even and odd. I need to sort the odd numbers in ascending order, that is lowest to highest,
// while leaving the even numbers at their original positions.

// EXAMPLES
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// APPROACH
//

// CODE
// function sortArray(array) {
// 	let oddNumbers = array.filter(num => num % 2 !== 0)
// 	oddNumbers = oddNumbers.sort((a, b) => a - b)

// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] % 2 !== 0) {
// 			array[i] = oddNumbers.shift()
// 		}
// 	}
// 	return array
// }

// // TEST
// console.log(sortArray([7, 1]))
// console.log(sortArray([3, 8, 6, 5, 4]))
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))

// OPTIMIZE

// BEST SOLUTION

///////////////////////////////codeWars 07AUG2024///////////////////////////////

// TASK
// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// REPEAT
// I will be given a word and I have to check if the word is a palindrome (same backwards and forwards)
// The word will be in string or number form and the function should be case insensitive

// EXAMPLES
// racecar --> true
// cambelak --> false
// radar --> true

// APPROACH
// break given argument into array, reverse array, check to see if arrays equal each other

// CODE
// function isPalindrome(x) {
// 	const xReverse = x.split('').reverse().join('')
// 	console.log(xReverse)
// 	if (x.toLowerCase() === xReverse.toLowerCase()) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// // TEST
// console.log(isPalindrome('radar'))
// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('elbow'))
// console.log(isPalindrome('quokka'))

// OPTIMIZE

// BEST SOLUTION

///////////////////////////////codeWars 08AUG2024///////////////////////////////

// TASK
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// REPEAT
// I am taking an array of strings (names) and displaying the text given in the statements

// EXAMPLES
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// APPROACH
// use array lengths to fuel conditionals
// if array length is 0, then retun "no one likes this"
// if array length is between 1 and three, use for loop and concat?

// CODE
// function likes(names) {
// 	if (names.length === 0) {
// 		return 'no one likes this'
// 	} else if (names.length === 1) {
// 		return `${names[0]} likes this`
// 	} else if (names.length === 2) {
// 		return `${names[0]} and ${names[1]} like this`
// 	} else if (names.length === 3) {
// 		return `${names[0]}, ${names[1]}, and ${names[2]} like this`
// 	} else if (names.length > 3) {
// 		return `${names[0]}, ${names[1]}, and ${names.length - 2} others like this`
// 	}
// }

// // TEST
// console.log(likes(['Max', 'John', 'Mark']))
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))

// OPTIMIZE

// BEST SOLUTION

///////////////////////////////codeWars 09AUG2024///////////////////////////////

// TASK
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// REPEAT
// I will be given a string and have to return the number of vowels. The string will only have lower case letters and/or spaces.

// EXAMPLES
// apple --> 2
// bread --> 2
// monitor --> 3

// APPROACH
// loop through string and if conditional --> vowel --> count ++, return count

// CODE
// function getCount(str) {
// 	let count = 0
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
// 			count++
// 		}
// 	}
// 	return count
// }

// TEST

// OPTIMIZE

// BEST SOLUTION

///////////////////////////////codeWars 10AUG2024///////////////////////////////

// TASK
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// REPEAT
// I will be given a number and I need to return it in expanded form. That means returning each "tenth" of the number.

// EXAMPLES
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// APPROACH
// take num, use modulus to get remainder and that becomes the first part of the expanded form
// then reassign the regular number by 10 and Math.floor to make sure it isn't rounded incorrectly because of the decimal
// continue this in your loop for the length of the number in string form
// return all the saved portions

// CODE
// function expandedForm(num) {
// 	let arr = []
// 	let numLength = num.toString().length

// 	for (let i = 0; i < numLength; i++) {
// 		pushVal = num - (num % 10)
// 		arr.push(pushVal)
// 		// arr.push(num % 10)
// 		num = num - (num - (num % 10))
// 		console.log(num)
// 	}

// 	return arr.join(' + ')
// }

// TEST
// console.log(expandedForm(12))
// console.log(expandedForm(42))
// console.log(expandedForm(70304))

// OPTIMIZE

// BEST SOLUTION
// const expandedForm = n =>
// 	n
// 		.toString()
// 		.split('')
// 		.reverse()
// 		.map((a, i) => a * Math.pow(10, i))
// 		.filter(a => a > 0)
// 		.reverse()
// 		.join(' + ')

///////////////////////////////codeWars 12AUG2024///////////////////////////////

// TASK
// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// 1 Can you write a solution that will return null for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// REPEAT

// EXAMPLES

// APPROACH

// CODE
// function firstNonConsecutive(arr) {
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		if (arr[i] !== arr[i + 1] - 1) {
// 			return arr[i + 1]
// 		}
// 	}
// 	return null
// }

// // TEST
// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]))
// console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]))

// OPTIMIZE

// BEST SOLUTION

///////////////////////////////codeWars 13AUG2024///////////////////////////////

// TASK
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// REPEAT
// I am taking a number as an input, and returning the sum of the absolute value of each of its decimal place numbers.

// EXAMPLES
// 10 --> 1
// 99 --> 18
// -32 --> 5

// APPROACH
// Assuming that all numbers in the input with be integer values, I will split the number into an array, the use a reduce function to find the sum
// of its absolute value decimal places.

// CODE
// function sumDigits(number) {
// 	if (number === 0) {
// 		return 0
// 	}
// 	let numberArr = Math.abs(number).toString().split('')
// 	return numberArr.reduce((acc, currVal) => Number(acc) + Number(currVal))
// }

// TEST
// console.log(sumDigits(10))
// console.log(sumDigits(99))
// console.log(sumDigits(-32))

// OPTIMIZE

// BEST SOLUTION

///////////////////////////////codeWars 16AUG2024///////////////////////////////

// TASK
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// REPEAT
// I am getting a player's current health and the amount of damage received, then returning the new player's health.

// EXAMPLES
// health 100, damage 5, return 95
// health 20, damage 30, return 0 (edge case)

// APPROACH
// subtraction with conditional for edge case

// CODE
function combat(health, damage) {
	if (health >= damage) {
		return health - damage
	} else if (damage > health) {
		return 0
	}
}

// TEST

// OPTIMIZE

// BEST SOLUTION
