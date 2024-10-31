"use client";
import Image from "next/image";
import React from "react";

const BlogBody = ({ post }: any) => {
  return (
    <div className="blog_body py-4 px-4 border-b mb-4">
      <div className="blog_body_container container mx-auto lg:px-20 text-textSecondary-900">
        {/* Subheader */}
        <div className="subhader">
          <p className="leading-6 font-medium text-lg lg:text-2xl text-textPrimary-900">
            {post?.description}
          </p>
        </div>

        {/* Content */}
        <div className="content my-8">
          <div className="contentPart1 my-6">
            <p className="leading-8 lg:text-base text-sm">{post?.content}</p>
          </div>

          {/* <div className="video flex gap-4">
            <div className="project__video w-full">
              <iframe
                className="w-full h-56"
                src="https://www.youtube.com/embed/JRQei9hJekc"
                title="32Stitches & CHENDA, Harley Bird - Freedom [NCS Release]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
            <div className="project__video w-full">
              <iframe
                className="w-full h-56"
                src="https://www.youtube.com/embed/JRQei9hJekc"
                title="32Stitches & CHENDA, Harley Bird - Freedom [NCS Release]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
