"use client";
import React from "react";
import ReactPaginate from "react-paginate";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName="pagination flex items-center lg:justify-center my-8"
      pageClassName="py-1 px-4 cursor-pointer"
      pageLinkClassName="text-textPrimary-900"
      activeClassName="bg-paginationBg-900"
      previousLabel={
        <BiSolidChevronLeft className="text-textPrimary-900 font-bold text-2xl" />
      }
      nextLabel={
        <BiSolidChevronRight className="text-textPrimary-900 font-bold text-2xl" />
      }
      previousClassName="cursor-pointer"
      nextClassName="cursor-pointer"
      breakLabel="..."
      breakClassName="py-1 px-4 cursor-pointer"
      breakLinkClassName="text-textPrimary-900"
    />
  );
};

export default Pagination;
