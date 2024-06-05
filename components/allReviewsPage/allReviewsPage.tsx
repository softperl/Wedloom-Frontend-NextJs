"use client";
import React from "react";
import Path from "@/components/routesPath/path";
import Review from "@/components/submitReview/review";

export const AllReviewsPage = () => {
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
          <Review heading="Reviews (37)" />
        </div>
      </div>
    </div>
  );
};
