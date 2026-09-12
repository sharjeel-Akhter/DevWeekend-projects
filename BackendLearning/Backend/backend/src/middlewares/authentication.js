const jwt = require('jsonwebtoken');

const AppError = require('../utils/appError');

const authenticate = (req, res, next) => {
    try {
        const token = req.cookies.token

        //console.log("TOKEN:", token)

        if (!token) {
            return next(new AppError('Authentication required', 401))
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        //console.log("DECODED:", decoded)

        req.user = decoded

        next()
    } catch (error) {
        console.log("JWT ERROR:", error.message)
        next(new AppError('Invalid or expired token', 401))
    }
}

module.exports = authenticate