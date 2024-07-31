const { createTask, fetchAllTask, updateTask, deleteTask } = require('../Controllers/TaskController');

const router = require('express').Router() ;

// to get all tasks 
router.get('/allTasks', fetchAllTask) 

// to create a task
router.post('/', createTask )

// To delete task 
router.delete('/:id' ,deleteTask)

// To Update task 
router.put('/:id' , updateTask)

module.exports = router ; 