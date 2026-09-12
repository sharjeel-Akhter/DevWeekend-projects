require("dotenv").config({ quiet: true })

const app = require("./src/app")
const connectDB = require("./src/DB/db")
const port = process.env.Port || 3000

connectDB()

app.listen(port, ()=>{
    console.log(`server is listening at ${port}`)
})