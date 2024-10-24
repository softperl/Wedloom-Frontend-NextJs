import React from "react";
import ShortListCard from "@/components/userProfile/shortListCard";

const UserShortlists = () => {
  return (
    <div className="w-full h-full">
      {/* Heading */}
      <div className="p-4 border-b border-b-paginationBg-900">
        <h2 className="text-base tracking-widest text-textSecondary-900 leading-none">
          Venues
        </h2>
      </div>

      {/* Content */}
      <div className="my-4 px-4">
        {/* Card */}
        <ShortListCard
          image="/images.jpeg"
          name="Hotel Grand Maple"
          finalize
          price="30,000"
        />
        <ShortListCard
          image="/userlove.jpeg"
          name="Hotel Kashmiri Swag"
          finalize
          price="30,000"
        />
        <ShortListCard
          image="/userlove.jpeg"
          name="Karachi Grand Venues"
          finalize
          price="30,000"
        />
      </div>
    </div>
  );
};

export default UserShortlists;
