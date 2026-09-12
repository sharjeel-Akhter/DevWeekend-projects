

const errorHanlder = (err, req, res, next) => {

    req.log.error({
        error: err.message,
        stack: err.stack
    },
    "Request Failed"
)

    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Something went wrong"
    });
}

module.exports = errorHanlder