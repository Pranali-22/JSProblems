
// 4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

let flip = Math.floor(Math.random()*10)%2
if(flip==0)
    console.log("It's a head")
else
    console.log("It's a tail")