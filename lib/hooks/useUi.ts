import { create } from "zustand";

interface Store {
  aboutData: any;
  setAboutData: (val: any) => void;
}

const useUi = create<Store>((set) => ({
  aboutData: null,
  setAboutData: (val) => set({ aboutData: val }),
}));

export default useUi;
