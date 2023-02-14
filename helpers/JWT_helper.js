const JWT= require('jsonwebtoken')
const createError=require('http-errors')
// const { error } = require('@hapi/joi/lib/base')
// const { token } = require('morgan')

module.exports= {
    signAcessToken: (userID) =>
    {
        return new Promise((resolve,reject) => 
        {
            const payload = {
              //name:  "This is a payload"
            } 
            const secret =process.env.ACCESS_TOKEN_SECRET
            const option={
                expiresIn: "120s",
                issuer: 'pickurpage.com',
                audience: userID,

            }
            
            JWT.sign(payload,secret,option, (error,token) =>{
                if(error) {
                    console.log(error.message)
                
                    return reject (createError.InternalServerError())
                }
                resolve(token)
        })
    })

    },
    
    verifyAccessToken: (req, res, next) => {
        console.log(req)

        if (!req.headers['authorization']) return next(createError.Unauthorized())
        const authHeader = req.headers['authorization']
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]
        JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) {
                if(err.name === 'JsonWebTokenError'){
                    return next(createError.Unauthorized())
                } else {
                    return next(createError.Unauthorized(err.message))
                }
            }
            req.payload = payload
            next()
        })
    }
    
    // verifyAccessToken: (req, res, next) => {
    //     console.log(req.body.authorization)
    //     if (!req.body.authorization) return next(createError.Unauthorized())
    //     const authHeader = req.body.authorization
    //     const bearerToken = authHeader.split(' ')
    //     const token = bearerToken[1]
    //     console.log(token)
    //     JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    //         if (err) {
    //             // if(err.name === 'JsonWebTokenError'){
    //             //     return next(createError.Unauthorized())
    //             // } else {
    //                 return next(createError.Unauthorized(err.message))
    //           //  }
    //         }
    //         req.payload = payload
    //         next()
    //     })
    // }

    ,
    signRefreshToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {}
            const secret = process.env.REFRESH_TOKEN_SECRET
            const options = {
                expiresIn: '1y',
                issuer: 'pickurpage.com',
                audience: userId,
            }
            JWT.sign(payload, secret, options, (err, token) => {
                if(err){
                    console.log(err.message)
                    return reject(createError.InternalServerError())
                }
                resolve(token)
            })
        })
    },
    
    verifyRefreshToken: (refreshToken) => {
        return new Promise((resolve, reject) => {
            JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
                if (err) return reject(createError.Unauthorized())
                const userId = payload.aud
                resolve(userId)
            }) 
        })
    }
}