const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const userModel = new mongoose.Schema({
    name:{
        type:String,
        unique:[true, "this name already exists"]
    },
    email:{
        type:String,
        unique:[true, "this email already exists"]
    },
    password:{
        type:String,
        required:[true, "Password must be entered"]
    },
    url:{
        type:String
    },
    role:{
        type:String,
        enum:['user', 'admin'],
        default:'user'
    }
}, { timestamps:true })

userModel.pre('save', async function(){
    if(!this.isModified('password'))return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});


module.exports = mongoose.model("User", userModel)