const mongoose = require("mongoose")

async function  connectDB() {
    try {
        await mongoose.connect(process.env.DB_KEY)
        .then(()=>console.log("Database Connected"))
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB