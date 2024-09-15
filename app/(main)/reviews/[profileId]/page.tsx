"use client";

import { AllReviewsPage } from "@/components/allReviewsPage/allReviewsPage";
import TotalReview from "@/components/totalReview/totalReview";
import { getPublicReviews } from "@/lib/api";
import { handelError } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { profileId: string } }) {
  const [reviews, setReviews] = useState<any>([]);

  const fetchData = async () => {
    try {
      const { data } = await getPublicReviews(params?.profileId);
      setReviews(data?.reviews);
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AllReviewsPage data={reviews} />
      <TotalReview data={reviews} />
    </>
  );
}
