const prompt = require("prompt-sync")()
console.log(`Press 1 - Feet to Inch \n 2- Feet to Meter\n 3- Inch to Feet\n 4- Meter to Feet`)

let choice = Number(prompt("Enter choice : "))

let unit, result

switch(choice){
    case 1:
        unit = Number(prompt("Enter unit in feet : "))
        result = unit * 12
        console.log(`${unit} feet = ${result} inches`)
        break

    case 2:
        unit = Number(prompt("Enter unit in feet : "))
        result = unit * 0.305
        console.log(`${unit} feet = ${result} meters`)
        break

    case 3:
        unit = Number(prompt("Enter unit in inch : "))
        result = unit / 12
        console.log(`${unit} inch = ${result} feet`)
        break

    case 4:
        unit = Number(prompt("Enter unit in meter : "))
        result = unit / 0.305
        console.log(`${unit} feet = ${result} feet`)
        break
    
}

