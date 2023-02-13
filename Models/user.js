const mongoose = require('mongoose')

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
    username:{
        type:String,
        require: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    }

})

module.exports = mongoose.model('user',UserSchema)