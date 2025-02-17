---

# Chat App (MERN Stack)

A full-featured **Chat Application** built using the **MERN stack** (MongoDB, Express.js, React, Node.js), allowing users to send and receive messages in real-time.

---

## Table of Contents
1. [Backend](#backend)
   - [Technologies](#technologies-1)
   - [Setup](#setup-1)
   - [Running the Backend](#running-the-backend)
2. [Deployment](#deployment)

Server running 
`https://my-awesome-chat-app.onrender.com`
---

## Backend

The **backend** is built using **Node.js**, **Express.js**, **Socket.IO**, and **MongoDB**.

### Technologies

- Node.js
- Express.js (for the server)
- MongoDB (for storing user and message data)
- Mongoose (ODM for MongoDB)
- Socket.IO (for real-time messaging)
- JWT (for user authentication)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/somugowdasoft/chat-app-backend.git
   cd chat-app-backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   MONGO_URI=mongodb://localhost:27017/chat-app
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. To start the development server, run:
   ```bash
   npm start
   ```

This will run the backend API at `http://localhost:5000`.

---

## Real-time Messaging

The **Socket.IO** integration handles the real-time communication between users.

### Socket Events

- **connection**: Triggers when a user connects to the chat room.
- **message**: Sends a new message to the room.
- **disconnect**: Triggers when a user disconnects from the chat room.

