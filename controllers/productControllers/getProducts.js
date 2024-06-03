const Product = require("../../models/productModel")


const getAllProducts = async (req,res) => {
    try {

        const products = await Product.find({}).sort('-createdAt');
        res.status(200).json({
            message: "products found",
            success: true,
            data: products
        })

    } catch (error) {

        res.status(200).json({
            message: error,
            success: false
        })
    }
}

module.exports = getAllProducts