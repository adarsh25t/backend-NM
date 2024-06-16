const mongoose = require('mongoose');

const gallerySchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    createdAt: { type: Date, default: Date.now }, 
});

const Gallery = mongoose.model.gallery || mongoose.model('Gallery', gallerySchema);
module.exports = Gallery;