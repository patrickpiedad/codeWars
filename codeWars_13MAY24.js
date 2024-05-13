//codeWars 12MAY24

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

function positiveSum(arr) {
	let posSum = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			posSum = posSum + arr[i]
		} else if (arr[i] < 0) {
			posSum = posSum
		}
	}
	return posSum
}

positiveSum([1, -4, 7, 12])

//BEST SOLUTION
