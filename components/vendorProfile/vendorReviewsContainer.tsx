"use client";
import Pagination from "@/components/pagination/pagination";
import ReviewCardWithoutReply from "@/components/reviewCard/reviewCardWithoutReply";
import { getReviews } from "@/lib/api";
import { formNow, handelError } from "@/lib/utils";
import { useEffect, useState } from "react";

const VendorReviewsContainer = () => {
  const [reviews, setReviews] = useState([]);
  const getReviewsFn = async () => {
    try {
      const { data } = await getReviews();
      setReviews(data?.reviews);
      console.log(data);
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  useEffect(() => {
    getReviewsFn();
  }, []);

  return (
    <div>
      <div className="bg-sectionBg-900 px-2 py-3">
        <h2 className="text-textSecondary-900 lg:text-lg">
          Reviews from Customar
        </h2>
      </div>
      {reviews?.map((item: any, i: number) => {
        return (
          <ReviewCardWithoutReply
            key={i}
            reviewId={item?.id}
            image={item?.user?.photo}
            name={item?.user?.name}
            date={formNow(item?.createdAt)}
            rating={item?.rating}
            feedback={item?.feedback}
            reply={item?.reply}
          />
        );
      })}

      <Pagination />
    </div>
  );
};

export default VendorReviewsContainer;
