"use client";
import { replyReview } from "@/lib/api";
import { handelError } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaShare, FaStar } from "react-icons/fa";
import { FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import ReplyCard from "./replyCard";

const ReviewCardWithoutReply = ({
  image,
  name,
  date,
  rating,
  feedback,
  reviewId,
  reply,
  vendor,
}: {
  image: string;
  name: string;
  date: string;
  rating: string;
  feedback: string;
  reviewId: string;
  reply: string;
  vendor: any;
}) => {
  const [viewLess, setViewLess] = useState(false);
  const [viewReply, setViewReply] = useState(false);
  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=https://wedplanr.com/`;
  const shareTwitter = `https://twitter.com/intent/tweet?url=https://wedplanr.com/`;
  const [textArea, setTextArea] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await replyReview({
        reviewId,
        reply: textArea,
      });
      setTextArea("");
      toast.success("Reply Added Successfully");
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  return (
    <>
      <div className="w-full py-6 px-3 lg:px-5">
        <div className="review__card__content">
          <div className="review_card_heading flex justify-between items-center">
            <div className="heading_left flex gap-4 w-full justify-between lg:justify-start lg:w-max">
              <div className="name_image flex items-center gap-4">
                <Image
                  width={500}
                  height={500}
                  src={
                    image ||
                    "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                  }
                  alt="photo"
                  className="w-12 lg:w-14 h-12 lg:h-14 rounded-full"
                />
                <div className="name">
                  <h5 className="text-textBlack-900 font-bold mb-1 lg:text-base text-sm">
                    {name}
                  </h5>
                  <p className="text-textSecondary-900 text-xs lg:text-sm">
                    {date}
                  </p>
                </div>
              </div>

              <div className="overall__rating flex items-center justify-center">
                <span className="bg-textPrimary-900 p-1 text-white font-semibold lg:text-base text-sm inline-flex">
                  <FaStar className="w-5 h-5 mr-2" />
                  {rating}
                </span>
              </div>
            </div>
            <div className="heading_right lg:block hidden">
              <div className="social_links flex items-center gap-4">
                <div className="facebook w-8 h-8 border flex items-center justify-center p-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={shareFacebook}>
                    <FaSquareFacebook className="text-[#4267B2]" />
                  </a>
                </div>
                <div className="twitter w-8 h-8 border flex items-center justify-center p-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={shareTwitter}>
                    <FaTwitter className="text-[#4267B2]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="review_content mt-4">
            <div
              className={`initial_view h-full overflow-hidden pr-5 text-textSecondary-900 leading-7 font-normal text-xs lg:text-sm ${
                reply && "border-b pb-5"
              }`}>
              {!viewLess && feedback.length > 300
                ? feedback.slice(0, 300)
                : feedback}

              {feedback.length > 300 && (
                <span
                  className="text-xs lg:text-sm font-bold text-textSecondary-900 cursor-pointer"
                  onClick={() => setViewLess(!viewLess)}>
                  {viewLess ? " Read Less" : "... Read More"}
                </span>
              )}
              {reply && (
                <div
                  onClick={() => setViewReply(!viewReply)}
                  className="text-xs lg:text-sm font-bold text-textSecondary-900 cursor-pointer mt-2">
                  {viewReply ? "Close Reply" : "View Reply"}
                </div>
              )}
              {viewReply && reply && <ReplyCard data={vendor} />}
            </div>
            <div className="block lg:hidden mt-4">
              <div className="social_links flex items-center gap-4">
                <div className="facebook w-8 h-8 border flex items-center justify-center p-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={shareFacebook}>
                    <FaSquareFacebook className="text-[#4267B2]" />
                  </a>
                </div>
                <div className="twitter w-8 h-8 border flex items-center justify-center p-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={shareTwitter}>
                    <FaTwitter className="text-[#4267B2]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reply Card */}
      {!reply && (
        <form
          onSubmit={handleSubmit}
          className="w-full bg-copyrightFooter-900 px-3 lg:px-6 pb-3 text-textSecondary-900 border-b border-t border-paginationBg-900
    ">
          <div className="review__content w-full mt-1">
            <span className="text-textSecondary-900 font-semibold text-xs lg:text-sm">
              Write a Reply
            </span>
            <div className="admin flex flex-col lg:flex-row lg:gap-4 gap-2 lg:items-center mt-1">
              <textarea
                rows={5}
                maxLength={500}
                className="w-full bg-transparent outline-none border text-xs lg:text-sm resize-none p-2"
                value={textArea}
                onChange={(e) => setTextArea(e.target.value)}></textarea>
              <button
                type="submit"
                className="text-white bg-textPrimary-900 py-2 px-6 lg:px-0 rounded-md w-max lg:w-[10%] text-xs lg:text-sm inline-flex items-center">
                Reply <FaShare className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default ReviewCardWithoutReply;
