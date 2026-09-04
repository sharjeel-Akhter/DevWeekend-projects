const express = require("express")


const validator = require('../middlewares/validate')
const {userSchema, paramsScehma, updateUserSchema} = require('../schemas/userSchema')

const {getUsers, postUser, getUser, delUser, updateUser} = require('../controllers/userController')

const router = express.Router()

router.post('/', validator(userSchema, "body") , postUser)
router.get('/', getUsers)
router.get('/:id',validator(paramsScehma, "params"), getUser)
router.delete('/:id',validator(paramsScehma, "params"), delUser)
router.patch('/:id',validator(paramsScehma, "params"), validator(updateUserSchema, 'body'), updateUser)


module.exports = router