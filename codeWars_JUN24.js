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
