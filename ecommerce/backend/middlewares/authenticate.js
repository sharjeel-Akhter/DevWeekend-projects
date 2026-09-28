const jwt = require('jsonwebtoken')
const asyncHandler = require('./asyncHandler')
const AppError = require('../utils/AppError')

const authenticate = asyncHandler( async (req, res, next) => {
    const token = req.cookies.token
    if(!token){
        return new AppError("Authentication Failed!", 403)
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded

    next()
});

module.exports = authenticate