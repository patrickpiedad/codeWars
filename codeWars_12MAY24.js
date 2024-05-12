//codeWars 12MAY24

//TASK
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//PSEUDOCODE
// get function
// need to concatenate and multiply the concatenation by n, return this answer

//SOLUTION

function repeatStr(n, s) {
	let array = []
	for (let i = 0; i < n; i++) {
		array.push(s)
	}
	return array.join('')
}

repeatStr(5, 'i')

// BEST SOLUTION
// function repeatStr (n, s) {
//     return s.repeat(n);
//   }
