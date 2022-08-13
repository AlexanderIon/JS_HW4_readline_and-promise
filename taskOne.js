function checkedPassword(my_pw = 0,write_down_pw = 0){
    let password = write_down_pw
    return function (password) {
    
    
        if ( password === my_pw ){
            return true
        }
        else {
            
            return false
        }
    }
}

// const checked = checkedPassword("3r2")
// console.log(checked("r2"))


const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { runInContext } = require('node:vm');
const rl = readline.createInterface({ input, output });
const w = checkedPassword("q")
// console.log(w())

rl.setPrompt("WRITE DOWN password: ")
rl.prompt()
rl.on('line', answer=>{
    
    
    if ( w(answer) === true){ 
        console.log("УДАЧНО")       
        rl.close()
        //console.log(res)
    }
    else {
        console.log()
        rl.prompt()
    }
} )