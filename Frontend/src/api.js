import { api_url } from "./utils"


export const CreateTask = async (taskObj )=>{
    const url = api_url;
    const options = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(taskObj)
    };
    try{
       const result = await fetch(url , options )
       const data = await result.json() ;
       return data ;
    }
    catch(er){
         return er ;
    }
} 

export const GetAllTask = async(req, res) =>{
    const url = `${api_url}allTasks`
    const options ={
        method : 'GET' ,
        headers :{
            'Content-Type' :'application/json'
        }
    }
    try{
        
        const result = await fetch(url , options ) ;
        const data = await  result.json() ; 
        return data ;
    }
    catch(er) {
        return er ;
    }
}

export const deleteTask = async(id) =>{
      const url = `${api_url}/${id}`;
      const options = {
        method : 'DELETE' ,
        headers :{
            'Content-Type' : 'application/json'
        }
      }
    try{
           const result = await fetch(url , options);
           const data = await result.json() ;
           return data ;
    }catch(er){
        return er ;
    }
}


export const updateTaskById = async( id , reqBody)=>{
       
    const url = `${api_url}/${id}`
    const options={
          method:'PUT' ,
          headers :{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(reqBody) 
    };

    try{
           const result = await fetch(url , options)
           const data = await result.json();
           return data ;
    }
    catch(er) {

        return er ;
    }
}
