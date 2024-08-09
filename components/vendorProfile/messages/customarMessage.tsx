"use client";
import Image from "next/image";
import React from "react";
import { formatDate } from "date-fns/format";
import useAuth from "@/lib/hooks/useAuth";
import { cn } from "@/lib/utils";

const CustomarMessage = ({ item }: { item: any }) => {
  const { user } = useAuth();
  const sender = item?.senderId === user?.id;
  return (
    <div className={cn("flex justify-end mt-4", !sender && "flex-row-reverse")}>
      <div
        className={cn(
          "flex justify-between items-center",
          !sender && "flex-row-reverse"
        )}>
        <div className="text-end">
          <span className="text-gray-500 text-[10px] lg:text-xs font-medium">
            {formatDate(item?.createdAt, "p")}
          </span>
        </div>
        <div
          className={cn(
            "max-w-[85%] lg:max-w-[70%] bg-textPrimary-900 text-white text-xs lg:text-sm py-2 px-4 rounded-lg ml-2",
            !sender && "bg-[#E4E6EB] text-textSecondary-900 ml-0 mr-2"
          )}>
          <p className="whitespace-pre-wrap">{item?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomarMessage;
