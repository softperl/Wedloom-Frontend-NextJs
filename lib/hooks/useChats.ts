import { create } from "zustand";

interface Store {
  conversations: any;
  setConversations: (val: any) => void;
  message: any;
  setMessage: (val: any) => void;
  chatUser: any;
  setChatUser: (val: any) => void;
}

const useChats = create<Store>((set) => ({
  conversations: null,
  setConversations: (val) => set({ conversations: val }),
  message: null,
  setMessage: (val) => set({ message: val }),
  chatUser: null,
  setChatUser: (val) => set({ chatUser: val }),
}));

export default useChats;
