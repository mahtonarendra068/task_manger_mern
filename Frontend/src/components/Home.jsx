import React, { useEffect, useState } from 'react'
import { FaPlus, FaSearch, FaCheck, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { CreateTask, deleteTask, GetAllTask, updateTaskById } from '../api';
import { notify } from '../utils';
// import { CreateTask } from '../Api';

function Home() {

  const [input, setInput] = useState('');
   const[tasks, settasks] = useState([]);
  const [copyTask, setcopyTask] = useState([]);
  const[updateTask , setupdateTask ] = useState(null)
 

 const handleTask =()=>{

  if( updateTask && input ){
            
    const obj ={
      taskname :input ,
      isDone :updateTask.isDone ,
      _id :updateTask._id 
    }
    handleupdateTask(obj) ;
    setupdateTask(null)
  }
  else if( updateTask === null && input ){
         handleAddTask() ;
  }
  setInput('')
 }

 useEffect(() =>{
  if(updateTask){
    setInput(updateTask.taskname)
  }
 } ,[updateTask])

  const handleAddTask = async () => {
    const obj = {
      taskname: input,
      idDone: false
    }
    try {
      const { success, message } = await CreateTask(obj);
      if (success) {
        // show success toast 
        notify(message, 'success')
      } else {
        // show error toast 
        notify(message, "error")
      }
 
      fetchAllTasks()

    }
    catch (er) {
      console.log(er);
      notify(message, ' failed to create task ')
    }
  }

  const fetchAllTasks = async () => {
    try {
      const { data } = await GetAllTask();
      settasks(data);
      setcopyTask(data);
      // console.log(data);
    }
     catch (er) {
      console.log(er);
      notify('failed to create task ', 'error')
    }
  }
  useEffect(() => {
    fetchAllTasks()
  }, [])


  const deleteHandleTask = async (id) => {
    try {
      const { success, message } = await deleteTask(id);
      if (success) {
        notify(message, 'success')
      } else {
        notify(message, 'error')
      }
      fetchAllTasks()
    }
    catch (er) {
      console.log(er);
      notify('Failed to Delete task', 'error')
    }

  }

  const handleupdateTask = async(obj) =>{

    const {_id , isDone , taskname} = obj ;
    const objj={
      taskname,
      isDone
    }
    try{
      const{ success , message} = await updateTaskById( _id, objj );
      if( success ){
        notify(message , 'success')
      }
      else {
        notify(message , 'error')
      }
      fetchAllTasks() ;
    }
    catch(er){
      console.log(er) 
      notify('failed to create task', 'error') 
    }
  }

   const handleSearch =(e) =>{
        const term = e.target.value.toLowerCase() ;
        const oldTasks =[...copyTask];
        const result = oldTasks.filter((i) => i.taskname.toLowerCase().includes(term));
        // console.log(result)
        settasks(result)
      }
 
  return (

    <div className='max-w-screen-2xl container mx-auto '>
      <h1 className=' font-extrabold text-3xl text-center mt-7'> Task Manager </h1>

      <div className=' flex justify-center gap-5 items-center w-full pt-6'>

        <div className='w-[50%] p-2 flex justify-center items-center '>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='p-2 h-[40px]  focus:outline-none border 
              border-gray-300  rounded-l-md' type="text" placeholder='Add a new task ' />

          <button
            onClick={handleTask}
            className=' p-3 h-[40px] border border-green-500  rounded-r-lg relative  bg-green-500'
          ><FaPlus /> </button>
        </div>

        <div className='w-[50%] p-2  flex justify-center items-center' >
          <input onChange={handleSearch} className='border h-[40px]  border-gray-300 rounded-l-md p-2 focus:outline-none  ' type="text" placeholder='Search Task ' />
          <button  className=' p-3 h-[40px]  rounded-r-lg relative  bg-green-500' > <FaSearch /></button>
        </div>

      </div>



      <div className='w-full flex flex-col gap-3 justify-center items-center mt-6'>

        {
          tasks.map((item) => (

            <div key={item._id} className='flex  justify-center items-center w-full max-w-md'>
              <span className={`h-[40px] border border-gray-300 w-[60%] flex items-center pl-2 rounded-l-md ${ item.idDone?'':""}`}>
                {item.taskname}
              </span>
              <div className='flex gap-[1px] border border-green-300 rounded-r-md'>
                <button aria-label='Complete' className='h-[40px] bg-green-500 p-3'>
                  <FaCheck />
                </button>
                <button onClick={()=>{ setupdateTask(item) }}  aria-label='Edit' className='h-[40px] bg-green-500 p-3'>
                  <FaPencilAlt />
                </button>
                <button onClick={() => deleteHandleTask(item._id)} aria-label='Delete' className='h-[40px] bg-green-500 p-3 rounded-r-md'>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        }

      </div>



      <ToastContainer

        position='top-left'
        autoClose={3000}
        hideProgressBar={false}
      />

    </div>

  )
}

export default Home
