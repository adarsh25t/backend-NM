const Product = require("../../models/productModel");


const updateProduct = async (req,res) => {
    try {

        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!product) {
            return res.status(200).json({
                message: "Product not found",
                success: false,
            })
        }
        res.status(200).send({
            message: "Product updated successfully",
            success: true,
            data: product,
        });
        
    } catch (error) {
        res.status(200).send({
            message: error.message,
            success: false
        });
    }
}


module.exports = updateProduct;