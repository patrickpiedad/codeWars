//codeWars 04MAY24

//TASK
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
//
// Example(Input1, Input2 --> Output):
//
// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.


//PSEUDOCODE
// get input from function call
// compare input 1 and input 2
// conditional. if input 1 === input 2, then calculate area (input 1 * input 2) and set to variable
// else if input 1 !== input 2, calculate perimeter ( (input 1 * 2) + (input 2 * 2) ) and set to variable
// return values



//SOLUTION
// Normal Function
// const areaOrPerimeter = function(l , w) {
//     if (l === w){
//         let area = l * w
//         console.log(area)
//         return area
//     }else if (l !== w){
//         let perimeter = (l * 2) + (w * 2)
//         console.log(perimeter)
//         return perimeter
//     }
// }

//Arrow Function
const areaOrPerimeter = (l , w) => {
    if (l === w){
        let area = l * w
        console.log(area)
        return area
    }else if (l !== w){
        let perimeter = (l * 2) + (w * 2)
        console.log(perimeter)
        return perimeter
    }
}

areaOrPerimeter (6, 10)
areaOrPerimeter (3, 3)


// BEST SOLUTION
//const areaOrPerimeter = (l , w) => l === w ? l*w : 2*(l+w);
