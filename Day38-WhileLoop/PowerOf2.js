const prompt = require("prompt-sync")()

let n = Number(prompt("Enter number : "))
let result =1, i=0
const MAX_VALUE = 256
while(result < MAX_VALUE && i<=n){
    result = Math.pow(2,i)
    console.log(result)
    i++
}