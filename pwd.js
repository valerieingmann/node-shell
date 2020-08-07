const ls = require("./ls")

module.exports = function () {
    // pwd code
    

    process.stdin.on('data', (data) => {
        
        const cmd = data.toString().trim()
        if (cmd==='pwd') process.stdout.write(process.cwd())

        else if(cmd === "ls")  {
            ls();
        } else {
            process.stdout.write('You typed: ' + cmd)
            process.stdout.write('\nprompt > ')
        }
        
        
    })
    
  }
