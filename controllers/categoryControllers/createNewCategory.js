const Category = require("../../models/categoryModel")


const createNewCategory = async (req,res) => {

    try {

        const newcategory = await Category.create(req.body);
        res.status(200).json({
            message: "Category created successfully",
            success:true,
            data:newcategory
        })
        
    } catch (error) {
        res.status(200).json({
            message: error.message,
            success:false
        })
    }
}

module.exports = createNewCategory