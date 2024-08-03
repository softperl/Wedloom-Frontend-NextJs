import io, { Socket } from "socket.io-client";
import { create } from "zustand";

interface Store {
  connect: () => void;
  disconnect: () => void;
  socket: Socket | any;
}

const useSocket = create<Store>((set, get) => ({
  socket: null,
  connect: () => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL!, {
      reconnection: true,
      reconnectionDelay: 3000,
      reconnectionAttempts: 1000,
      autoConnect: true,
    });
    set({ socket });
  },
  disconnect: () => {
    const { socket } = get();
    if (socket) {
      socket.disconnect();
      set({ socket: null });
    }
  },
}));

export default useSocket;
