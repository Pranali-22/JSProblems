const prompt = require("prompt-sync")()

let number = Number(prompt("Enter number : "))
checkPrime(number)

let palindrome_number = checkPalindrome(number)
console.log("Palindrome Number : "+palindrome_number)
checkPrime(palindrome_number)

function checkPalindrome(number){
    let rem
    let result=0
    while(number > 0 ){
        rem = parseInt(number%10)
        result = (result*10)+rem
        number = parseInt(number/10)
    }
    return result
}

function checkPrime(number){
    let is_prime = 0
    for(let i=2;i<=number/2; i++){
        if(number%i == 0){
            is_prime = 1
            break
        }
    }
    if(is_prime == 1)
        console.log(`${number} is not prime number`)
    else
        console.log(`${number} is prime number`)
}
