
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { UserRouter } from './routes/user.route.js';
import {AuctionRouter} from './routes/auction.route.js';
import { AdminRouter } from './routes/admin.route.js';
//import {ContactRouter} from './routes/contact.route.js'
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
 app.use('/admin', AdminRouter);
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
