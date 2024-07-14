import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const SimilarWeedingCard = ({
  image,
  name,
  location,
  totalReview,
  budget,
}: {
  image: string;
  name: string;
  location: string;
  totalReview: string | number;
  budget: string | number;
}) => {
  return (
    <div className="w-full group p-4 hover:shadow-lg hover:rounded-md cursor-pointer">
      <div className="FvendrosCarousel__content w-full text-white">
        <div className="wrapper w-full rounded-md">
          <div className="FvendrosCarousel__img w-full overflow-hidden relative">
            <Image
              width={500}
              height={500}
              src={image}
              alt=""
              className="w-full h-40 group-hover:scale-125 duration-200 rounded-md"
            />
          </div>
          {/* Name */}
          <div className="FvendrosCarousel_content pt-2 text-textSecondary-900">
            <Link href="/similar">
              <div className="name flex gap-2 items-center">
                <p className="text-base font-bold">{name}</p>
                <span>
                  <Image
                    width={500}
                    height={500}
                    src="https://imgs.search.brave.com/dU95yB3CF6HwwAiOFaBuXbHOiC_wnFzcAEHhdMB6UpM/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9mcmVl/cG5naW1nLmNvbS9k/b3dubG9hZC9zb2Np/YWxfbWVkaWEvNzQy/NjktdmVyaWZpZWQt/aW5zdGFncmFtLWlj/b25zLW1lZGlhLXN5/bWJvbC1jb21wdXRl/ci1zb2NpYWwucG5n"
                    alt=""
                    className="w-6"
                  />
                </span>
              </div>
            </Link>
            {/* Location Box */}
            <Link href="map">
              <div className="location text-sm text-textSecondary-900 my-2">
                <FaLocationDot className="w-5 h-5" />{" "}
                <span className="font-medium ml-2">{location}</span>{" "}
              </div>
            </Link>

            {/* Reviews */}
            <div className="flex items-center gap-1 mb-2">
              <FaStar className="w-5 h-5 text-textPrimary-900" />
              <span className="font-semibold">4.9</span>{" "}
              <span className="text-sm">({totalReview} review)</span>
            </div>

            {/* Price Box */}
            <div className="price">
              <span className="text-lg font-semibold text-textSecondary-900">
                {budget} <span className="text-sm">per day</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarWeedingCard;
