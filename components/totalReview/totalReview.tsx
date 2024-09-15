"use client";
import React from "react";
import ReviewCard from "@/components/reviewCard/reviewCard";
import { formNow } from "@/lib/utils";

const TotalReview = ({ data }: { data: any }) => {
  return (
    <div className="container mx-auto md:px-20 px-4 lg:my-0 my-2">
      <div className="total__reviews__container bg-white shadow-md mb-10">
        {data?.map((item: any, i: number) => {
          return (
            <ReviewCard
              key={i}
              image={item?.user?.photo}
              name={item?.user?.name}
              date={formNow(item?.createdAt)}
              rating={item?.rating}
              feedback={item?.feedback}
              reply={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TotalReview;
