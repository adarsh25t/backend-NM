const Product = require("../../models/productModel")


const getProductById = async (req,res) => {
    try {
        console.log('====================================');
        console.log(req.params.productId);
        console.log('====================================');
        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res.status(200).json({
                message: "Product not found",
                success: false
            })
        }

        res.status(200).json({
            message: "successfully found product",
            success: true,
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