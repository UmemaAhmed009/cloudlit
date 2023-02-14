const express = require('express')
const mongoose = require('mongoose')
//const morgon=require('morgan') 
require('dotenv').config()
const UserRoute = require("./Route/userRoute")
const AuthRoute= require("./Route/authRoute")
const bodyParser = require('body-parser'); 
const url3= 'mongodb://127.0.0.1/user'

const {verifyAccessToken, signRefreshToken} = require('./helpers/JWT_helper') //sign refresh token not used


//start app
const PORT = 3000 || process.env.PORT

mongoose.connect(url3,{useNewUrlParser:true,useUnifiedTopology:true})

const constattt=mongoose.connection
    constattt.on('open',()=>{
    console.log('mongodb connected from main')
   })


const app = express()


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //data recieved should be in JSON


app.get("/",verifyAccessToken,async(req,res,next)=>{
    console.log("Abbasi")
    res.send("Hello from express")
})

//error handler 

// app.use(async (req,res,next)=>{
//     const error =Error("New Error Messge -> Not Found")
//     error.status=404
//     next(error)
// })

app.use((err,req,res,next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    })
})


// Assignment 1 api kay liyay
app.use('/user', UserRoute);


//Authentication Apis kay liyay

app.use("/auth", AuthRoute)


app.listen(PORT, () => {
    console.log(`Ready to Go! on port: ${PORT}`)
})