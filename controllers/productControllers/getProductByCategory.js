const Product = require("../../models/productModel")


const getProductByCategory = async (req,res) => {

    try {
       
        const products = await Product.find({ category: req.params.category});

        if(!products) {
            return res.status(200).json({
                message: "no product found",
                success: false
            })
        }

        res.status(200).json({
            message: "successfully found product",
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

module.exports = getProductByCategory