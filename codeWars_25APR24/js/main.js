//codeWars 25APR24

//TASK
//Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

//PSEUDOCODE
// get input time
// convert input time into milliseconds
// hours milliseconds + minutes to milliseconds + seconds to milliseconds
// subtract input time from 0, representing midnight
// convert to positive number since the number would be negative
// return answer

//SOLUTION
let ans

function past(h, m, s){
    ans = ( (h * 3600) + (m * 60) + (s) ) * 1000
    console.log(ans)
    return ( (h * 3600) + (m * 60) + (s) ) * 1000
}

past(1,1,1)

