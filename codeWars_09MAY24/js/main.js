//codeWars 09MAY24

//TASK
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.



//PSEUDOCODE
// get input of array
// get length of array
// sum all array elements using reduce function
// divide reduced array by length
// return value


//SOLUTION
function findAverage(array) {
    if (array.length === 0){
        return 0
    }else {
        return (array.reduce((acc, currValue) => acc + currValue, 0)) / array.length
    }
  }




// BEST SOLUTION

