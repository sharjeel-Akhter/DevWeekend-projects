const mongoose = require('mongoose')

const registerModel = new mongoose.Schema({
    userName:String,
    Email:String,
    password:String
})

module.exports = mongoose.model('Register', registerModel)

