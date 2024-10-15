import React from "react";
import UserLoveCard from "@/components/userProfile/userLoveCard";

const UserLove = () => {
  return (
    // Card Calling
    <div>
      <UserLoveCard
        authorimg="/userlove.jpeg"
        authorname="Hotel Grand Maple"
        image="/Grand-Resort-Lagonissi-3-1.jpg"
      />
      <UserLoveCard
        authorimg="/userlove.jpeg"
        authorname="Karachi Grand Venue"
        image="/a4989e_847cf82f539449019b0e66d4aaf96fef~mv2.png"
      />
    </div>
  );
};

export default UserLove;
