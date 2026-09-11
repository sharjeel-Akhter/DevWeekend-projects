const express = require("express")


const validator = require('../middlewares/validate')
const authenticate = require('../middlewares/authentication')
const authorize = require('../middlewares/authorization')
const {userSchema, paramsScehma, updateUserSchema} = require('../schemas/userSchema')

const {getUsers, postUser, getUser, delUser, updateUser, registerUser, loginUser} = require('../controllers/userController')

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.delete('/:id',validator(paramsScehma, "params"), authenticate, authorize('admin'), delUser)
router.get('/', authenticate, authorize('admin'), getUsers)
router.get('/:id',validator(paramsScehma, "params"), authenticate, getUser)
router.patch('/:id',validator(paramsScehma, "params"), validator(updateUserSchema, 'body'), authenticate, authorize('user'), updateUser)
router.post('/', validator(userSchema, "body"), authorize('admin'), postUser)


module.exports = router