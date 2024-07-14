import BlogBody from "@/components/blogBody/blogBody";
import BlogExplore from "@/components/blogExplore/BlogExplore";
import BlogHeader from "@/components/blogHeader/blogHeader";
import BlogTags from "@/components/blogTags/blogTags";
import CommentBox from "@/components/commentBox/commentBox";
import Instagram from "@/components/instagram/instagram";
import LatestBlogs from "@/components/latestBlogs/latestBlogs";
import React from "react";

export default function page() {
  return (
    <>
      <BlogHeader post={{}} />
      <BlogBody />
      <BlogTags />
      <BlogExplore />
      <CommentBox />
      <Instagram />
      <LatestBlogs heading="More Blogs" />
    </>
  );
}
