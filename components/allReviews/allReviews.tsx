import ReviewCard from "@/components/reviewCard/reviewCard";
import { getPublicReviews } from "@/lib/api";
import { formNow, handelError } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export const AllReviews = () => {
  const [allReview, setAllReview] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllReviews = async () => {
    try {
      setIsLoading(true);
      const { data } = await getPublicReviews("cm0cqkyk10003yphwe3pew7sl");
      console.log(data);
      setAllReview(data?.reviews);
    } catch (error) {
      console.log(error);
      handelError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllReviews();
  }, []);

  console.log("allReview", allReview);

  return (
    <div className="container mx-auto md:px-20 px-4 lg:my-0 my-2">
      <div className="all__reviews__container bg-white shadow-md">
        {allReview?.map((item: any, i: number) => {
          return (
            <ReviewCard
              key={i}
              image={item?.user?.photo}
              name={item?.user?.name}
              date={formNow(item?.createdAt)}
              rating={item?.rating}
              feedback={item?.feedback}
            />
          );
        })}

        <div className="viewMore py-2 text-center">
          <Link href="/reviews">
            <button className="bg-transparent border rounded-full border-textPrimary-900 px-6 py-1 text-textPrimary-900 hover:bg-textPrimary-900 hover:text-white font-medium duration-300">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
