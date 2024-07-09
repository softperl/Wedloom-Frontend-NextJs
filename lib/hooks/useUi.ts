import { create } from "zustand";

interface Store {
  aboutData: any;
  setAboutData: (val: any) => void;
  socialLinks: any;
  setSocialLinks: (val: any) => void;
  menus: any;
  setMenus: (val: any) => void;
}

const useUi = create<Store>((set) => ({
  aboutData: null,
  setAboutData: (val) => set({ aboutData: val }),
  socialLinks: null,
  setSocialLinks: (val) => set({ socialLinks: val }),
  menus: [],
  setMenus: (val) => set({ menus: val }),
}));

export default useUi;
