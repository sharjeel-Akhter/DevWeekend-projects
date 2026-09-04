const User = require("../models/userModel")
const userServices = require("../services/userServices")

const getUsers = async (req, res, next) => {
    try {
        const users = await userServices.getUsers()

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

module.exports = {
    getUsers,
    postUser,
    getUser,
    delUser,
    updateUser
}