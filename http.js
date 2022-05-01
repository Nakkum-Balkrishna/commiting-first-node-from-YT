const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("welcome to the home page krishna")
    }
    else if(req.url === "/about"){
        res.end("Hey welcome to the about page")
    }
    res.end(`oops unknown page  
    <h1>Navigate to home page</h1>
    <a href="/">Home</a>
    `)
})

server.listen(5000)