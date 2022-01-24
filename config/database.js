require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URI = `${process.env.MONGO_DB_URI} ${process.env.DB_NAME}`;

let conection;

(async () => {
    try {
        conection = await mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Database connected");
    } catch (error) {
        console.error(error);
    }
})();
module.exports = {conection, mongoose}