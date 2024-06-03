const Category = require("../../models/categoryModel")

const getCategoryById = async (req, res) => {

    try {

        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(200).json({
                message: "Category not found",
                success: false
            })
        }
        res.status(200).json({
            message: " Category found",
            success: true,
            category,
        })

    } catch (error) {
        res.status(200).json({
            message: error.message,
            success: false
        })
    }
}

module.exports = {
    getCategoryById
}