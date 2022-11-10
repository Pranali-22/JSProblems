// 2. Write a program that takes day and month from the command line and prints true if
// day of month is between March 20 and June 20, false otherwise.

function checkDayMonth(day,month){
    if(day>=20 && month==3)
        return true
    else if (month>3 && month<6) {
        return true        
    } else if(day<=20 && month ==6){
        return tru
    }
    return false
}

const prompt = require("prompt-sync")();
console.log("\nProblem Number 2")
let day = Number(prompt("Enter day : "))
let month = Number(prompt("Enter month : "))
console.log(checkDayMonth(day,month))
