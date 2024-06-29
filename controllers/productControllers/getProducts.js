const Product = require("../../models/productModel")


const getAllProducts = async (req, res) => {
    try {

        const page = parseInt(req.query.page) || 1;
       
        const limit = 10;
        const products = await Product.find({})
            .sort('-createdAt')
            .skip((page - 1) * limit)
            .limit(limit);

        const total = await Product.countDocuments();

        res.status(200).json({
            message: "products found",
            success: true,
            data: products,
            pages: Math.ceil(total / limit)
        })

    } catch (error) {

        res.status(200).json({
            message: error,
            success: false
        })
    }
}

module.exports = getAllProducts