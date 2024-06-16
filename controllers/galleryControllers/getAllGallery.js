const Gallery = require("../../models/galleryModel");


const getAllGallery = async (req, res) => {

    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const gallery = await Gallery.find({})
            .sort('-createdAt')
            .skip((page - 1) * limit)
            .limit(limit);
        
        const total = await Gallery.countDocuments();

        res.status(200).json({
            message: "Gallery found",
            success: true,
            data: gallery,
            pages: Math.ceil(total / limit)
        })

    } catch (error) {
        return res.status(200).send({
            message: error.message,
            success: false
        });
    }
}

module.exports = {
    getAllGallery,
}