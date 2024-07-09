"use client";

import useFaq from "@/lib/hooks/useFaq";
import { useState } from "react";
import { FaX } from "react-icons/fa6";

export const FaqPopup = ({ closeModal }: { closeModal: () => void }) => {
  const { addFaq } = useFaq();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addFaq(question, answer);
    setQuestion("");
    setAnswer("");
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded shadow-lg relative w-full max-w-lg lg:max-w-screen-md flex flex-col gap-5">
        <FaX
          onClick={closeModal}
          className="text-red-500 w-4 h-4 absolute right-2 top-2 cursor-pointer"
        />
        <form className="divide-y" onSubmit={handleSubmit}>
          <p className="pb-5">Add FAQ</p>
          <div className="py-5">
            <div className="flex flex-col gap-4">
              <div className="">
                <label className="text-sm">Question</label> <br />
                <input
                  className="mt-0.5 w-full py-2 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold"
                  placeholder="Question"
                  required
                  value={question}
                  onChange={handleQuestionChange}
                />
              </div>
              <div className="">
                <label className="text-sm">Answer</label> <br />
                <input
                  className="mt-0.5 w-full py-2 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold"
                  placeholder="Answer"
                  required
                  value={answer}
                  onChange={handleAnswerChange}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 pt-5">
            <button
              type="button"
              onClick={closeModal}
              className="border p-2 mx-auto text-center text-gray-700 font-semibold rounded-md w-full">
              Cancel
            </button>
            <button
              type="submit"
              className="border bg-textPrimary-900 p-2 mx-auto text-center text-white font-semibold rounded-md w-full">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
