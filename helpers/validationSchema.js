const joi=require("@hapi/joi")
const user = require("../Models/user")

const authSchema=joi.object(
    {
        name: joi.string().required(),
        email: joi.string().email().lowercase().required(),
        password: joi.string().min(8).required()
    }
)


module.exports={
    authSchema
}