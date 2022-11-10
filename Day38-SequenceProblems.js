// 1. Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.

console.log("Single digit number : "+Math.floor(Math.random() * 10))


// 2. Use REPL – Use Random to get Dice Number between 1 to 6
function getDice(){
    let diceNum = (Math.floor(Math.random() * 10)%6) + 1
    return diceNum
}


// 3. Use REPL – Add two Random Dice Number and Print the Result
let dice1 = getDice()
let dice2 = getDice()
let sumOfDice = dice1+dice2
console.log("Sum of 2 dice numbers : "+sumOfDice)


// 4. Use Script & Debug – Write a program that reads 5 Random 2 Digit values ,
// then find their sum and the average
const TOTAL_NUMBER = 5
function getTwoDigitRandomNumber(){
    let num = Math.floor(Math.random()*90)+10
    return num
}
let sum = 0
for(let i=0;i<TOTAL_NUMBER;i++){
    sum +=getTwoDigitRandomNumber()
}
let average = sum/TOTAL_NUMBER
console.log("Sum : "+sum+" Average: "+average)




// 5. Use Script & Debug – Unit Conversion
// a. 1ft = 12 in then 42 in = ? ft
const FEET_TO_INCH = 12
console.log("42 inch = "+42/FEET_TO_INCH+" ft")

// b. Rectangular Plot of 60 feet x 40 feet in meters
let length = 60 
let breadth = 40
function areaOfPlotInMeters(length, breadth){
    const FEET_TO_METER = 0.3048
    let area = (length * breadth)*0.3048
    return area
}

console.log("Area of 1 polt : "+areaOfPlotInMeters(length,breadth))

// c. Calculate area of 25 such plots in acres
let totalArea=0
const METER_TO_ACRES = 0.000247105
totalArea =areaOfPlotInMeters(length,breadth)*25
console.log("Area of 25 plots in acres : "+totalArea*METER_TO_ACRES)


