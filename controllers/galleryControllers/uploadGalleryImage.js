const Gallery = require("../../models/galleryModel");


const uploadGalleryImage = async (req,res) => {
    try {

        const {image} = req.body;
        const newImage = await Gallery.create(req.body);
        res.status(200).send({
            message: "Image uploaded successfully",
            success: true,
            data: newImage
        });
        
    } catch (error) {
        return res.status(200).send({
            message: error.message,
            success: false
        });
    }
}

module.exports = uploadGalleryImage