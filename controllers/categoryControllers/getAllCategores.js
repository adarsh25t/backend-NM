const Category = require("../../models/categoryModel")

const getAllCategories = async (req,res) => {
    
    try {

        const categories = await Category.find({})
        res.status(200).json({
            message: "Categories fetched successfully",
            success: true,
            data: categories
        })
        
    } catch (error) {
        res.status(200).json({
            message: error.message,
            success: false
        })
    }
}

module.exports = getAllCategories