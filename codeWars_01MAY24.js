//codeWars 01MAY24

//TASK
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry about strings with less than two characters.


//PSEUDOCODE
// get input of str
// use splice() method
// return and console.log result


//SOLUTION
let ans
function removeChar(str){
    ans = str.slice(1)
    ans = ans.slice(0, ans.length - 1)
    console.log(ans)
    return ans
}

removeChar('railgunners')



// BEST SOLUTION
// function removeChar(str) {
//     return str.slice(1, -1);
// }

