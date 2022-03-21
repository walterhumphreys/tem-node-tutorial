

///another test
const http = require('http')
const { endianness } = require('os')

const server = http.createServer((req,res)=>{
if(req.url ==="/"){
    res.end("home p")
}
if(req.url ==="/about"){
    res.end("home p")
}
res.end("nothing here")
})

server.listen(5000 , ()=>{
    console.log('server is lisrening on 5000 ...')
})
