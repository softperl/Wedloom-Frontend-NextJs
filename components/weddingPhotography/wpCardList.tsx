"use client";
import Tippy from "@tippyjs/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const WpCardList = ({
  img,
  name,
  location,
  category,
  price,
  review,
  totalReview,
  tooltip1,
  tooltip2,
  profileId,
}: any) => {
  const pathname = usePathname();
  return (
    <div className="wpCardList w-full p-3 bg-white rounded-md shadow-sm mb-8">
      <Link href={`/profile/${profileId}`}>
        <div className="wpCard__list_content flex flex-wrap items-center">
          {/* Image Div */}
          <div className="wpCardlist__image w-5/12 relative">
            <Image
              width={500}
              height={500}
              src={img}
              alt="photographer_image"
              className="h-60 w-full rounded-md"
            />
            <div className="handpicked">
              <Tippy
                theme="tomato"
                content={<div className="w-64">{tooltip1}</div>}
                placement={"right"}>
                <Image
                  width={500}
                  height={500}
                  src={"/handpicked.png"}
                  alt="handpic tooltip"
                  className="w-28 absolute top-0 left-0"
                />
              </Tippy>
            </div>
          </div>

          {/* Card Content Details */}
          <div className="wpcardList__content w-7/12 px-6">
            <div className="name mt-2 mb-1 flex w-full justify-between items-center">
              <div className="namebadge flex gap-2 items-center">
                <h5 className="text-xl font-bold text-textSecondary-900">
                  {name}
                </h5>
                <Image
                  width={500}
                  height={500}
                  src={"/blue.webp"}
                  alt="photo"
                  className="w-5 h-5"
                />
              </div>

              {/* Reviews */}
              <div className="flex items-center gap-1">
                <FaStar className="w-5 h-5 text-textPrimary-900" />
                <span className="text-xl">{review}</span>{" "}
                <span className="text-sm">({totalReview} reviews)</span>
              </div>
            </div>

            {/* Location */}
            <div className="location text-sm text-dateColor-900 my-1 flex items-center">
              <FaLocationDot className="w-5 h-5" />{" "}
              <span className="font-medium ml-1">{location}</span>
            </div>

            {/* Category */}
            <div className="package">
              <span className="text-package text-sm font-medium text-dateColor-900">
                {category}
              </span>
            </div>

            {/* Price */}
            <div className="price flex gap-2 md:gap-2 lg:gap-6 items-center flex-wrap mb-2">
              <div className="flex items-center">
                <span className="text-xl mr-2 font-semibold text-textPrimary-900">
                  Rs. {price}
                </span>
                <p className="text-sm text-textSecondary-900 font-medium">
                  per day
                </p>
              </div>
            </div>

            {/* Votes */}
            {/* <div className="tags flex gap-4 flex-wrap">
              <div className="cursor-pointer">
                <span className="font-medium bg-tagsBackground-900 py-1 px-2 text-sm text-textSecondary-900">
                  Professionalism: {vote1} Votes
                </span>
              </div>
              <div className="cursor-pointer">
                <span className="font-medium bg-tagsBackground-900 py-1 px-2 text-sm text-textSecondary-900">
                  Wedding Flims: {vote2} Votes
                </span>
              </div>
              <div className="cursor-pointer">
                <Link href="/moretags">
                  <span className="border-b text-sm text-dateColor-900 font-bold">
                    +2 more
                  </span>
                </Link>
              </div>
            </div> */}

            {/* Photographer short summary */}
            {/* <div className="details h-6 w-full overflow-hidden my-2">
              <span className="text-sm font-medium text-dateColor-900">
                {shortdesc}
              </span>
            </div> */}

            {/* Sheild */}
            {/* 
          <div className="isSafe flex items-center">
            <img src="./wedsafe_icon.webp" alt="shield" className="w-6" />{" "}
            <span className="text-xs bg-carouselBG-900 text-vaccinedText-900 px-1 font-bold">
              VACCINATED
            </span>
          </div> */}

            {/* Button */}

            <div className="button__div w-full flex justify-end">
              <Link href="">
                <button className="bg-textPrimary-900 font-medium text-white py-3 px-3 rounded-md text-base hover:bg-btnHover-900 duration-300">
                  Send Message
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WpCardList;
