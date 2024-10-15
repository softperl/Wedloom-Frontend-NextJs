"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";

const BlogHeader = ({ post }: any) => {
  const pathname = usePathname();
  const pageLink = encodeURI(pathname);
  const copyLink = () => {
    navigator.clipboard.writeText(pageLink);
    alert("Link Copied");
  };
  return (
    <div
      className="blog_header h-[60vh] px-4"
      style={{
        background:
          "radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),url('/pexels-photo-7514865.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <div className="blog_header_container container mx-auto lg:px-20 h-full">
        <div className="heading flex justify-end lg:flex-row flex-col w-full items-end lg:justify-between h-full text-white pb-8">
          <div className="right w-full">
            <div className="heading">
              <h1 className="text-xl lg:text-4xl font-bold tracking-wider mb-4">
                {post.title}
              </h1>
            </div>
            <div className="date font-semibold text-xs lg:text-base">
              <p>
                {" "}
                {new Date(post.createdAt).toDateString()}{" "}
                <span className="px-2">|</span> {post.user?.name}
              </p>
            </div>
          </div>
          <div className="left w-full lg:mt-0 mt-4">
            <div className="icons flex gap-4 lg:justify-end">
              <div className="px-3 py-1 flex items-center justify-center bg-facebookBg-900 w-max">
                <a
                  href={`https://www.facebook.com/share.php?u=${pageLink}`}
                  target="_blank"
                  rel="noreferrer">
                  {" "}
                  <BiLogoFacebook className="text-xl" />
                </a>
              </div>

              <div className="px-3 py-1 flex items-center justify-center bg-twitterBg-900 w-max">
                <a
                  href={`https://twitter.com/share?url=${pageLink}`}
                  target="_blank"
                  rel="noreferrer">
                  {" "}
                  <BiLogoTwitter className="text-xl" />
                </a>
              </div>

              <div
                className="px-3 py-1 flex items-center justify-center bg-gray-500 w-max cursor-pointer"
                onClick={copyLink}>
                <span>
                  <FaShareAlt className="text-xl" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
