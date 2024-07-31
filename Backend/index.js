const express = require('express')
const TaskRouter = require('./Router/TaskRouter');
const bodyParser = require('body-parser');
const cor = require('cors');


const app = express();
require('dotenv').config();
require('./Models/db')

const port = process.env.PORT; 
app.get('/' , (req, res ) =>{

    res.send("hey Narendra Mahto");
})

app.use(cor());
app.use(bodyParser.json());
app.use("/tasks" , TaskRouter);
app.listen(port , () =>{

    console.log("server working !! ");
})