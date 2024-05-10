//codeWars 07MAY24

//TASK
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.




//PSEUDOCODE
// get argument as name
// make string to lowercase, check for "r" using .charAt(0) and return
// if conditional, if contains "r" then return plays bajo
// if else, return does not play banjo



//SOLUTION
function areYouPlayingBanjo(name) {
    if ( (name.charAt(0)) === 'r'  || name.charAt(0) === 'R'){
        return (name + ' plays banjo')
    }else {
        return (name + ' does not play banjo')
  }
}




// BEST SOLUTION
// function areYouPlayingBanjo(name) {  
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
//   }

