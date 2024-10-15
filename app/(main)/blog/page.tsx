import BlogExplore from "@/components/blogExplore/BlogExplore";
import BlogList from "@/components/blogList/blogList";
import BlogsBanner from "@/components/blogsBanner/bogsBanner";
import Instagram from "@/components/instagram/instagram";
import SubmitWedding from "@/components/submitWedding/submitWedding";
import VendorSearch from "@/components/vendorSearch/vendorSearch";
import React from "react";

export default function page() {
  return (
    <>
      <BlogsBanner
        img1="/pexels-photo-1024965.jpeg"
        article1="Home Grown Shoe Labels You Cannot Miss While Shopping For Your Bridal Shoes!"
        article2=" 60+ Arabic Bridal Mehndi Designs For The Ladies Who Want Something Unique!"
      />
      <BlogList />
      <BlogExplore />
      <VendorSearch />
      <Instagram />
      <SubmitWedding background="/pexels-photo-2174662.jpeg" />
    </>
  );
}
