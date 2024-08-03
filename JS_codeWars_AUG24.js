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
const stringToArray = string => string.split(' ')

// TEST
console.log(stringToArray('I love arrays they are my favorite'))

// OPTIMIZE
// No other optimizations for this problem

// BEST SOLUTION
