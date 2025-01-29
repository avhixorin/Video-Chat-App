import http from "http";
import { Server } from "socket.io";
import { Express } from "express";
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
      console.log("Joining room:", data);
    });
    socket.on("message", (data) => {
      console.log("New message:", data);
    });
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  server.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
  });
};

export default connectSocket;
