const moongoose = require("moongoose")

async function connectDb() {
    await moongoose.connect("mongodb+srv://user_sh:aE6cE0dlCsqrZwQj@cluster0.zk9crpi.mongodb.net/halley")
    console.log("Connect to Db")
}

module.exports = connectDb