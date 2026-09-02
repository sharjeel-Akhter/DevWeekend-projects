const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        unique:true,
        required:true,
    }
})

module.exports = mongoose.model("User", userModel)