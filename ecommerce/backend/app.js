const express = require('express');
const { createProduct, getProducts, deleteProduct, updateProduct, getProduct } = require('./controllers/productController');
const errorHandler = require('./middlewares/errorHandler');
const router = express.Router()
const app = express();

app.use(express.json())
app.use('/api/v1', router)

router.get('/product',getProducts)
router.post('/product',createProduct)
router.patch('/product/:id', updateProduct)
router.get('/product/:id', getProduct)
router.delete('/product/:id', deleteProduct)





app.use(errorHandler)



module.exports = app;