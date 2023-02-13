const express = require('express')
const mongoose = require('mongoose')
//const url = 'mongodb://localhost/AlienDBex'
const UserRoute = require("./Route/userRoute")
const bodyParser = require('body-parser'); 
const url3= 'mongodb://127.0.0.1/user'

const connectDB = require('./config/dbconn')

mongoose.connect(url3,{useNewUrlParser:true,useUnifiedTopology:true})

const constattt=mongoose.connection
    constattt.on('open',()=>{
    console.log('mongodb connected')
   })

//connectDB()
const app = express()


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //data recieved should be in JSON

app.use('/user', UserRoute);

//error handler 
app.use((err,req,res,next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    })
})

//start app
const PORT = 3000

app.listen(PORT, () => {
    console.log('Server running on port 3000')
})