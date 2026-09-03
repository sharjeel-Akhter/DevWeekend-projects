const User = require("../models/userModel")
const userServices = require("../services/userServices")

const getUsers = async (req, res) => {
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
const getUser = async (req, res) => {
    try {
        const user = await userServices.getUser(req.params.id)

            res.status(200).json({
            message:"user Fetched SuccessFully",
            user
        })
    } catch (error) {
                res.status(404).json({
                    message:"User Not Found"
                })
    }
}
const postUser = async (req, res) => {
    try {
        const user = await userServices.createUser(req.body)

        res.status(201).json({
            message: "User Created",
            user
        })
    } catch (error) {
        console.log("Error Creating User", error);

        res.status(500).json({
            message:"Internal Server Error while creating user"
        })
    }
}

module.exports = {
    getUsers,
    postUser,
    getUser
}