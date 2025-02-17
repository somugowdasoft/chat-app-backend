// Import the jsonwebtoken
const jwt = require("jsonwebtoken");

// Load environment variables
require("dotenv").config();

// Middleware to verify JWT
exports.userSignin = (req, res, next) => {
    // Get the authorization header from the request
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            message: "Authorization header is missing"
        });
    }

    // Split the header to get the token
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            message: "Token is missing"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY); 
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token",
        });
    }
};
