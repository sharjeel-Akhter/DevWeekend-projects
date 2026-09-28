const express = require('express');

const router = require('./routes/index.js')

const productRoutes = require('./routes/productRoutes')
const errorHandler = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json())
app.use(cookieParser())

app.use('/api/v1', router)

app.use(errorHandler)



module.exports = app;