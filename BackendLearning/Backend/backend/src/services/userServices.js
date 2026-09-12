const User = require("../models/userModel")
const registerModel = require('../models/registerModel')

const AppError = require('../utils/appError')

const bcrypt = require('bcrypt')


const createUser = async (data) => {
    const user = await registerModel.create({
        Name: data.Name,
        Email: data.Email
    });

    // throw new AppError("User Not Created!", 400)  //Error Handler middleware testing

    return user
}

const getUsers = async () => {
    const users = await registerModel.find({}).select('-password')
    if (!users) {
        throw new AppError("No Users Found!", 404)
    }
    return users;
}

const getUser = async (id) => {
    console.log(id)
    const user = await registerModel.findById(id)
    console.log(user)
    if (!user) {
        throw new AppError("User Not Found!", 404)
    }

    return user

}
const delUser = async (id) => {
    await registerModel.findByIdAndDelete(id)
}
const updateUser = async (id, message) => {
    try {
        const user = await registerModel.findByIdAndUpdate(id, {
            Email: message
        },
            {
                new: true
            })
        if (!user) {
            throw new AppError("User Not Found", 404)
        }

        return user
    } catch (error) {
        throw error
    }
}

const registerUser = async (data) => {
    console.log(data)
    const user = await registerModel.findOne({ username: data.name })
    console.log("USER FOUND", user)

    if (user) {
        throw new AppError("User Already Exists", 409)
    }
    try {
        const hashed = await bcrypt.hash(data.password, 10);
        const newUser = await registerModel.create({
            username: data.name,
            email: data.email,
            password: hashed,
            role: data.role
        })
        console.log(newUser, 'user created')

        return newUser;
    } catch (error) {
        console.log("ERROR:", error);

        if (error instanceof AppError) {
            throw error;
        }

        throw new AppError("Something went wrong", 500);
    }

}

const loginUser = async (data) => {

    const user = await registerModel.findOne({ username: data.name })
    if (!user) {
        throw new AppError("Invalid Credentials", 401)
    }

    const isMatch = await bcrypt.compare(data.password, user.password)

    if (!isMatch) {
        throw new AppError("Something went wrong", 500)
    }

    return user;

}
module.exports = {
    createUser,
    getUsers,
    getUser,
    delUser,
    updateUser,
    registerUser,
    loginUser
}