const fs = require("fs")

const logger = (req, res, next) => {
    fs.writeFile('../../logs.txt', `\n ${req.url} ${req.method} ${new Date().toLocaleString()}\n` , (err)=>{
        console.log(err)
    })
    next()
}

module.exports = logger