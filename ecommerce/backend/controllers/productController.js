const multer = require('multer');
const uploadFile = require('../utils/storage')
const asyncHandler = require('../middlewares/asyncHandler')
const Product = require('../models/product.model')
const AppError = require('../utils/AppError')



exports.createProduct = asyncHandler(async (req, res, next) => {

    const result = await uploadFile(
        req.file.buffer,
        req.file.originalname
    )
    const product = await Product.create({
        ...req.body,
        images:[
            {
            url: result.url,
            publicID: result.fileId
        }]
    })
    res.status(201).json({
        message: "Product Created Successfully",
    })
})

exports.getProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find()
    const totalProducts = await Product.countDocuments()
    if (totalProducts === 0) {
        throw new AppError("No Products Found", 404)
    }
    res.status(200).json({
        message: "Products Fetched successFully",
        totalProducts,
        products
    })
})

exports.updateProduct = asyncHandler(async (req, res, next) => {
    await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidator: true
    })
    res.status(200).json({
        message: "Product Updated Successfully"
    })
})

exports.getProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        throw new AppError("Product NOt Found", 404)
    }
    res.status(200).json({
        message: "Product Fetched Successfully",
        product
    })

})

exports.deleteProduct = asyncHandler(async (req, res, next) => {
    console.log(req.params.id)
    const product = await Product.findByIdAndDelete(req.params.id)
    if(!product){
        throw new AppError("Invalid ID", 403)
    }
    res.status(200).json({
        message: "Product deleted Successfully"
    })
})
