const mongoose = require('mongoose');


function createMongobd() {
    const { DATABASE, PORT } = process.env;
    mongoose
        .connect(DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        })
        .then(() => console.log("MongoDB is  connected successfully"))
        .catch((err) => console.error(err));
} 

module.exports = {
    createMongobd
}