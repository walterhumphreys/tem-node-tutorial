const {readFile,writeFile} = require('fs')

 readFile('./content/first.txt','utf8',(err,result)=> {
if (err){
    console.log('there is an error')
    return
}
///console.log(result)
const results = result;

writeFile('./content/second.text',
`addin from  async ${results}`,
(err,result)=>{
if(err){
  console.log(err)  
  return
}
console.log(result)
}
)
 })
