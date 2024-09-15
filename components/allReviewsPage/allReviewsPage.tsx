"use client";
import Path from "@/components/routesPath/path";
import Review from "@/components/submitReview/review";

export const AllReviewsPage = ({ data }: { data: any }) => {
  return (
    <div className="all_reviews">
      <div className="container mx-auto lg:px-20 px-4">
        {/* Path */}
        <div className="paths py-4">
          <Path
            first="Home"
            second="Photographer"
            third="Profile"
            fourth="Review"
            fifth="All Reviews"
          />
        </div>
        {/* Content */}
        <div className="content">
          <Review heading={`Reviews (${data?.length})`} />
        </div>
      </div>
    </div>
  );
};
