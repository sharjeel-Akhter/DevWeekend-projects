const User = require("../models/userModel")

const AppError = require('../utils/appError')

const createUser = async (data) => {
    // const user = await User.create({
    //     Name: data.Name,
    //     Email: data.Email
    // });
  
        throw new AppError("User Not Created!", 400)
    
    // return user
}

const getUsers = async () => {
    const users = await User.find({})
    if(!users){
        throw new AppError("No Users Found!", 404)
    }
    return users;
}

const getUser = async (id) => {

        const user =  await User.findById(id)

        if(!user){
            throw new AppError("User Not Found!", 404)
        }

        return user

}

module.exports = {
    createUser,
    getUsers,
    getUser
}