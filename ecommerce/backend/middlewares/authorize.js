const AppError = require("../utils/AppError");
const asyncHandler = require("./asyncHandler");


const authorize = asyncHandler(async(req, res, next) => {
    const user = req.user

    if(user.role !== 'admin'){
        return next(new AppError("Access UnAuthorized", 403))
    }

    next()
})

module.exports = authorize