const express = require("express")


const validator = require('../middlewares/validate')
const {userSchema, paramsScehma} = require('../schemas/userSchema')

const {getUsers, postUser, getUser} = require('../controllers/userController')

const router = express.Router()

router.post('/', validator(userSchema, "body") , postUser)
router.get('/', getUsers)
router.get('/:id',validator(paramsScehma, "params"), getUser)

module.exports = router