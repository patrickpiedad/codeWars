//codeWars 26APR24

//TASK
//Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

//PSEUDOCODE

//SOLUTION
function countSheeps(sheep) {
    // let ans = sheep.length
    // console.log(ans)
    // return ans
    let count = 0
    for (let i = 0; i < sheep.length; i++) {
        if ( sheep[i] === true || sheep[i] >= 1) {
        // if ( sheep[i] === true, 1) {
            count++
        } else if (countSheeps[i] === undefined || countSheeps[i] === null || countSheeps[i]=== false){
        // } else if (countSheeps[i] === undefined, null, false){
            count = count
        }
    }
    console.log(count)
    return count
}

let sheep = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true , true, true, true, true, false, false, true, true]

countSheeps(sheep)

// BEST SOLUTION
// function countSheeps(sheep) {
//     return sheep.filter(Boolean).length;
// }

