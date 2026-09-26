const mongoose = require('mongoose')

const productModel = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Name is Required']
    },
    description: {
        type: String,
        require: [true, 'Name is Required']
    },
    price: {
        type: Number,
        equire: [true, 'Price is Required']
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            publicID: {
                type: String,
                require: true
            },
            url: {
                type: String,
                require: true
            }
        }
    ],
    category: {
        type: String,
        require: [true, 'category is required']
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
                require:true
            },
            rating:{
                type:Number,
                require:true
            },
            comment:{
                type:String
            }
        }
    ],
    
}, {timestamps:true})

module.exports = mongoose.model('Product', productModel)