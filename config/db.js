const mongoose = require("mongoose")

// Load enviorment variables
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB is Successfully Connected")
    } catch (error) {
        console.log("Error: MongoDB Not Connected", error)
    }
}

module.exports = connectDB