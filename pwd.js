const ls = require("./ls")
const cat = require("./cat");

module.exports = function () {
    // pwd code
    

    process.stdin.on('data', (data) => {
        
        const cmd = data.toString().trim()
        if (cmd==='pwd') process.stdout.write(process.cwd())

        else if(cmd === "ls")  {
            ls();
        } else if(cmd === "cat")  {
            
            cat(process.cwd());
        } else {
            process.stdout.write('You typed: ' + cmd)
            process.stdout.write('\nprompt > ')
        }
        
        
    })
    
  }
