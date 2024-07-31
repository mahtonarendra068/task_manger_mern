const mongoose =require('mongoose')

const Task_Schema = new mongoose.Schema({

    taskname :{
        type :String ,
        required:true 
    },
    idDone :{
        type :Boolean,
        required :true 
    }
})

const Task_model = mongoose.model('task_2_data' , Task_Schema );
module.exports = Task_model ; 