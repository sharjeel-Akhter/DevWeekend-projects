const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("DB connected SuccessFully"))
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB