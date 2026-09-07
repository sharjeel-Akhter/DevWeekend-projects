const User = require("../models/userModel")
const userServices = require("../services/userServices")

const logger = require('../utils/logger')
const jwt = require("jsonwebtoken")

const getUsers = async (req, res, next) => {
    try {
        const users = await userServices.getUsers()
        logger.debug("Debug message");
        logger.info("Info message");
        logger.warn("Warning message");
        logger.error("Error message");

        res.status(200).json({
            message:"users Fetched SuccessFully",
            users
        })
    } catch (error) {
        console.log("Error", error)

        res.status(500).json({
            message:"Something went wrong in finding users"
        })
    } 
}
const getUser = async (req, res, next) => {

    try {
        const user = await userServices.getUser(req.params.id)

            res.status(200).json({
            message:"user Fetched SuccessFully",
            user
        })
    } catch (error) {
                next(error)
    }
}
const postUser = async (req, res, next) => {
    try {
        const user = await userServices.createUser(req.body)

        res.status(201).json({
            message: "User Created",
            user
        })

    } catch (error) {
        console.log("Error Creating User", error);

        next(error)
        // res.status(500).json({
        //     message:"Internal Server Error while creating user"
        // })
    }
}
const delUser = async (req, res, next) => {
    try {
        await userServices.delUser(req.params.id)

        res.status(200).json({
            message:"User Deleted SuccessFully"
        })
    } catch (error) {
        next(error)
    }
}
const updateUser = async (req, res, next) => {
    try {
       const user =  await userServices.updateUser(req.params.id, req.body.Email)
        res.status(200).json({
            message:"User updated Successfully",
            user
        })
    } catch (error) {
        next(error)
    }
}

const registerUser = async (req, res, next) => {
   const user =  await userServices.registerUser(req.body)

    res.status(201).json({
        message:"User Registered SuccessFully",
        Username:user.userName,
        Email:user.Email
    })
}

const loginUser = async (req, res, next) => {

    const user = await userServices.loginUser(req.body)

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message:"User Login Successfully",
        id:user._id,
        name:user.userName,
        email:user.Email
    })
}

module.exports = {
    getUsers,
    postUser,
    getUser,
    delUser,
    updateUser,
    registerUser,
    loginUser
}