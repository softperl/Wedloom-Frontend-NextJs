"use client";
import React from "react";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";

const Pagination = () => {
  return (
    <div className="pagination flex items-center lg:justify-center my-8">
      <div className="pagination_content flex lg:gap-2 gap-2 items-center flex-wrap justify-center">
        <div className="left__arrow cursor-pointer">
          <BiSolidChevronLeft className="text-textPrimary-900 font-bold text-2xl" />
        </div>
        <div className="bg-paginationBg-900 py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">1</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">2</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">3</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">4</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">5</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">6</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">...</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">60</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">61</span>
        </div>
        <div className="py-1 px-4 cursor-pointer">
          <span className="text-textPrimary-900">62</span>
        </div>
        <div className="cursor-pointer">
          <BiSolidChevronRight className="text-textPrimary-900 font-bold text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
