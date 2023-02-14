const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const User = require("../Models/user")
const {authSchema} = require('../helpers/validationSchema')
const { required } = require('@hapi/joi')
const { signAcessToken, signRefreshToken,verifyRefreshToken } = require("../helpers/JWT_helper")


router.post('/register',async(req,res,next)=>{
    console.log(req.body)
    //res.send("Register Route")
    try {
        //const {name,email,password}= req.body

        const result = await  authSchema.validateAsync(req.body)
        console.log(result)
        const AlreadyExist= await User.findOne({email:result.email})

        if(AlreadyExist) {
            throw createError.Conflict("This email is already registered")
        }

        const  user= new User(result)
        const savedUser = await user.save()// save to database 

        const AccessToken= await signAcessToken(savedUser.id)
        const RefreshToken=await signRefreshToken(savedUser.id)
                    //console.log(savedUser)
            res.json({AccessToken,RefreshToken})

    } catch (error) {
        if (error.isJoi === true) error.status = 422
        next(error)
    }
})

router.post("/login",async(req,res,next)=>{
    //res.send("login Route")
  try {
      const result=await authSchema.validateAsync(req.body)
      const user=await User.findOne({email: result.email})

      if(!user){
        throw createError.NotFound("User not registered")
      }
      const isMatch = user.$isValid(result.password)
      if(!isMatch) {
        throw createError.Unauthorized("Username/Password is not valid")
      }

      const AccessToken=await signAcessToken(user.id)
      const RefreshToken=await signRefreshToken(user.id)
      //res.send(result)
      res.send({AccessToken, RefreshToken})
  } catch (error) {
    if(error.isJoi==true){
        return next(createError.BadRequest("Invalid Username or Password"))
    }
    next(error)
  }
})


router.post("/Refresh-Token",async(req,res,next)=>{
    try {
        const {refreshToken} = req.body
        if(!refreshToken) throw createError.BadRequest()
        const userId = await verifyRefreshToken(refreshToken)

        const accessToken = await signAcessToken(userId)
        const refToken = await signRefreshToken(userId)
        res.send({accessToken: accessToken, refreshToken: refToken})
    } catch (error) {
        next(error)
    }
})

// for further use
router.delete("/logout",async(req,res,next)=>{
    res.send("logout Route")
})



module.exports = router