
// we can access the pwd function and store it in a variable like so
const pwd = require('./pwd');
const fs = require('fs')
const ls = require('./ls')
// if a user enters 'pwd' as an argument, we can then call it
pwd()
console.log(ls)
ls()
