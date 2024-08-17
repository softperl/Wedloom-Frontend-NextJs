import { removeFromFav } from "./../api";
import { set } from "date-fns";
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
  lastMessage: any;
  setLastMessage: (val: any) => void;
  isFavConversation: any;
  setIsFavConversation: (val: any) => void;
  removeFevCon: boolean;
  setRemoveFevCon: (val: boolean) => void;
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
  lastMessage: null,
  setLastMessage: (val) => set({ lastMessage: val }),
  isFavConversation: null,
  setIsFavConversation: (val) => set({ isFavConversation: val }),
  removeFevCon: false,
  setRemoveFevCon: (val) => set({ removeFevCon: val }),
}));

export default useChats;
