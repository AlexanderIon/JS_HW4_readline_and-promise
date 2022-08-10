function getIntNumber(max){
    return Math.floor(Math.random()*max)
}

function complit(a,b){
    let res = {result:false,msg:""}
    
    if (a<b){
        
        res.msg = `ТЫ указал МАЛЕНЬКОЕ число`
        }

        
    
    else if (a>b){
        res.msg = `Ты указал БОЛЬШОЕ число`
                    
        
    }
    else {
        res.msg =`Ты угадал`
        res.result =true
    }
    return res
}

function count(start = 1){
    let count = start
    return function (){
        
        return count++

    }
}

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { runInContext } = require('node:vm');
const guessNumber = getIntNumber(30)
const rl = readline.createInterface({ input, output });
const my_count =count()
rl.setPrompt("УКАЖИ ЧИСЛО: ")
rl.prompt()
rl.on("line",your_number=>{
    
    if (complit(your_number,guessNumber).result === false){
        console.log(`${complit(your_number,guessNumber).msg} это потыка № ${my_count()} `)
        rl.prompt()
    }
    else{
        console.log(`ТЫ угадал с ${my_count()} попытки`)
        rl.close()
    }
         
})





