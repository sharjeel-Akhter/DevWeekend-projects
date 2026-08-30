const express = require("express")
const fs = require("fs")
const zlib = require("zlib")
const app = express()

app.use(require('@lennoxruk/express-status-monitor')());

app.use(express.json())

app.get("/", (req, res) => {
    console.log("request sent")
    // fs.readFile('./sample.txt', {encoding: "utf8"}, (err, data)=>{
    //     console.log("reading done")
    //     res.send(data)
    // })

    // const stream = fs.createReadStream('./sample.txt', "utf8");
    // stream.on("data", (chunk)=>res.write(chunk))
    // stream.on("end", ()=>console.log("stream end"))

    fs.createReadStream('./sample.txt').pipe(zlib.createGzip().pipe(fs.createWriteStream('./sample.zip')))

})

app.listen(3000, ()=>{
    console.log("Server Started!")
})