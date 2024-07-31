
import {toast} from 'react-toastify';
export const notify =(message , type ) =>{
    toast[type](message) ;
}

export const api_url ="http://localhost:8080/tasks/";