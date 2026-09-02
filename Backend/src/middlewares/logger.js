const fs = require("fs")

const logger = (req, res, next) => {
    fs.appendFile("./logs.txt",`${req.url} ${req.method} ${new Date().toLocaleString()}\n`,
        (err) => {
            if (err) {
                return next(err);
            }
            next();
        }
    );
};

module.exports = logger