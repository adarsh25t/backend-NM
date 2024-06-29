const express = require('express');
const createNewProduct = require('../controllers/productControllers/createProduct');
const getAllProducts = require('../controllers/productControllers/getProducts');
const getProductById = require('../controllers/productControllers/getproductById');
const getProductByCategory = require('../controllers/productControllers/getProductByCategory');
const updateProduct = require('../controllers/productControllers/updateProduct');
const deleteProduct = require('../controllers/productControllers/deleteProduct');

const productRoute = express.Router();

productRoute.post('/create',createNewProduct);
productRoute.get('/getallproducts',getAllProducts);
productRoute.get('/getproduct/:productId',getProductById);
productRoute.get('/getcategoryproduct/:category',getProductByCategory);
productRoute.post('/update-product/:id',updateProduct);
productRoute.post('/delete-product/:id',deleteProduct)

module.exports = productRoute