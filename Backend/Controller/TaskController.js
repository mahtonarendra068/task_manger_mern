const task_data = require("../Models/TaskModel");



const createTask =async(req, res ) =>{

    const data = req.body;
    try{
         
        const model = new task_data(data)
        await model.save(); 
        res.status(201)
        .json({message : "Task is created " , success : true }) 

    }catch(er){

        res.status(500)
           .json({ message: "Failed to create task" , success :false })
    }

}

const fetchAllTask = async(req, res)=>{

    try{

        const data = await task_data.find({});
        res.status(200)
        .json({message : "All Tasks " , success : true , data });

    }catch(er){
           
        res.status(500)
        .json({message : "Failed to create task " , success : false }) ;
    }
}
const updateAllTask = async(req, res)=>{
     
    try{
        
        const id = req.params.id;
        const body = req.body;
        const obj = {$set: {...body }}

        await task_data.findByIdAndUpdate(id, obj );
        res.status(200)
        .json({message : "Tasks Updated " , success : true });

    }catch(er){
           
        res.status(500)
        .json({message : "Failed to update task " , success : false }) ;
        console.log("  error " , er );
    }
}
const deleteAllTask = async(req, res)=>{

    try{
        const id = req.params.id;
        
        await task_data.findByIdAndDelete(id);

        res.status(200)
        .json({message : " Tasks deleted suceesfully  " , success : true  });

    }catch(er){
           
        res.status(500)
        .json({message : "Failed to delete task " , success : false }) ;
    }
}

module.exports = { createTask ,
    fetchAllTask ,
    deleteAllTask,
    updateAllTask

}