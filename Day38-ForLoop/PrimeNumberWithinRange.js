const prompt = require("prompt-sync")()

let start_number = Number(prompt("Enter start number : "))
let end_number = Number(prompt("Enter end number : "))
let is_prime

for(number = start_number; number<=end_number; number ++){
    is_prime = 0
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


