const express = require("express")
const User = require("../models/userModel")

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const user = await User.create({
            Name: req.body.Name,
            Email: req.body.Email
        })
        res.status(201).json({
            message: "User Created",
            user
        })
    } catch (error) {
        console.log("Error Creating User", error)
    }

})

module.exports = router