const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    Name:{
        type:String,
        // required:true,  // commented for checking joi validator middleware working
    },
    Email:{
        type:String,
        // unique:true,
        // required:true,
    }
})

module.exports = mongoose.model("User", userModel)