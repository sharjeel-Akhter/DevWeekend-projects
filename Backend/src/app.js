const express = require('express');
const logger = require('./middlewares/logger')
const userRoutes = require('./routes/userRoutes')
const errorHandler = require('./middlewares/errorHandler')
const requestLogger = require('./middlewares/requestLogger')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(logger)
app.use(requestLogger)

app.use("/users", userRoutes)


app.use(errorHandler)

module.exports = app