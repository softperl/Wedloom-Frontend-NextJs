import { create } from "zustand";

interface Store {
  conversations: any;
  setConversations: (val: any) => void;
  messages: any;
  setMessages: (val: any) => void;
  chatUser: any;
  setChatUser: (val: any) => void;
  refresh: boolean;
  setRefresh: (val: boolean) => void;
}

const useChats = create<Store>((set) => ({
  conversations: null,
  setConversations: (val) => set({ conversations: val }),
  messages: null,
  setMessages: (val) => set({ messages: val }),
  chatUser: null,
  setChatUser: (val) => set({ chatUser: val }),
  refresh: false,
  setRefresh: (val) => set({ refresh: val }),
}));

export default useChats;
