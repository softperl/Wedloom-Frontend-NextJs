"use client";
import { AllReviews } from "@/components/allReviews/allReviews";
import ProfileFAQ from "@/components/profileFaq/profileFAQ";
import SimilarWedding from "@/components/similarWedding/similarWedding";
import SingleProfile from "@/components/singleProfile/singleProfile";
import React, { useRef } from "react";

export default function page() {
  const projectRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const reviewsRef = useRef<any>(null);

  const scrollSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <SingleProfile
        scroll={scrollSection}
        project={projectRef}
        about={aboutRef}
        review={reviewsRef}
      />
      <AllReviews />
      <ProfileFAQ />
      <SimilarWedding />
    </>
  );
}
