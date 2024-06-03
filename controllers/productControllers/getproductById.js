const Product = require("../../models/productModel")


const getProductById = async (req,res) => {
    try {

        const product = await Product.findById(req.params.productId);

        res.status(200).json({
            message: "successfully found product",
            success: false,
            data:product
        })
        
    } catch (error) {
        res.status(200).json({
            message: error,
            success: false
        })
    }
}

module.exports = getProductById;