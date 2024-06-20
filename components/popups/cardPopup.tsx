"use client";

import useCardEditor from "@/lib/hooks/useCardEditor";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaX } from "react-icons/fa6";

export const CardPopup = () => {
  const { setModal, setInputValue, inputValue } = useCardEditor();
  const [localInputValue, setLocalInputValue] = useState(inputValue);
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded shadow-lg relative w-full max-w-md flex flex-col gap-5">
        <FaX
          onClick={() => setModal(false)}
          className="text-red-500 w-4 h-4 absolute right-2 top-2 cursor-pointer"
        />
        <textarea
          placeholder="Enter your text"
          value={localInputValue}
          onChange={(e) => setLocalInputValue(e.target.value)}
          className={cn(
            "w-full h-44 py-6 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold mt-5"
          )}
        />
        <div className="flex gap-5">
          <button
            onClick={() => {
              setModal(false);
            }}
            className="border p-4 mx-auto text-center text-gray-700 font-semibold rounded-md w-full">
            Cancel
          </button>
          <button
            onClick={() => {
              setInputValue(localInputValue);
              setModal(false);
            }}
            className="border bg-textPrimary-900 p-4 mx-auto text-center text-white font-semibold rounded-md w-full">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
