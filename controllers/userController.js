const User = require("../models/user")

// Controller function for getting user
exports.getUser = async (req, res) => {
    const userId = req.user.userId

    try {
        // Find all users, except the one with the current user's ID
        const allUser = await User.find({ _id: { $ne: userId }})

        res.status(200).json(allUser)
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error",
        })
    }
}