//codeWars 05MAY24

//TASK
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
// For example, for [1, 2, 2] it should return 9


//PSEUDOCODE
// take in array values
// set starting value for "current value"
// use reduce (acc, currValue) where currValue starts at 0 (since we add in the end, 0 won't negatively affect anything)
// then acc should be squared first, so (acc * acc), then added to currValue, so (acc * acc) + currValue
// reduce runs for each element in the array
// return answer, use big arrow syntax, one line


//SOLUTION
function squareSum (numbers){
    return ( numbers.reduce( (acc, currValue) => (acc) + (currValue * currValue), 0) )

}

let ans = squareSum( [1, 2, 2] )
console.log(ans)




// BEST SOLUTION

