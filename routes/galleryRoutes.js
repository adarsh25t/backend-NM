const express = require('express');
const uploadGalleryImage = require('../controllers/galleryControllers/uploadGalleryImage');
const { getAllGallery } = require('../controllers/galleryControllers/getAllGallery');
const deleteGallery = require('../controllers/galleryControllers/deleteGallery');

const galleryRoute = express.Router();

galleryRoute.post('/create-gallery',uploadGalleryImage);
galleryRoute.get('/get-gallery',getAllGallery);
galleryRoute.post('/delete-gallery',deleteGallery);

module.exports = galleryRoute