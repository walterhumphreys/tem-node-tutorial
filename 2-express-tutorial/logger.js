logs = (reg,res,next)=>{
   
    const method = reg.method
    const date = new Date().getFullYear()
    const url = reg.url
    console.log(method, date,url)
    
    next()

}

module.exports = logs