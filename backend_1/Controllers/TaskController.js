const Task_model = require("../Models/TaskModel");


const createTask = async (req, res) => {

    const data = req.body;

    try {

        const model = new Task_model(data);
        await model.save();

        res.status(200)
            .json({ message: "Task is created ", success: true })

    }
    catch (er) {

        res.status(500)
            .json({ message: "Failed to create task ", success: false });

    }
}

const fetchAllTask = async(req, res ) =>{

    try{
        const data = await Task_model.find({});
        res.status(200)
        .json({message : "All tasks are successfully fetched " , success : true , data });
    }
    catch(er){

        res.status(500)
        .json({ message : "Failed to fetch all tasks " , success: false })
    }
}


const updateTask = async(req, res ) =>{
    
    const id = req.params.id;
    const body = req.body ;
    const obj = {$set:{...body }}
    await Task_model.findByIdAndUpdate(id, obj);

    try{
        res.status(200)
        .json({message : "Task updated Successfully " , success : true })
    }
    catch(er) {

        res.status(500)
        .json({ message : "failed to delete task " , success : false })
    }
}

const deleteTask =async (req, res ) =>{
    const id = req.params.id;
    const data = req.body; 
    const obj = { $set:{...data }}
    await Task_model.findByIdAndDelete(id , obj);
    try{
        res.status(200)
        .json({message : "Successfully deleted a task " , success: true })
    }
    catch(er) {

        res.status(500)
        .json( {message : "Task is failed to delete" , success : false })
    }
}

module.exports = {
    createTask,
    fetchAllTask,
    updateTask,
    deleteTask
}