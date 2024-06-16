const Gallery = require("../../models/galleryModel");


const deleteGallery = async (req,res) => {

    try {

        const gallery = await Gallery.findOneAndDelete({image: req.body.image});
        if (!gallery) {
            return res.status(200).send({
                message: "Gallery not found",
                success: false
            });
        }
        return res.status(200).send({
            message: "Gallery deleted successfully",
            success: true
        });

        
    } catch (error) {
        return res.status(200).send({
            message: error.message,
            success: false
        });
    }
}

module.exports = deleteGallery;