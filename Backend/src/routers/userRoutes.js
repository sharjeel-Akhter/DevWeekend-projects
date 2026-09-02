const express = require("express")


const validator = require('../middlewares/validate')
const userSchema = require('../schemas/userSchema')

const {getUsers, postUser} = require('../controllers/userController')

const router = express.Router()

router.post('/', validator(userSchema) , postUser)
router.get('/', getUsers)

module.exports = router