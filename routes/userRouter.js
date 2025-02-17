const express = require("express")
const userController = require("../controllers/userController")
const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router()

// This route handles GET requests for getting user
router.get("/", authMiddleware.userSignin, userController.getUser)

module.exports = router