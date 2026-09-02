const express = require('express');
const logger = require('./middlewares/logger')
const userRoutes = require('./routers/userRoutes')

const app = express()
app.use(express.json())

app.use(logger)

app.use("/users", userRoutes)
// app.use("/task", taskRoutes)

module.exports = app