const Product = require('../models/product.model')
const AppError = require('../utils/AppError')
exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({
            message:"Product Created Successfully",
        })
        
    } catch (error) {
        console.log(error)
        next(error)
    }

}


exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find()
        const totalProducts = await Product.countDocuments()
        if(totalProducts === 0){
            throw new AppError("No Products Found", 404)
        }
    
        res.status(200).json({
            message:"Products Fetched successFully",
            totalProducts,
            products
        })
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.updateProduct = async (req, res, next) => {
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidator:true
        })
        res.status(200).json({
            message:"Product Updated Successfully"
        })
    } catch (error) {
        console.log(error)
        next(error)
    }

}
exports.getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product){
            throw new AppError("Product NOt Found", 404)
        }
        res.status(200).json({
            message:"Product Fetched Successfully",
            product
        })
    } catch (error) {
        console.log(error)
        next(error)
    }

}
exports.deleteProduct = async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:"Product deleted Successfully"
        })
    } catch (error) {
        console.log(error)
        next(error)
    }

}
