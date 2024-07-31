// const { Schema } = require("mongoose")

const mongoose = require('mongoose')

const task_model = new mongoose.Schema({

    taskname :{
        type :String ,
        required :true
    },
    isDone :{

        type :Boolean ,
        required : true
    }
})

const task_data =  mongoose.model('task_collection' , task_model )
module.exports = task_data ;