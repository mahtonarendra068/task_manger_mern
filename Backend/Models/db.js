const mongoose  = require('mongoose')
const mongo_db =process.env.MONGO_CON;
mongoose.connect(mongo_db)
.then(() =>{
    console.log( "connected db ! ")
})
.catch((er) =>{

    console.log("error aa gya bhai " , er );
}
)