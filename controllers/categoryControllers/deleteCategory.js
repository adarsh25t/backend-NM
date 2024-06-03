const Category = require("../../models/categoryModel");

const deleteCategory = async (req,res) => {
    
    try {
        const {id} = req.params;
        const category = await Category.findByIdAndDelete(id);
        if(!category) {
            return res.status(200).json({
                message: "Category not found",
                success: false,
            })
        }

        res.status(200).json({
            message: "Category deleted successfully",
            success: true,
        })
        
    } catch (error) {
        res.status(200).json({
            message: error?.message,
            success: false
        })
    }
    
}

module.exports = deleteCategory