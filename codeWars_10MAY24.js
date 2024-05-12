//codeWars 10MAY24

//TASK
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//PSEUDOCODE
// get number input
// if number < 0, return number.
// if number > 0, Use Math.abs and multiply by -1
// if number = 0, return 0

//SOLUTION
function makeNegative(num) {
	if (num === 0) {
		return 0
	} else if (num < 0) {
		return num
	} else return Math.abs(num) * -1
}

// BEST SOLUTION
// function makeNegative(num) {
//     return -Math.abs(num);
// }
