"use client";

import { createFaq } from "@/lib/api";
import useFaq from "@/lib/hooks/useFaq";
import { handelError } from "@/lib/utils";
import { nanoid } from "nanoid";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaX } from "react-icons/fa6";

export const FaqPopup = () => {
  const { setRefresh, refresh, setFaqOpen, editFaq } = useFaq();

  const [formData, setFormData] = useState({
    question: editFaq?.data?.question || "",
    answer: editFaq?.data?.answer || "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createFaq({
        id: editFaq?.data?.id || nanoid(),
        question: formData?.question,
        answer: formData?.answer,
      });
      setFaqOpen(false);
      setRefresh(!refresh);
      toast.success("FAQ added successfully");
      setFormData({
        question: "",
        answer: "",
      });
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded shadow-lg relative w-full max-w-lg lg:max-w-screen-md flex flex-col gap-5">
        <FaX
          onClick={() => setFaqOpen(false)}
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
                  name="question"
                  value={formData?.question}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-sm">Answer</label> <br />
                <input
                  className="mt-0.5 w-full py-2 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold"
                  placeholder="Answer"
                  required
                  name="answer"
                  value={formData?.answer}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 pt-5">
            <button
              type="button"
              onClick={() => setFaqOpen(false)}
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
