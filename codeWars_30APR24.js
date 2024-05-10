//codeWars 30APR24

//TASK
//After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
//
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//
// Write a code that gives out the total amount for different days(d).


//PSEUDOCODE
// get input of how many days you are renting the car
// conditional statement if
// if renting days >= 7 then 40 * days - 50
// else if renting days >= 3 AND < 7 then 40 * days - 20
// return
// console log answer


//SOLUTION
let price

function rentalCarCost(d){
    if (d >= 7){
        price = (d * 40) - 50
    } else if (d >= 3 && d < 7) {
        price = (d * 40) - 20
    } else if (d >= 0 && d < 3){
        price = d * 40
    } else {
        alert('Please input proper amount of days')
    }
    console.log(price)
    return price
}

rentalCarCost(7)




// BEST SOLUTION

