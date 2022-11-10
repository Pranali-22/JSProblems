const prompt = require("prompt-sync")()

let a = Number(prompt("Enter number for a : "))
let b = Number(prompt("Enter number for b : "))
let c = Number(prompt("Enter number for c : "))

let result1 = a + b * c
let result2 = a % b + c
let result3 = c + a / b
let result4 = a * b + c

let min, max
if (result1 < result2 && result1 < result3 && result1 < result4)
    min = result1
else if (result2 < result1 && result2 < result3 && result2 < result4)
    min = result2
else if (result3 < result1 && result3 < result2 && result3 < result4)
    min = result3
else 
    min = result4

console.log("Minimum result : "+min)

if (result1 > result2 && result1 > result3 && result1 > result4)
    max = result1
else if (result2 > result1 && result2 > result3 && result2 > result4)
    max = result2
else if (result3 > result1 && result3 > result2 && result3 > result4)
    max = result3
else 
    max = result4

console.log("Maximum result : "+max)