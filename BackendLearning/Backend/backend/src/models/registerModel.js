const mongoose = require('mongoose')

const registerModel = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:['user', 'admin']
    }
})

module.exports = mongoose.model('Register', registerModel)

