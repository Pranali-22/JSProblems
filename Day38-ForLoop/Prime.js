const prompt = require("prompt-sync")()

let number = Number(prompt("Enter number : "))
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

