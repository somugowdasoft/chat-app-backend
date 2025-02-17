const Conversation = require("../models/conversation")
const Message = require("../models/message")
const { io, getReciverSocketId } = require("../socket/socket")

// Controller function for sending message
exports.sendMessages = async (req, res) => {
    const { message } = req.body
    const { id: receiverId } = req.params
    const senderId = req.user.userId

    try {
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        await conversation.save()
        await newMessage.save()

        // Socket Io
        const receiverSocketId = getReciverSocketId(receiverId)
        if(receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(200).json(newMessage)
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error",
        })
    }
}


// Controller function for getting message
exports.getMessages = async (req, res) => {
    const { id: receiverId } = req.params
    const senderId = req.user.userId

    try {
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate("messages")

        if (!conversation) return res.status(200).json([])

        const messages = conversation.messages
        res.status(200).json(messages)

    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}