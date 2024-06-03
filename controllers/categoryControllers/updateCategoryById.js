const Category = require("../../models/categoryModel");


const updateCategoryById = async (req,res) => {

    try {

        const { id } = req.params;
        const updateCategory = await Category.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).send({
            message: "Category updated successfully",
            success: true,
            data: updateCategory
        });
        
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
}

module.exports = updateCategoryById