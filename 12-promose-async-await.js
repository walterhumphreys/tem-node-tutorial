
const {readFile, writeFile} = require('fs').promises

/* optional
const {readFile, writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
const start = async() =>{

    try {
     const first = await readFilePromise('./content/first.txt', 'utf-8')   
     const second = await readFilePromise('./content/second.txt','utf8') 
     await writeFilePromise('./content/promises-result',
    `this is new way ${first} and ${second}`
    )
     console.log(first, second)  
    } catch (error) {
      console.log(error)  
    }
}

*/
const start = async() =>{

    try {
     const first = await readFile('./content/first.txt', 'utf-8')   
     const second = await readFile('./content/second.txt','utf8') 
     await writeFile('./content/promises-result',
    `this is new way ${first} and ${second}`, {flag: 'a'}
    )
     console.log(first, second)  
    } catch (error) {
      console.log(error)  
    }
}

start()
/*
old way promise
const getText = (path) =>{
    return new Promise((resolve, reject)=>{
        readFile(path,'utf8',(err,data)=>{
        if(err){
            reject(err)
        }else{
        resolve(data)
    }
    })
})
}
//getText('./content/first.txt')
//.then((result)=>console.log(result))
//.catch((err)=>console.log(err))
*/