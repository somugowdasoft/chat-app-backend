const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,  // Ensures the email is unique in the database
        lowercase: true,  // Converts the email to lowercase before saving
        match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please fill a valid email address']  // Optional regex for email validation
    },

    password: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },

    profilePicture: {
        type: String,
        default: ""
    }

}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
