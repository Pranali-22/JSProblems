const prompt = require("prompt-sync")()

let n = Number(prompt("Enter number : "))
for(let i=0;i<=n; i++){
    console.log(Math.pow(2,i))
}