let initial_sum = 100, win = 0, bets = 0

while(initial_sum>0 && initial_sum<200){
    let race = Math.floor(Math.random()*10)%2
    if(race == 0){
        initial_sum++
        win++
    }
    else{
        initial_sum--
        bets++
    }
}

console.log(`Sum after race : ${initial_sum} \nNumber of wins : ${win} \nNumber of bets : ${bets}`)