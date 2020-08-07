const fs = require('fs')



const cat = (path) => {
    
    fs.readFile(path, (err, data) => {
    if (err) throw err;
    process.stdout.write(data)
  });
}

module.exports = cat;