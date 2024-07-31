const { createTask, fetchAllTask , updateAllTask ,deleteAllTask} = require('../Controller/TaskController');

const router = require('express').Router();

router.get('/' , fetchAllTask );


router.post('/' , createTask );
router.put('/:id' , updateAllTask );
router.delete('/:id' , deleteAllTask );
 
module.exports = router ;