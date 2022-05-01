const os = require('os')

// info about current user  
const user = os.userInfo()
console.log(user);

//method returns the sysem uptime in seconds 
console.log(`the systm uptime is ${os.uptime()} seconds`)

const currnetOs = {
    name : os.type(),
    release: os.release,
    totalmem: os.totalmem,
    freemem: os.freemem
}

console.log(currnetOs)


// path module 

const path = require('path')
console.log(path.sep);

const filepath = path.join('/content/','subfolder','test.txt')
console.log(filepath);

const base = path.basename(filepath)

console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')

console.log(absolute);