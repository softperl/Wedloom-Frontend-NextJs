import { create } from "zustand";

interface StoreProps {
  customize: boolean;
  setCustomize: (value: boolean) => void;
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  fontSize: number;
  setFontSize: (value: number) => void;
  modal: boolean;
  setModal: (value: boolean) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  hide: number[];
  handleRemove: (index: number) => void;
  unhideItem: (index: number) => void;
  unHidePage: number | null;
  setUnHidePage: (value: number | null) => void;
}

const useCardEditor = create<StoreProps>((set) => ({
  customize: false,
  setCustomize: (value) => set({ customize: value }),
  editMode: false,
  setEditMode: (value) => set({ editMode: value }),
  fontSize: 16,
  setFontSize: (value) => set({ fontSize: value }),
  modal: false,
  setModal: (value) => set({ modal: value }),
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
  hide: [],
  handleRemove: (index) =>
    set((state) => ({
      hide: state.hide.includes(index)
        ? state.hide.filter((i) => i !== index)
        : [...state.hide, index],
    })),
  unhideItem: (index) =>
    set((state) => ({
      hide: state.hide.filter((i) => i !== index),
    })),
  unHidePage: null,
  setUnHidePage: (value) => set({ unHidePage: value }),
}));

export default useCardEditor;
