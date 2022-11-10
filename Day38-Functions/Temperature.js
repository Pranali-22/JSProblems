const prompt = require("prompt-sync")()

console.log(`Press 1 - Celcius to Fahrenheit Conversion \n 2 - Fahrenheit to Celcius Conversion`)
let choice = Number(prompt("Enter choice : "))

function DegreeToFahrenheit(degC){
    let degF = (degC * 9/5) + 32
    console.log(`${degC} C = ${degF} F`)
}

function FahrenheitToDegree(degF){
    let degC = (degF - 32) * 5/9
    console.log(`${degF} F = ${degC} C`)
}

switch(choice){
    case 1:
        let degC = prompt("Enter temperature in Celcius : ")
        DegreeToFahrenheit(degC)
        break
    case 2:
        let degF = prompt("Enter temperature in fahrenheit : ")
        FahrenheitToDegree(degF)
}

