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
const solution = (str, ending) => (ending === str.slice(-ending.length) || ending === '' ? true : false)

console.log(solution('abc', 'bc'))

// BEST SOLUTION
