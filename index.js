const express = require('express');
const cors = require("cors");
const { createMongobd } = require('./config/config');
const productRoute = require('./routes/productRoutes');
const galleryRoute = require('./routes/galleryRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

// GET env VARIABLES
require('dotenv').config();
const { PORT } = process.env;

// CONNECT TO THE FRONTEND SITE
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
)

// GET FRONTEND INPUTS VALUES
app.use(express.json());

// SETUP THE ROUTES
app.use('/api/product',productRoute);
app.use('/api/gallery',galleryRoute);
app.use('/api/category',categoryRoutes);

// CREATE MONGODB DATABASE CONNECTION
createMongobd()

// STARTS THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})