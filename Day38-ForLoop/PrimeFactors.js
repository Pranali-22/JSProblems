const prompt = require("prompt-sync")()

let number = Number(prompt("Enter number to find prime factors: "))
let is_prime

for(let num=2; num <=number ; num++){
    if(number%num == 0){
        is_prime = 0
        for(let i=2;i<=num/2; i++){
            if(num%i == 0){
                is_prime = 1
                break
            }
        }

        if(is_prime == 0)
            console.log(num)
    }
}