import { useCallback, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

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

  const setupSocketListeners = useCallback((socket: Socket) => {
    socket.on("connect", () => {
      console.log("Connected to the server");
    });

  }, []);

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
