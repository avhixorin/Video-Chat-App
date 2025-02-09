import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { io, Socket } from "socket.io-client";
import { updateChat } from "../redux/chatSlice";
import toast from "react-hot-toast";
import { addUser, upadateUsers } from "../redux/roomSlice";

let sharedSocket: Socket | null = null;

const SOCKET_URL = "http://localhost:3000";

const initializeSocket = (): Socket => {
  if (!sharedSocket) {
    sharedSocket = io(SOCKET_URL, {
      autoConnect: false,
      reconnectionAttempts: 5,
      transports: ["websocket"],
      withCredentials: true,
    });
  }
  return sharedSocket;
};

const useSocket = () => {
  const socketRef = useRef<Socket | null>(null);
  const dispatch = useDispatch();

  const handleMessage = useCallback(
    (data: { from: string; message: string }) => {
      dispatch(
        updateChat({
          from: data.from,
          message: data.message,
          timestamp: new Date().toISOString(),
        })
      );
      toast.success(`New message from ${data.from}`);
    },
    [dispatch]
  );

  const handleNewUser = useCallback(
    (data: { username: string; profilePic: string }) => {
      alert("New user joined");
      toast.success(`${data.username} joined the room`);
      dispatch(
        addUser({ username: data.username, userProfile: data.profilePic })
      );
    },
    [dispatch]
  );
  const setupSocketListeners = useCallback(
    (socket: Socket) => {
      socket.on("connect", () => {
        console.log("Connected to the server");
      });
      socket.on("new-user", handleNewUser);
      socket.on("message", handleMessage);
      socket.on("users", (users) => {
        dispatch(upadateUsers(users));
      });
      socket.on("disconnect", () => {
        console.log("Disconnected from the server");
      });
    },
    [handleMessage, handleNewUser, dispatch]
  );

  useEffect(() => {
    socketRef.current = initializeSocket();

    if (!socketRef.current.connected) {
      socketRef.current.connect();
      setupSocketListeners(socketRef.current);
    }

    return () => {
      if (!sharedSocket?.connected) {
        sharedSocket?.off();
      }
    };
  }, [setupSocketListeners]);

  return { socket: socketRef.current };
};

export default useSocket;
