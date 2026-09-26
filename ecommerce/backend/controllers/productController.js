const Product = require('../models/product.model')

exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body)

    res.status(201).json({
        message:"Product Created Successfully",
    })
}


exports.getProducts = async (req, res, next) => {
    const products = await Product.find()

    const totalProducts = await Product.countDocuments()

    res.status(200).json({
        message:"Products Fetched successFully",
        totalProducts,
        products
    })
}
