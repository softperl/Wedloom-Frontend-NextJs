import { create } from "zustand";

interface Faq {
  question: string;
  answer: string;
}

interface StoreProps {
  faq: Faq[];
  currentFaq: Faq | null;
  setCurrentFaq: (faq: Faq | null) => void;
  addFaq: (question: string, answer: string) => void;
  deleteFaq: (question: string) => void;
  editFaq: (question: string, newAnswer: string) => void;
}

const useFaq = create<StoreProps>((set) => ({
  faq: [],
  currentFaq: null,
  setCurrentFaq: (faq) => set({ currentFaq: faq }),
  addFaq: (question, answer) =>
    set((state) => ({
      faq: [...state.faq, { question, answer }],
    })),
  deleteFaq: (question) =>
    set((state) => ({
      faq: state.faq.filter((faq) => faq.question !== question),
    })),
  editFaq: (question, newAnswer) =>
    set((state) => ({
      faq: state.faq.map((faq) =>
        faq.question === question ? { ...faq, answer: newAnswer } : faq
      ),
    })),
}));

export default useFaq;
