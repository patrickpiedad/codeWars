//codeWars 03MAY24

//TASK
//Given a non-empty array of integers, return the result of multiplying the values together in order.
// Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24



//PSEUDOCODE
// get array as input
// let sum
// iterate through array and continually reassign sum variable
// return answer
//console log outside of the function for the call


//SOLUTION

function grow(x){
    let sum = x[0]
    for (let i = 1; i < x.length; i++){
        sum *= x[i]
    }
    return sum
}

console.log( grow ( [1, 2, 3, 4] ) )

// BEST SOLUTION
// const grow=x=> x.reduce((a,b) => a*b);

