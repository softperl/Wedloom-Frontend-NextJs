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
import type { Metadata, ResolvingMetadata } from "next";
import Head from "next/head";

type Props = {
  params: { slug: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const data = await fetchFn(`/blog/post/get/${slug}`, {
    method: "GET",
  });

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: data?.post?.title,
    description: data?.post?.description,
    keywords: data?.post?.tags,
  };
}

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
    console.log(post);
  } catch (error) {
    console.log(error);
    notFound();
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
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
