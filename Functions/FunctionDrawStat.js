function drawStat(curStat, maxStat){
    let string = [];
    let minMax = '';
    let j = 0;
    for (i = 0 ; i < curStat; i++){
        string.push('◼');
        j++;
    }
    for (i = j; i < maxStat; i++){
        string.push('◻');
    }
    curStat < 10 ? minMax = `0${curStat}/${maxStat}` : minMax = `${curStat}/${maxStat}`;
      
    console.log(string.join(' ') + ` | ${minMax}`);
}

function drawStatPerc(curStat){
    if (0 < curStat && curStat < 10){
        curStat = Math.ceil(((curStat/100) * 10))
    } else {
        curStat = Math.floor(((curStat/100) * 10))
    }
    let minMax = '';
    let string = [];
    let j = 0;

    for (i = 0 ; i < curStat; i++){
        string.push('◼');
        j++;
    }
    for (i = j; i < 10; i++){
        string.push('◻');
    }
    curStat < 10 ? minMax = `0${curStat}/10` : minMax = `${curStat}/10`;
      
    console.log(string.join(' ') + ` | ${minMax}`);
}



let max = 100;
let cont = 0;
while (cont <= max){
    console.log(cont)
    drawStatPerc(cont)
    cont += 1;
}

