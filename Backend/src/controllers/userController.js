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
            message:"Something went wrong"
        })
    } 
}

const postUser = async (req, res) => {
    try {
        const user = await userServices.createUser(req.body)

        console.log(user)

        res.status(201).json({
            message: "User Created",
            user
        })
    } catch (error) {
        console.log("Error Creating User", error);

        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

module.exports = {
    getUsers,
    postUser
}