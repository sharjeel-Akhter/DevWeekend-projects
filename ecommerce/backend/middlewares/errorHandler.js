const AppError = require("../utils/AppError");

const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500

    if(err.name === 'CastError'){
        const message = `Resource not found, ${err.message}`;
        err =  new AppError(message, 400)
    }
    res.status(err.statusCode).json({
        success: false,
        message: err.message || "Internal SERVER Error"
    })
}

module.exports = errorHandler