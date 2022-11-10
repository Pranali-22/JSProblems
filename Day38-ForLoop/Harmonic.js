const prompt = require("prompt-sync")()

let n = Number(prompt("Enter number : "))
let sum = 0
for(let i=1;i<=n; i++){
    sum += 1/i
}

console.log("Harmonic number = "+sum)