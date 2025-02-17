// Import require module
const { Server } = require("socket.io")
const http = require("http")
const express = require("express")

const app = express();

// Create an HTTP server and initialize socket.io server with the HTTP server
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"]
    }
});

// this object will map user ID
const userSocketMap = {};

// Function to retrieve a receiver socket ID
const getReciverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}

// user connect to the server
io.on('connection', (socket) => {
    console.log(`user connected ${socket.id}`)

    const userId = socket.handshake.query.userId
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    io.emit("getOnlineUser", Object.keys(userSocketMap))

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id)
        delete userSocketMap[userId];
        io.emit("getOnlineUser", Object.keys(userSocketMap))
    })
})

module.exports = {app, io, server, getReciverSocketId}