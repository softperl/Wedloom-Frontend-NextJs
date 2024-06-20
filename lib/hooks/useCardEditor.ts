import { create } from "zustand";

interface StoreProps {
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  fontSize: number;
  setFontSize: (value: number) => void;
  modal: boolean;
  setModal: (value: boolean) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const useCardEditor = create<StoreProps>((set) => ({
  editMode: false,
  setEditMode: (value) => set({ editMode: value }),
  fontSize: 16,
  setFontSize: (value) => set({ fontSize: value }),
  modal: false,
  setModal: (value) => set({ modal: value }),
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
}));

export default useCardEditor;
