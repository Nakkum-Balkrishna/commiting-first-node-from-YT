const {readFileSync , writeFileSync} = require('fs')

const first  = readFileSync('./content/first.txt', 'utf8');
const second  = readFileSync('./content/subfolder/test.txt', 'utf8');
console.log(first,second);

writeFileSync('./content/result.txt',`Hi there this value is written from the calling function having values : ${first} , ${second}`,{flag : 'a'});
//falg is used to append