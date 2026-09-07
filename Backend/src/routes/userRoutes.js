const express = require("express")


const validator = require('../middlewares/validate')
const authenticate = require('../middlewares/auth')
const {userSchema, paramsScehma, updateUserSchema} = require('../schemas/userSchema')

const {getUsers, postUser, getUser, delUser, updateUser, registerUser, loginUser} = require('../controllers/userController')

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.delete('/:id',validator(paramsScehma, "params"), authenticate, delUser)
// router.get('/', authenticate(), getUsers)

// router.post('/', validator(userSchema, "body") , postUser)
// router.get('/:id',validator(paramsScehma, "params"), getUser)
// router.patch('/:id',validator(paramsScehma, "params"), validator(updateUserSchema, 'body'), updateUser)


module.exports = router