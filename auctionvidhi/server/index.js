//aa code thi live chat thay 6
// import express from 'express'
// import dotenv from 'dotenv'
// import http from 'http' 
// import Mongoose from 'mongoose'
// import cors from 'cors'
// import { Server } from "socket.io"; 
// import { UserRouter } from './routes/user.js'
// import cookieParser from 'cookie-parser'

// dotenv.config()

// const app = express()
// app.use(express.json())
// app.use(cookieParser())
// app.use('/auth', UserRouter)

// const server = http.createServer(app); 

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// Mongoose.connect('mongodb://127.0.0.1:27017/authentication1')

// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log(`User with ID: ${socket.id} joined room: ${data}`);
//   });

//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconnected", socket.id);
//   });
// });

// server.listen(3001, () => {
//   console.log("SERVER RUNNING");
// });

//login thay 6 aa code thi
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { UserRouter } from './routes/user.route.js';
import {AuctionRouter} from './routes/auction.route.js';
import {ContactRouter} from './routes/contact.route.js'
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3001"],
    credentials: true
}));
app.use(cookieParser());
app.use('/auth', UserRouter);
app.use('/api', AuctionRouter);
// app.use('/chat',ContactRouter);


mongoose.connect('mongodb://127.0.0.1:27017/authentication1');

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
