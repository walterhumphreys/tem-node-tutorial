const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name:{
      type:String,
      required:[true, 'cant be empty'] ,
      trim:true,
      maxlenght:[20, 'name cant be more than 20 char']
    } ,
    completed:{
        type:Boolean,
        default:false
    },
})

module.exports = mongoose.model('Task', TaskSchema)