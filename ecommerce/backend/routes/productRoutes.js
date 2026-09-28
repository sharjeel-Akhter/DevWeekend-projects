const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate')
const { createProduct, getProducts, deleteProduct, updateProduct, getProduct } = require('../controllers/productController');
const authorize  = require('../middlewares/authorize');


router.get('/', authenticate, authorize, getProducts)
router.post('/',authenticate, authorize, createProduct)
router.patch('/:id',authenticate, authorize, updateProduct)
router.get('/:id', authenticate, getProduct)
router.delete('/:id',authenticate, authorize, deleteProduct)

module.exports = router