//codeWars 29APR24

//TASK
// We need a function that can transform a number (integer) into a string.
//
//     What ways of achieving this do you know?
//
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"


//PSEUDOCODE
// receive inputted number from function
// use to.String method on input to create string
// return string
// console.log function (which will give the value because of the return)


//SOLUTION
// function numberToString(num) {
//     let ans = num.toString()
//     console.log(ans)
//     return ans
// }
//
// numberToString(123)



// BEST SOLUTION
function numberToString(num) {
    return(num.toString())
}
