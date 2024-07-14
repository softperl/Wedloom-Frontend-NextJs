import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestReview = ({
  avatar,
  category,
  shortReview,
  name,
  date,
}: {
  avatar: string;
  category: string;
  shortReview: string;
  name: string;
  date: any;
}) => {
  return (
    <div className="latest__review bg-white shadow-lg lg:shadow-md p-8 mb-8">
      <div className="latest__review_card flex flex-wrap lg:flex-nowrap">
        <div className="review__image lg:w-1/12 w-full flex justify-center mb-4 lg:mb-0">
          <Image
            width={500}
            height={500}
            src={avatar}
            alt="userImage"
            className="w-10 h-10 lg:h-20 lg:w-20 rounded-full ring-4 ring-textPrimary-900"
          />
        </div>
        <div className="review__content lg:w-11/12 w-full lg:text-start text-center">
          <h5 className="mb-2 font-semibold text-base text-textSecondary-900">
            {category}
          </h5>
          <div className="review__desc overflow-hidden flex mb-2 items-center">
            <div className="review__desc_content h-4 text-sm text-textSecondary-900">
              <p>{shortReview}</p>
            </div>
            <Link href="/reviewdetails">
              <span className="text-dateColor-900 font-bold">...more</span>
            </Link>
          </div>
          <div className="auhtor">
            <p className="text-sm text-dateColor-900 font-medium">
              Reviewd By: <span>{name}</span> | <span>{date}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestReview;
