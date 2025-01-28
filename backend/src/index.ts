import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  socket.on("love", (data) => {
    console.log(data);
  })
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
