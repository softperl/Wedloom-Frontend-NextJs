"use client";
import { AllReviews } from "@/components/allReviews/allReviews";
import ProfileFAQ from "@/components/profileFaq/profileFAQ";
import SimilarWedding from "@/components/similarWedding/similarWedding";
import SingleProfile from "@/components/singleProfile/singleProfile";
import { publicVendorProfileById } from "@/lib/api";
import { handelError } from "@/lib/utils";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const params = useParams();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const projectRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const reviewsRef = useRef<any>(null);

  const scrollSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const publicVendorProfileByIdFn = async () => {
    try {
      const { data } = await publicVendorProfileById(params?.profileId);
      setData(data?.vendor);
    } catch (error) {
      console.log(error);
      handelError(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  useEffect(() => {
    publicVendorProfileByIdFn();
  }, []);

  return (
    <>
      <SingleProfile
        scroll={scrollSection}
        project={projectRef}
        about={aboutRef}
        review={reviewsRef}
        data={data}
        isLoading={isLoading}
      />
      <AllReviews />
      <ProfileFAQ />
      <SimilarWedding />
    </>
  );
}
