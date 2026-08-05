const mongoose = require("mongoose")

async function connectDb() {
    await mongoose.connect("mongodb://user_sh1:Vpr7Pjmc3JaZmq6Z@ac-7vavg2r-shard-00-00.zk9crpi.mongodb.net:27017,ac-7vavg2r-shard-00-01.zk9crpi.mongodb.net:27017,ac-7vavg2r-shard-00-02.zk9crpi.mongodb.net:27017/halley?ssl=true&replicaSet=atlas-oozpxc-shard-0&authSource=admin&appName=Cluster0")
    console.log("Connect to Db")
}

module.exports = connectDb