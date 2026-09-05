const fs = require("fs")

const logger = (req, res, next) => {
    const start = Date.now()
    res.on('finish', () => {
        fs.appendFile("../logs/logs.txt", `${new Date().toLocaleString()} ${req.originalUrl} ${req.method} ${Date.now() - start}ms status:${res.statusCode}\n`,
            (err) => {
                if (err) {
                    return next(err);
                }
            }
        );
    })
    next();
};

module.exports = logger