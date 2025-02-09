import { Server, Socket } from "socket.io";

interface User {
  username: string;
  profilePic: string;
}

interface Room {
  name: string;
  users: User[];
}

class RoomHandler {
  private static instance: RoomHandler;
  private rooms: Map<string, Room> = new Map();

  private constructor() {}

  public static getInstance(): RoomHandler {
    if (!RoomHandler.instance) {
      RoomHandler.instance = new RoomHandler();
    }
    return RoomHandler.instance;
  }

  public joinRoom(data: { roomId: string; user: User }, socket: Socket, io: Server) {
    console.log("Joining room:", data.roomId);
    let room = this.rooms.get(data.roomId);

    if (!room) {
      room = { name: data.roomId, users: [] };
      this.rooms.set(data.roomId, room);
    }
    const userExists = room.users.some((u) => u.username === data.user.username);
    if (!userExists) {
      room.users.push(data.user);
    }

    socket.join(data.roomId);
    socket.to(data.roomId).emit("new-user", data.user);
    const users = this.getUsersInRoom(data.roomId);
    io.in(data.roomId).emit("users", users);// emit this event to all the users in the room
    console.log(`${data.user.username} joined room ${data.roomId}`);
  }

  public sendMessage(data: { roomId: string; from: string; message: string }, socket: Socket) {
    console.log("Sending message:", data);
    socket.to(data.roomId).emit("message", data);
  }

  public leaveRoom(data: { roomId: string; username: string }, socket: Socket) {
    const room = this.rooms.get(data.roomId);
    if (!room) return;

    room.users = room.users.filter((user) => user.username !== data.username);
    socket.leave(data.roomId);
    socket.to(data.roomId).emit("user-left", data.username);

    console.log(`${data.username} left room ${data.roomId}`);

    if (room.users.length === 0) {
      this.rooms.delete(data.roomId);
    }
  }

  public getUsersInRoom(roomId: string): User[] {
    return this.rooms.get(roomId)?.users || [];
  }
}

export default RoomHandler.getInstance();
