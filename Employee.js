//UC1
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random()*10) %2
if(empCheck == IS_ABSENT){
    console.log("Employee is absent")
}else{
    console.log("Employee is present")
}

//UC2
const IS_PART_TIME = 1
const IS_FULL_TIME = 2
const WAGE_PER_HR = 20
const PART_TIME_HRS = 4
const FULL_TIME_HRS = 8

function getWorkingHrs(timeCheck){
    switch(timeCheck){
        case IS_PART_TIME:
            return PART_TIME_HRS
        case IS_FULL_TIME:
            return FULL_TIME_HRS
        default:
            return 0
    }
}



//UC3
let timeCheck = Math.floor(Math.random()*10)%3
let empHrs = getWorkingHrs(timeCheck)
let empWage = empHrs * WAGE_PER_HR
console.log("Employee wage for a day : "+empWage)

//UC4
const WORKING_DAYS = 20
empHrs=0
for(let i=0; i<WORKING_DAYS; i++){
    let timeCheck = Math.floor(Math.random()*10)%3
    empHrs += getWorkingHrs(timeCheck)
}

empWage = empHrs * WAGE_PER_HR
console.log("Total Hours : "+empHrs+"\nEmployee wage for 20 days : "+empWage)


//UC5
const TOTAL_HRS = 60
empHrs = 0
let day=0
while(day<WORKING_DAYS && empHrs <=TOTAL_HRS){
    let timeCheck = Math.floor(Math.random()*10)%3
    empHrs += getWorkingHrs(timeCheck)
    day++
}
empWage = empHrs * WAGE_PER_HR
console.log("\nTotal Hours : "+empHrs+" Total Days : "+day+"\nEmployee wage for 20 days : "+empWage)