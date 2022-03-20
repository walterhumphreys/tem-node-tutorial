// access module info by using require  then we can access it all
// sayhi is a function that takes name parameter, name.john from utils files 
const name = require('./2-names');
const sayHi = require('./3-utils')
const data = require('./4-module-alternative')
sayHi('walter')
sayHi(name.john)
console.log(data);
require('./5-functiononly');