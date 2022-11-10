const prompt = require("prompt-sync")()

let number1 = Number(prompt("Enter number1 : "))
let number2 = Number(prompt("Enter number2 : "))

console.log(checkPalindrome(number1) == number2)

function checkPalindrome(number1){
    let rem
    let result=0
    while(number1 > 0 ){
        rem = parseInt(number1%10)
        result = (result*10)+rem
        number1 = parseInt(number1/10)
    }
    return result
}

