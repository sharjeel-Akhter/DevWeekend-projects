require("dotenv").config({quiet:true})
const mongoose = require("mongoose")

async function connectDb() {
    try{
        await mongoose.connect(process.env.DB_KEY)
        console.log("DB Connected Successfully")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDb