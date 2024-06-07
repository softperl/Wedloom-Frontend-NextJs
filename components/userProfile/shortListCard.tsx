import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const ShortListCard = ({
  image,
  name,
  finalize = false,
  price,
}: {
  image: string;
  name: string;
  finalize?: boolean;
  price: string;
}) => {
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap justify-betwee items-center gap-4 border-b border-b-paginationBg-900 pb-4 mb-4">
      {/* Left Imagee */}
      <div className="md:w-[20%] w-full">
        <Link href="/photographer/profile">
          <img
            src={image}
            alt="hotel_image"
            className="w-full h-32 md:w-36 md:h-24 rounded-md"
          />
        </Link>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-[80%]">
        {/* Heading */}
        <Link href="/photographer/profile">
          <h1 className="text-sm md:text-base text-textPrimary-900 font-semibold">
            {name}
          </h1>
        </Link>

        {/* Ratings */}
        <div className="text-xs md:text-sm mt-1 flex flex-nowrap gap-1">
          <FaStar className="w-5 h-5 text-[#FFD700]" />
          <FaStar className="w-5 h-5 text-[#FFD700]" />
          <FaStar className="w-5 h-5 text-[#FFD700]" />
          <FaStar className="w-5 h-5 text-[#FFD700]" />
          <FaStar className="w-5 h-5 text-[#FFD700]" />
          <FaStar className="w-5 h-5 text-[#FFD700]" />
          <span className="text-gray-600 ml-1 font-medium">4.9</span>
        </div>

        {/* Review and button */}
        <div>
          <span className="text-xs md:text-[13px] text-gray-600">
            7 Reviews
          </span>
        </div>

        {/* Price Per day */}
        <div
          className={`flex justify-between items-center md:pr-8 ${
            finalize ? "mt-0" : "mt-[6px]"
          }`}>
          <span className="text-xs font-medium text-textPrimary-900">
            RS {price} Per Day
          </span>

          {finalize && (
            <Link href="/photographer/profile">
              <button className="text-white text-xs md:text-sm bg-textPrimary-900 px-4 py-[6px] rounded-md font-medium uppercase">
                Finalize
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortListCard;
