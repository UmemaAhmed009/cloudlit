const mongoose = require('mongoose')
const bycrpt=require('bcrypt')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    }

})


UserSchema.pre('save',async function(next){
try {
    const salt= await bycrpt.genSalt(10) //decides the number of rounds, should be greater than 8
    const hashpassword=await bycrpt.hash(this.password,salt)
    this.password=hashpassword
    next()  //because its a middleware so we need to call next 
} catch (error) {
    next(error)
}
})

UserSchema.methods.isValidPassword = async function (password) {
    try {
        return await bycrpt.compare(password, this.password)
    } catch (error) {
        throw error
    }
}

module.exports = mongoose.model('user',UserSchema)