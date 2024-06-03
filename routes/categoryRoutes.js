const express = require('express');
const createNewCategory = require('../controllers/categoryControllers/createNewCategory');
const getAllCategories = require('../controllers/categoryControllers/getAllCategores');
const updateCategoryById = require('../controllers/categoryControllers/updateCategoryById');
const deleteCategory = require('../controllers/categoryControllers/deleteCategory');
const { getCategoryById } = require('../controllers/categoryControllers/getCategoryById');

const categoryRoutes = express.Router();

categoryRoutes.post('/create-category',createNewCategory);
categoryRoutes.get('/get-categories',getAllCategories);
categoryRoutes.get('/get-categoriebyid/:id',getCategoryById);
categoryRoutes.post('/update-category/:id',updateCategoryById);
categoryRoutes.post('/delete-category/:id',deleteCategory);

module.exports = categoryRoutes