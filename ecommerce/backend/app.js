const express = require('express');
const { createProduct, getProducts } = require('./controllers/productController');
const router = express.Router()
const app = express();

app.use(express.json())
app.use('/api/v1', router)

router.route('/product')
    .get(getProducts)
    .post(createProduct)









module.exports = app;