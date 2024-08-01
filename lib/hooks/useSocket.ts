import { create } from "zustand";
import io from "socket.io-client";
import useAuth from "./useAuth";

interface Store {
  socket: any;
  setSocket: (val: any) => void;
}

const useSocket = create<Store>((set) => ({
  socket: true,
  setSocket: (val) => set({ socket: val }),
}));

export default useSocket;
