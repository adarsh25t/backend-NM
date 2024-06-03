const Product = require("../../models/productModel")


const createNewProduct = async (req,res) => {

    try {

        const createProduct = await Product.create(req.body);
        res.status(200).json({
            message: "successfully created a new product",
            success: true
        })
        
    } catch (error) {
        res.status(200).json({
            message: error,
            success: false
        })
    }
}

module.exports = createNewProduct