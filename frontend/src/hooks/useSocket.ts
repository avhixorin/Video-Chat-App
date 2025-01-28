import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import { RootState } from "../redux/store";

const useSocket = () => {
  const socket = useRef<Socket | null>(null);
  const user = useSelector((state: RootState) => state.user);
  const serverUrl = "http://localhost:3000";
  useEffect(() => {
    if (!socket.current) {
      socket.current = io(serverUrl);
    }
    socket.current.on("connect", () => {
        socket.current?.emit("love", {
          message: "Hello from client",
          user: user,
        });
      });
    return () => {
      socket.current?.disconnect();
      socket.current = null;
    };
  }, [user]);

  return socket.current;
};

export default useSocket;
