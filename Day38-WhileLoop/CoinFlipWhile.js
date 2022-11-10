let count_tail = 0, count_heads = 0

while(count_heads < 11 && count_tail < 11){
    let flip = Math.floor(Math.random()*10)%2
    if(flip == 0)
        count_heads++
    else
        count_tail++
}

console.log(`Count of heads : ${count_heads}\nCount of tail : ${count_tail}`)
