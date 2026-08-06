const app = require("./src/app")
const connectDb = require("./db/db")

connectDb()

app.listen(3000, () => {
    console.log("App is running at Port 3000")
})