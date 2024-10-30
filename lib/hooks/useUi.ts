import { create } from "zustand";

interface Store {
  steps: any;
  setSteps: (val: any) => void;
  aboutData: any;
  setAboutData: (val: any) => void;
  socialLinks: any;
  setSocialLinks: (val: any) => void;
  menus: any;
  setMenus: (val: any) => void;
  footerMenus: any;
  setFooterMenus: (val: any) => void;
  cities: any;
  setCities: (val: any) => void;
  vendorCategories: any;
  setVendorCategories: (val: any) => void;
  contactInfo: any;
  setContactInfo: (val: any) => void;
  map: any;
  setMap: (val: any) => void;
  refresh: boolean;
  setRefresh: (val: boolean) => void;
}

const useUi = create<Store>((set) => ({
  steps: null,
  setSteps: (val) => set({ steps: val }),
  aboutData: null,
  setAboutData: (val) => set({ aboutData: val }),
  socialLinks: null,
  setSocialLinks: (val) => set({ socialLinks: val }),
  menus: [],
  setMenus: (val) => set({ menus: val }),
  footerMenus: [],
  setFooterMenus: (val) => set({ footerMenus: val }),
  cities: [],
  setCities: (val) => set({ cities: val }),
  vendorCategories: [],
  setVendorCategories: (val) => set({ vendorCategories: val }),
  contactInfo: null,
  setContactInfo: (val) => set({ contactInfo: val }),
  map: null,
  setMap: (val) => set({ map: val }),
  refresh: false,
  setRefresh: (val) => set({ refresh: val }),
}));

export default useUi;
