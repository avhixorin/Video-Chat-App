import http from "http";
import { Server } from "socket.io";
import { Express } from "express";
import roomHandler from "./roomHandler";
let users: { [key: string]: string } = {};
const connectSocket = (app: Express) => {
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    
    socket.on("join-room", (data) => {
      users[socket.id] = data.user.username;
      roomHandler.joinRoom({ roomId: data.roomId, user: data.user }, socket, io);
    });
    
    socket.on("message", (data) => {
      roomHandler.sendMessage({ roomId: data.roomId, from: users[socket.id], message: data.message }, socket);
    });    

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      delete users[socket.id];
    });
    
  });

  server.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
  });
};

export default connectSocket;
