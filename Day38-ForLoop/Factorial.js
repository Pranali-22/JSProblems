const prompt = require("prompt-sync")()

let number = Number(prompt("Enter number : "))
let fact = 1;

for(let i = 1; i<= number; i++){
    fact *= i
}

console.log(fact)