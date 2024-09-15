import React from "react";
import { FaShare } from "react-icons/fa";

const ReplyCard = ({ data }: { data: any }) => {
  return (
    <div
      className="w-full bg-copyrightFooter-900 px-5 py-6 text-textSecondary-900 border-b border-t border-paginationBg-900
    ">
      <div className="review__content flex gap-8 items-center">
        <div className="icon text-2xl">
          <FaShare className="w-5 h-5" />
        </div>
        <div className="admin">
          <span className="font-bold">{data?.vendor?.name}</span>
          <div className="replyBody mt-2">{data?.reply}</div>
        </div>
      </div>
    </div>
  );
};

export default ReplyCard;
