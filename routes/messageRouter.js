const express = require("express");
const messageController = require("../controllers/messageController")
const authmiddleware = require("../middleware/authMiddleware")

// create router
const router = express.Router();
 
// This route handles POST requests to send a message
router.post("/send/:id", authmiddleware.userSignin, messageController.sendMessages)

// This route handles GET requests to get a message
router.get("/:id", authmiddleware.userSignin, messageController.getMessages)

module.exports = router