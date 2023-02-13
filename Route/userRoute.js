const { request } = require('express');
const e = require('express');
const express = require('express');
const user = require('../Models/user');
const router = express.Router();
const User = require('../Models/user');


router.post('/register', async(req,res,next)=>{
    const user = new User({
        email:req.body.email,
        name:req.body.name})
    try{  
        const savedUser = await user.save()// save to database 
        console.log(savedUser)
        res.json(savedUser)

         }

    catch(error){

       res.send("user not saved")
    }
})

router.get('/finder', async(req,res,next)=>{
    try{
        //console.log("Get the request")

        const users= await User.find()
        res.json(users)
        res.send("get the request")
    }
    catch(err){
        res.send("Error " +err)
    }

})

router.get('/:id', async(req,res,next)=>{
    try{
        //console.log("Get the request")

        const users= await User.findById(req.params.id)
        res.json(users)
        res.send("get the request")
    }
    catch(err){
        res.send("Error " +err)
    }

})

router.put('/:id', async(req,res,next)=>{
try{

    const users= await User.findById(req.params.id)
    users.name=req.body.name
    const savedUser = await users.save()// save to database 
    res.json(savedUser)
}catch(err){
    res.send("Error" +err)
}
})

module.exports = router