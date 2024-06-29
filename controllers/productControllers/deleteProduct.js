const Product = require("../../models/productModel")

const deleteProduct = async (req, res) => {
    try {

        const result = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: " product deleted successfully",
            success: true
        })

    } catch (error) {
        res.status(200).json({
            message: error.message,
            success: false
        })
    }
}

module.exports = deleteProduct