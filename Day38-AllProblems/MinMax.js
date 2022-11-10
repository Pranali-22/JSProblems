// 1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum
// and the maximum value

function getMinimumAdnMaximum(){
    let numArray = new Array(5)
    for(let i=0;i<5;i++){
        numArray[i] = Math.floor(Math.random()*900)+100
    }

    let min = numArray[0], max =numArray[0]
    for(let i=1;i<5;i++){
        if(min > numArray[i])
            min = numArray[i]
        if(max < numArray[i])
            max = numArray[i]
    }

    console.log("Minimum number : "+min+"\nMaximum number : "+max)
}

console.log("Problem Number 1")
getMinimumAdnMaximum()

