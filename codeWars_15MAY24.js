//codeWars 15MAY24

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

function filter_list(l) {
	return l.filter(Number.isInteger)
}

console.log(filter_list([1, 2, 'a', 'b']))
console.log(filter_list([1, 'a', 'b', 0, 15]))

// BEST SOLUTION

//DELETE
function coinFlip() {
	if (Math.random() < 0.5) {
		return 'heads'
	} else return 'tails'
}
console.log(coinFlip())

let coin = (_) => (Math.random() < 0.5 ? 'heads' : 'tails')
console.log(coin())
