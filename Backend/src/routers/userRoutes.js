const express = require("express")

const {getUsers, postUser} = require('../controllers/userController')

const router = express.Router()

router.post('/',postUser)
router.get('/', getUsers)

module.exports = router