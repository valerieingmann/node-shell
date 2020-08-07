const fs = require('fs')

const ls = ()=>{
    
    fs.readdir('./', 'utf8', (err, files) => {
        if (err){
            throw err
        }else {
            process.stdout.write("\n" + files.join('\n') + "\n")
            process.stdout.write("prompt > ")
        }
    })
}
module.exports = ls

