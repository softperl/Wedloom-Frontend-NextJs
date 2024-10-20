import useChats from "@/lib/hooks/useChats";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { MdStar } from "react-icons/md";

const MessageSender = ({
  name,
  text,
  date,
  img,
  seen,
  fevCon = false,
  admin = false,
}: {
  name: string;
  text: string;
  date: any;
  img: string;
  seen?: any;
  fevCon?: any;
  admin?: boolean;
}) => {
  const { setRemoveFevCon } = useChats();
  return (
    <div
      className={cn(
        "border-b border-b-paginationBg-900 py-2 px-2 flex gap-4 md:gap-0 items-center cursor-pointer hover:bg-tagsBackground-900 hover:text-white group"
      )}>
      {/* Image */}
      <div className="w-12">
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
      <div className="flex justify-between items-center w-full flex-1">
        {/* NAme and last messgae */}
        <div className="flex flex-col gap-1 h-full w-9/12">
          <div className="h-5 overflow-hidden">
            <h3 className="text-textSecondary-900 font-bold text-sm">{name}</h3>
          </div>
          <div className="w-full h-5 overflow-hidden">
            <p
              className={cn(
                "font-semibold text-[11px] text-textPrimary-900",
                seen && "text-gray-500"
              )}>
              {text}
            </p>
          </div>
        </div>
        {/* Last Message Time */}
        <div className="w-full flex flex-col gap-2 items-end justify-center">
          <div className="flex items-center gap-1">
            {!seen && (
              <div className="bg-textPrimary-900 w-3 h-3 rounded-full" />
            )}

            {fevCon && (
              <MdStar
                className="cursor-pointer text-yellow-500 group-hover:text-yellow-500 duration-200"
                title="Mark the Conversation as UnStar"
                onClick={() => setRemoveFevCon(true)}
              />
            )}
          </div>

          <p className="text-textBlack-900 text-[11px] font-semibold">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
