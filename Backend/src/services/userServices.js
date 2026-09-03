const User = require("../models/userModel")

const createUser = async (data) => {
    const user = await User.create({
        Name: data.Name,
        Email: data.Email
    });
    return user
}

const getUsers = async () => {
    const users = await User.find({})

    return users;
}

const getUser = async (id) => {

        const user =  await User.findById(id)

        if(!user){
            throw new Error("User Not Found!")
        }

        return user

}

module.exports = {
    createUser,
    getUsers,
    getUser
}