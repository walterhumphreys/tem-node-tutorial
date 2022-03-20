const http = require('http')
const { endianness } = require('os')

const server = http.createServer((reg,res)=>{
    
  //  res.write('my first node')
  //  res.end()
    if(reg.url ==='/'){
        res.end('welcome to home page')
    }
    res.end(`opps
    <h1>html as wel </h1>
    `)
})

server.listen(5000)