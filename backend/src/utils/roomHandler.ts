import { Socket } from "socket.io";

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

  public joinRoom(data: { roomId: string; user: User }, socket: Socket) {
    console.log("Joining room:", data.roomId);
    let room = this.rooms.get(data.roomId);

    if (!room) {
      room = { name: data.roomId, users: [] };
      this.rooms.set(data.roomId, room);
    }

    room.users.push(data.user);
    socket.join(data.roomId);
    console.log(`${data.user.username} joined room ${data.roomId}`);
  }

  public getUsersInRoom(roomId: string) {
    const room = this.rooms.get(roomId);
    return room?.users;
  }
}

export default RoomHandler.getInstance();
