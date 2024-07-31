const express = require('express');
const cors = require('cors')
const taskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const app = express() ;

require('dotenv').config() ;
require('./Models/db')
const port = process.env.PORT 
app.get('/' , (req, res ) =>{

    res.send('hey Narendra ')
})

app.use(cors());
app.use(bodyParser.json());
app.use('/tasks' , taskRouter );

app.listen(port , () =>{
    console.log( "srever is working !! ")
})