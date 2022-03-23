
const express = require('express')
const tasks = require('./router/tasks')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()
//middleware, to covert the body of content in js
app.use(express.json())
//routes
app.get('/hello',(req,res)=>{
    res.send('tastk manager')
})

app.use('/api/v1/tasks',tasks)



const port = 3000
const start  = async ()=>{
    try {
     await connectDB(process.env.MONGO_URL)   
     app.listen(port, console.log(`server is lestening on port ${port} ...`))
    } catch (error) {
        console.log(error)
    }
}

start()