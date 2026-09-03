const joi = require("joi")

const userSchema = joi.object({
    Name: joi.string().required().min(3),
    Email: joi.string().email().required()
})

const paramsScehma = joi.object({
    id:joi.string().min(3).required()
})

module.exports = {
    userSchema,
    paramsScehma
}