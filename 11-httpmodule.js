const http = require('http')
const { endianness } = require('os')

const servers = http.createServer((reg,res)=>{
    
  //  res.write('my first node')
  //  res.end()
    if(reg.url ==='/'){
        res.end('welcome to home page')
    }
    res.end(`opps
    <h1>html as wel </h1>
    `)
})

servers.listen(5000)


///another test
const http = require('http')
const { endianness } = require('os')

const server = http.createServer((reg,res)=>{
  console.log('request event')
  res.end('hello world')
})

server.listen(5000 , ()=>{
    console.log('server is lisrening on 5000 ...')
})