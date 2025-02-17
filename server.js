const express = require("express");
const bodyparser = require("body-parser");
const connectDB = require("./config/db")
const cors = require("cors");
const authRouter = require("./routes/authRouter")
const messageRouter = require("./routes/messageRouter")
const userRouter = require("./routes/userRouter")
const { app, server } = require("./socket/socket")

// Load enviorment variables
require("dotenv").config();

// connect mongodb
connectDB();

// middleware
app.use(bodyparser.json());
app.use(cors({
    origin: "http://localhost:3001"
}));

// router
app.use("/api/auth", authRouter)
app.use("/api/message", messageRouter)
app.use("/api/user", userRouter)

PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})