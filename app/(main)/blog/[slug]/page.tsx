import BlogBody from "@/components/blogBody/blogBody";
import BlogExplore from "@/components/blogExplore/BlogExplore";
import BlogHeader from "@/components/blogHeader/blogHeader";
import BlogTags from "@/components/blogTags/blogTags";
import CommentBox from "@/components/commentBox/commentBox";
import Instagram from "@/components/instagram/instagram";
import LatestBlogs from "@/components/latestBlogs/latestBlogs";
import { fetchFn } from "@/lib/server-utils";
import { notFound } from "next/navigation";
import React from "react";

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let post = null;
  try {
    const data = await fetchFn(`/blog/post/get/${slug}`, {
      method: "GET",
    });

    if (!data?.post) {
      notFound();
    }
    post = data?.post;
  } catch (error) {
    console.log(error);
    notFound();
  }
  return (
    <>
      <BlogHeader post={post} />
      <BlogBody />
      <BlogTags />
      <BlogExplore />
      <CommentBox />
      <Instagram />
      <LatestBlogs heading="More Blogs" />
    </>
  );
}
