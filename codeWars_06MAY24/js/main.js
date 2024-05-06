//codeWars 06MAY24

//TASK
// Given an array of integers your solution should find the smallest integer.
//
// For example:
//
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//PSEUDOCODE
// get array from argument
// use Math.min on the array, use spread operator to unpack each array item and analyze
// return value



//SOLUTION
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}






// BEST SOLUTION

