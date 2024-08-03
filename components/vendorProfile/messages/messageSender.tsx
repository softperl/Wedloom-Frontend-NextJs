import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa6";

const MessageSender = ({
  name,
  text,
  date,
  img,
}: {
  name: string;
  text: string;
  date: any;
  img: string;
}) => {
  return (
    <div
      className={cn(
        "border-b border-b-paginationBg-900 py-2 px-2 flex gap-4 md:gap-0 items-center cursor-pointer hover:bg-tagsBackground-900 hover:text-white"
      )}>
      {/* Image */}
      <div className="md:w-3/12">
        {img ? (
          <Image
            width={500}
            height={500}
            src={img}
            alt="avatar"
            className="w-12 h-12 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full border border-textPrimary-900 flex flex-col items-center justify-center">
            <FaUser className="text-textPrimary-900 mx-auto text-xl" />
          </div>
        )}
      </div>

      {/* Author Info */}
      <div className="flex justify-between items-center w-9/12">
        {/* NAme and last messgae */}
        <div className="flex flex-col gap-1 h-full w-9/12">
          <div className="h-5 overflow-hidden">
            <h3 className="text-textSecondary-900 font-bold text-sm">{name}</h3>
          </div>
          <div className="w-full h-5 overflow-hidden">
            <p className="text-gray-500 font-semibold text-[11px]">{text}</p>
          </div>
        </div>
        {/* Last Message Time */}
        <div className="w-3/12 text-end">
          <span className="text-textBlack-900 text-[11px] font-semibold">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
