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
    const users = await registerModel.find({})
    if(!users){
        throw new AppError("No Users Found!", 404)
    }
    return users;
}

const getUser = async (id) => {

        const user =  await registerModel.findById(id)

        if(!user){
            throw new AppError("User Not Found!", 404)
        }

        return user

}
const delUser = async (id) => {
    await registerModel.findByIdAndDelete(id)
}
const updateUser = async (id, message) => {
    try {
       const user =  await registerModel.findByIdAndUpdate(id, {
            Email:message
        },
    {
        new:true
    }) 
        if(!user){
            throw new AppError("User Not Found", 404)
        }

        return user
    } catch (error) {
        throw error
    }
}

const registerUser = async (data) => {
    const hashed = await bcrypt.hash(data.password, 10);
    const user = await registerModel.create({
        username: data.username,
        email: data.email,
        password: hashed,
        role:data.role
    })

    return user;
}

const loginUser = async (data) => {
    const { username, email, password, role='user' } = data;

    const user = await registerModel.findOne({
        $or: [
            { username },
            { email },
        ]
    })

    if(!user){
        throw new AppError("Invalid Credentials", 401)
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new AppError("Invalid Credentials", 401)
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