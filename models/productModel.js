const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: Array,
    },
    category: {
        type: String,
        required: true
    },
    productItems:{
        type: Array,
        required: [true,"product must have a item"]
    },
    createdAt: { type: Date, default: Date.now }, 
}) 

const Product = mongoose.models.product || mongoose.model("Product",productSchema);
module.exports = Product;