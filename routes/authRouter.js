// Import require module
const express = require("express")
const authController = require("../controllers/authController")

// create router
const router = express.Router();

// This route handles POST requests for user registration
router.post("/signup", authController.register)

// This route handles POST requests for user login
router.post("/login", authController.login)

module.exports = router;