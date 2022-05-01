const names = require('./names')
const sayHi = require('./utils')
const data = require('./moduleType2')
require('./anonymous')

sayHi(names.name1)
sayHi(names.name2)
sayHi(names.name3)

console.log(data);
console.log(data.singlePerson);
console.log(data.items[0]);