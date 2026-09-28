const asyncHandler = require('../middlewares/asyncHandler');
const User = require('../models/user.model');
const AppError = require('../utils/AppError')
const bcrypt = require('bcrypt')
exports.registerUser = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body)
    if(!user){
        const err=new AppError("Error While Creating User", 400)
        console.log(err)
        next(err)
    }
    res.status(201).json({
        message:'User Registered SuccessFully',
        user
    })
})

exports.getUser = asyncHandler( async(req, res, next) => {
    const users = await User.find().select('-password');

    res.status(200).json({
        message:"Users Fetched SuccessFully",
        users
    })
})

exports.loginUser = asyncHandler(async (req, res, next) => {
    const user = User.findOne({
        $or:{
            name,
            email
        }
    })

    if(!user){
        const error = new AppError("User Not Found", 403)
        next(error)
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if(!isMatch){
        const error = new AppError("Invalid Credentials", 403)
        next(error)  
    }
})