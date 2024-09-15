import { create } from "zustand";

interface StoreProps {
  faq: any;
  setFaq: (value: any) => void;
  editFaq: any;
  setEditFaq: (value: any) => void;
  faqOpen: boolean;
  setFaqOpen: (value: boolean) => void;
  refresh: boolean;
  setRefresh: (value: boolean) => void;
}

const useFaq = create<StoreProps>((set) => ({
  faq: [],
  setFaq: (value) => set({ faq: value }),
  editFaq: {},
  setEditFaq: (value) => set({ editFaq: value }),
  faqOpen: false,
  setFaqOpen: (value) => set({ faqOpen: value }),
  refresh: true,
  setRefresh: (value) => set({ refresh: value }),
}));

export default useFaq;
