const asyncHandler = require('../middlewares/asyncHandler');
const User = require('../models/user.model');
const AppError = require('../utils/AppError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.registerUser = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body)
    if (!user) {
        const err = new AppError("Error While Creating User", 400)
        console.log(err)
        return next(err)
    }
    user.password = undefined
    res.status(201).json({
        message: 'User Registered SuccessFully',
        user
    })
})

exports.getUser = asyncHandler(async (req, res, next) => {
    const users = await User.find().select('-password');

    res.status(200).json({
        message: "Users Fetched SuccessFully",
        users
    })
})

exports.loginUser = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({
        $or: [
            { name: req.body.name },
            { email: req.body.email }
        ]
    });
    if (!user) {
        return next(new AppError("User Not Found", 403))
    }
    console.log(user)
    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
        const error = new AppError("Invalid Credentials", 403)
       return next(error)
    }
    const token = jwt.sign({
        id: user._id,
        role:user.role,
    }, process.env.JWT_SECRET)

    user.password = undefined;

    res.cookie("token", token)
    res.status(200).json({
        message: "User Login SuccessFull",
        user
    })
})

exports.signIn = asyncHandler(async (req, res, next) => {
    
})