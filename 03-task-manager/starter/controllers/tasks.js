const Task = require('../models/task')
const getAllTasks = (req,res)=>{
    res.send('all items from file')
}

const createTasks = async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(400).json({task })
}

const getTasks = (req,res)=>{
    res.json({id:req.params.id})
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
    getTasks,
    updateTasks,
    deleteTasks

}