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
const rps = (p1, p2) => {
	if (p1 === 'scissors' && p2 === 'paper') {
		return 'Player 1 won!'
	} else if (p1 === 'scissors' && p2 === 'rock') {
		return 'Player 2 won!'
	} else if (p1 === p2) {
		return 'Draw!'
	} else if (p1 === 'rock' && p2 === 'scissors') {
		return 'Player 1 won!'
	} else if (p1 === 'rock' && p2 === 'paper') {
		return 'Player 2 won!'
	} else if (p1 === 'paper' && p2 === 'scissors') {
		return 'Player 2 won!'
	} else if (p1 === 'paper' && p2 === 'rock') {
		return 'Player 1 won!'
	}
}

//BEST SOLUTION
