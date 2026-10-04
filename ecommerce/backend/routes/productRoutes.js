const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate')
const { createProduct, getProducts, deleteProduct, updateProduct, getProduct } = require('../controllers/productController');
const authorize  = require('../middlewares/authorize');
const multer = require('multer')
const upload = multer({
    storage: multer.memoryStorage(),
    limits:{
        fileSize: 5 * 1024 * 1024
    }
})
router.get('/', getProducts)
router.post('/', upload.single("images"), createProduct)

router.use(authenticate);
router.patch('/:id',authorize, updateProduct)
router.get('/:id', getProduct)
router.delete('/:id', authorize, deleteProduct)

module.exports = router