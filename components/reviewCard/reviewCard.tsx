"use client";
import React, { useState } from "react";
import ReplyCard from "@/components/reviewCard/replyCard";
import { FaStar } from "react-icons/fa";
import { FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import Image from "next/image";

const ReviewCard = ({ image, name, date, rating, feedback, reply }: any) => {
  const [viewLess, setViewLess] = useState(false);
  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=https://wedplanr.com/`;
  const shareTwitter = `https://twitter.com/intent/tweet?url=https://wedplanr.com/`;
  return (
    <>
      <div className="w-full py-6 px-5">
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
                  alt="bride_image"
                  className="w-14 h-14 rounded-full"
                />
                <div className="name">
                  <h5 className="text-textBlack-900 font-bold mb-1">{name}</h5>
                  <p className="text-textSecondary-900 text-sm">{date}</p>
                </div>
              </div>

              <div className="overall__rating flex items-center justify-center">
                <span className="bg-textPrimary-900 p-1 text-white font-semibold inline-flex">
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
                    <FaTwitter className="text-[#1DA1F2]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="review_content mt-4">
            <div className="initial_view h-14 overflow-hidden pr-5 text-textSecondary-900 leading-7 font-normal text-sm">
              <span>{feedback}</span>
            </div>

            {viewLess && (
              <div className="hidden_view text-textSecondary-900 leading-7 font-normal text-sm pr-5">
                <span>{feedback}</span>
              </div>
            )}
            <span
              className="text-sm font-bold text-textSecondary-900 cursor-pointer"
              onClick={() => setViewLess(!viewLess)}>
              {viewLess ? "Read Less.." : "..Read More"}
            </span>
            <div className="block lg:hidden mt-4">
              <div className="social_links flex items-center gap-4">
                <div className="facebook w-8 h-8 border flex items-center justify-center p-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={shareFacebook}>
                    <i
                      className="fa-brands fa-square-facebook"
                      style={{ color: "#4267B2" }}></i>
                  </a>
                </div>
                <div className="twitter w-8 h-8 border flex items-center justify-center p-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={shareTwitter}>
                    <i
                      className="fa-brands fa-twitter"
                      style={{ color: "#1DA1F2" }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReplyCard />
    </>
  );
};

export default ReviewCard;
