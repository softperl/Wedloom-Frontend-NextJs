import { create } from "zustand";

interface Store {
  conversations: any;
  setConversations: (val: any) => void;
  favConversations: any;
  setFavConversations: (val: any) => void;
  messages: any[];
  setMessages: (val: any | any[]) => void;
  chatUser: any;
  setChatUser: (val: any) => void;
  unReadConversation: number;
  setUnReadConversation: (val: number) => void;
  refresh: boolean;
  setRefresh: (val: boolean) => void;
  updateUserConversation: boolean;
  setUpdateUserConversation: (val: any) => void;
}

const useChats = create<Store>((set) => ({
  conversations: null,
  setConversations: (val) => set({ conversations: val }),
  favConversations: null,
  setFavConversations: (val) => set({ favConversations: val }),
  messages: [],
  setMessages: (val) =>
    set((state) => ({
      messages: Array.isArray(val) ? val : [...state.messages, val],
    })),
  unReadConversation: 0,
  setUnReadConversation: (val) => set({ unReadConversation: val }),
  chatUser: null,
  setChatUser: (val) => set({ chatUser: val }),
  refresh: false,
  setRefresh: (val) => set({ refresh: val }),
  updateUserConversation: false,
  setUpdateUserConversation: (val) => set({ updateUserConversation: val }),
}));

export default useChats;
