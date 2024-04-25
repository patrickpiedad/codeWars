//codeWars 24APR24

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
// let ans
//
// function past(h, m, s){
//     ans = ( (h * 3600) + (m * 60) + (s) ) * 1000
//     console.log(ans)
//     return ( (h * 3600) + (m * 60) + (s) ) * 1000
// }
//
// past(1,1,1)


//codeWars 25APR24

//TASK
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!

//PSEUDOCODE

//SOLUTION
smash = function (words) {
    return words.join(" ");
};

