const joi = require("joi")

const userSchema = joi.object({
    Name: joi.string().required().min(3),
    Email: joi.string().email().required()
})

module.exports = userSchema