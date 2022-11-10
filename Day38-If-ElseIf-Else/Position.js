const prompt = require("prompt-sync")()

let number = Number(prompt("Enter number : "))
if(number == 1)
    console.log("Unit")
else if(number == 10)
    console.log("Ten")
else if(number == 100)
    console.log("Hundred")
else if(number == 1000)
    console.log("Thousand")
else
    console.log("Greater than Thousand")
