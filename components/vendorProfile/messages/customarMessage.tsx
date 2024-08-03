"use client";
import Image from "next/image";
import React from "react";
import { formatDate } from "date-fns/format";
import useAuth from "@/lib/hooks/useAuth";
import { cn } from "@/lib/utils";

const CustomarMessage = ({ item }: { item: any }) => {
  const { user } = useAuth();
  const sender = item?.senderId === user?.id;
  return sender ? (
    <div className="flex justify-end mt-4">
      <div className="flex justify-between items-center">
        <div className="text-end">
          <span className="text-gray-500 text-[10px] lg:text-xs font-medium">
            {formatDate(item?.createdAt, "p")}
          </span>
        </div>
        <div className="max-w-[85%] lg:max-w-[70%] bg-textPrimary-900 text-white text-xs lg:text-sm py-2 px-4 rounded-lg ml-2">
          <p>{item?.text}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className={cn("mt-4 flex gap-2 md:gap-0")}>
      {/* Avatar */}
      <div className="w-max lg:w-1/12 mr-2">
        <Image
          width={500}
          height={500}
          src={
            "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          alt="profile"
          className="lg:w-12 lg:h-12 w-8 h-8 rounded-full object-cover"
        />
      </div>
      <div className="flex justify-between items-center w-11/12">
        {/* Text */}
        <div className="max-w-[85%] lg:max-w-[70%] bg-[#E4E6EB] text-textSecondary-900 text-xs lg:text-sm py-2 px-4 rounded-lg">
          <p>{item?.text}</p>
        </div>
        {/* Time */}
        <div className="text-end">
          <span className="text-gray-500 text-[10px] lg:text-xs font-medium">
            {formatDate(item?.createdAt, "p")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomarMessage;
