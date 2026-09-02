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

module.exports = {
    createUser,
    getUsers
}