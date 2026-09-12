const AppError = require('../utils/appError');

const authorize = (role) => {
    return (req, res, next) => {
        if(req.user.role !== role){
            next(new AppError('Forbidden', 403))
        }
        next()
    }
}

module.exports = authorize