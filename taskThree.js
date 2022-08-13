function getIntNumber(max){
    return Math.floor(Math.random()*max)
}

function compare(a,b){
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




console.log("the start of the  PROGRAM")

const PromiseCompare = (some_a,some_b) => {
    const promise = new Promise((resolve,rejct)=>{
        setTimeout(()=>{
            let res = compare(some_a,some_b);
            resolve (res)
        },2000)
    })
    return promise
}

const dbSelect = (query) => {
    const promise = new Promise((resolve,rejct)=>{
        setTimeout(()=>{
            console.log(`ДЕЛАЕМ ЗАПРОС ${query} в БД`)
            resolve ('ДАННЫЕ ИЗ БД ')
        },3000)
    })
    return promise
}

// console.log(PromiseCompare)
// console.log(PromiseCompare(20,40))
// const prcompare1 = PromiseCompare(60,40)
// const prcompare2 = PromiseCompare(20,50)

// PromiseCompare(40,40)
//     .then((value) =>{
//         console.log(value.msg)
//     })

//     prcompare1.then((value)=>{
//         console.log(value.msg)
//     })
//     prcompare2.then((value)=>{
//         console.log(value.msg)
//     })
//     .then((value)=>{
//          // ТУТ ИДЕТ ВЫЗОВ dbSelect("SELECT") как достать  resolve dbSelect??????
//          return dbSelect("SELECT") 
//     })    

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { runInContext } = require('node:vm');
const { resolve } = require('node:path')
const { rejects } = require('node:assert')
const guessNumber = getIntNumber(30)
const rl = readline.createInterface({ input, output });

function  MyPlay(some_number) {
    
 
    const my_count =count()
    rl.setPrompt("УКАЖИ ЧИСЛО: ")
    rl.prompt()
    rl.on("line",your_number=>{
        
        if (compare(your_number,some_number).result === false){
            console.log(`${compare(your_number,some_number).msg} это потыка № ${my_count()} `)
            rl.prompt()
        }
        else{
            console.log(`ТЫ угадал с ${my_count()} попытки`)
            rl.close()
        }
            
    })
}

const PromiseMyPlay = (e)=>{
    const promise = new Promise((resolve,reject)=>{
        resolve (MyPlay(e))
    })
    return promise
}

// MyPlay(30)
PromiseMyPlay(40)
    .then(()=>{
        
    })
    // .then(()=>{
        // ТУТ ИДЕТ ВЫЗОВ dbSelect("SELECT") как достать  resolve dbSelect??????
    //     return dbSelect ("SELECT")
    // })
console.log("the END of the  PROGRAM")






