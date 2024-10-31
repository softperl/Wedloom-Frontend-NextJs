"use client";
import React from "react";
import ExploreHeading from "@/components/exploreHeading";
import Link from "next/link";

const BlogTags = ({ post }: any) => {
  return (
    <div className="blog_tags lg:pb-16 lg:pt-6 pb-8 border-b">
      <div className="blog_tags_content container mx-auto lg:px-20 px-4">
        <div className="content_start">
          <ExploreHeading text="Related Tags" />

          <div className="all_tags flex gap-3 flex-wrap justify-center">
            {post?.tags?.map((tag: any, i: number) => {
              return (
                <p
                  key={i}
                  className="lg:text-lg text-sm text-textPrimary-900 cursor-pointer">
                  <Link href="/tags">{tag} ,</Link>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTags;
