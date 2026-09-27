const express = require('express');
const router = express.Router();

const { createProduct, getProducts, deleteProduct, updateProduct, getProduct } = require('../controllers/productController');

router.get('/',getProducts)
router.post('/',createProduct)
router.patch('/:id', updateProduct)
router.get('/:id', getProduct)
router.delete('/:id', deleteProduct)

module.exports = router