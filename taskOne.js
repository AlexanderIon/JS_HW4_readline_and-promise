function checkedPassword(a){
    let password = a
    return function () {
    
    
        if (a === "1" ){
            return true
        }
        else {
            return false
        }
    }
}

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { runInContext } = require('node:vm');

const rl = readline.createInterface({ input, output });




// const w = checkedPassword("qqqq")
// console.log(w())

rl.setPrompt("WRITE DOWN password: ")
rl.prompt()
rl.on('line', answer=>{
    let res = checkedPassword(answer)
    
    if ( res() === true){ 
        console.log("УДАЧНО")       
        rl.close()
        // console.log(res)
    }
    else {
        rl.prompt()
    }
} )