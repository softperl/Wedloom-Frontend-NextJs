import { create } from "zustand";

interface StoreProps {
  packageOpen: boolean;
  setPackageOpen: (value: boolean) => void;
  refresh: boolean;
  setRefresh: (value: boolean) => void;
}

const usePackage = create<StoreProps>((set) => ({
  packageOpen: false,
  setPackageOpen: (value) => set({ packageOpen: value }),
  refresh: true,
  setRefresh: (value) => set({ refresh: value }),
}));

export default usePackage;
