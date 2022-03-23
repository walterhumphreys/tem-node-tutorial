const Task = require('../models/task')

const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(400).json({tasks }) 
    } catch (error) {
       res.status(500).json({msg:error}) 
    }
}

const createTasks = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(400).json({task }) 
    } catch (error) {
       res.status(500).json({msg:error}) 
    }
 
}


const getTask = async (req,res)=>{
try {
    const {id: taskID} = req.params
    const task = await Task.findOne({_id:taskID});
    if(!task){
        return res.status(400).json({msg:`no task with id ${taskID}`})
    }

    res.status(200).json({task})   

} catch (error) {
    res.status(500).json({msg:error})   
}
   
}

const updateTasks = (req,res)=>{
    res.send('update tasks')
}

const deleteTasks = (req,res)=>{
    res.send('delete tasks')
}
module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTasks,
    deleteTasks

}