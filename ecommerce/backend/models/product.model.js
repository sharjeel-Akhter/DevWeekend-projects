const mongoose = require('mongoose')

const productModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is Required']
    },
    description: {
        type: String,
        required: [true, 'description is Required']
    },
    price: {
        type: Number,
        required: [true, 'Price is Required']
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            publicID: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'category is required']
    },
    stock: {
        type: Number,
        maxLength:[4, 'Limit exceeded'],
        default:1
    },
    numOfReviews: {
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String
            }
        }
    ],
    
}, {timestamps:true})

module.exports = mongoose.model('Product', productModel)