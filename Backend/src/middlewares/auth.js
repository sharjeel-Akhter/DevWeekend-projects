const jwt = require('jsonwebtoken');

const AppError = require('../utils/appError');

const authenticate = async (req, res, next) => {
    const token = req.cookies.token

    if(!token){
        return next(new AppError('Autentication required', 401))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = decoded

    next()
}

module.exports = authenticate