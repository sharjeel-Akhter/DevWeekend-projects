const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate')
const { createProduct, getProducts, deleteProduct, updateProduct, getProduct } = require('../controllers/productController');
const authorize  = require('../middlewares/authorize');

router.use(authenticate);
router.get('/',  authorize, getProducts)
router.post('/', authorize, createProduct)
router.patch('/:id', authorize, updateProduct)
router.get('/:id',  getProduct)
router.delete('/:id', authorize, deleteProduct)

module.exports = router