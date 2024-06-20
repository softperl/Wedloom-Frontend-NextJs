import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoNavigate } from "react-icons/io5";

export const ActionFooter = () => {
  return (
    <div className="mt-20 bg-white p-2 flex justify-between items-center relative mx-auto overflow-hidden w-[414px] h-full shadow border">
      <button className="inline-flex items-center text-sm p-4 rounded-md border uppercase font-medium text-gray-500">
        <FaCheckCircle className="w-4 h-4 mr-1" />
        rsvp
      </button>
      <button className="inline-flex items-center text-sm p-4 rounded-md border uppercase font-medium text-gray-500">
        <FaMessage className="w-4 h-4 mr-1" />
        messages
      </button>
      <button className="inline-flex items-center text-sm p-4 rounded-md border uppercase font-medium text-gray-500">
        <IoNavigate className="w-4 h-4 mr-1" />
        navigate
      </button>
    </div>
  );
};
