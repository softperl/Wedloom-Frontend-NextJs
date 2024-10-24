"use client";

import React, { useState } from "react";
import Data from "@/components/data/blogData";
import Pagination from "@/components/pagination/pagination";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";

const BlogCard = ({ posts, categories }: any) => {
  const [blogs, setBlogs] = useState(Data);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [activeAll, setActiveAll] = useState(true);

  const [query, setQuery] = useState("");

  const filteredItems = (value: any) => {
    const updatedItem = Data.filter((currE) => {
      return currE.category === value;
    });
    setBlogs(updatedItem);
  };

  const clickedCategory1 = () => {
    setActive(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActiveAll(false);
  };
  const clickedCategory2 = () => {
    setActive2(true);
    setActive(false);
    setActive3(false);
    setActive4(false);
    setActiveAll(false);
  };
  const clickedCategory3 = () => {
    setActive(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
    setActiveAll(false);
  };
  const clickedCategory4 = () => {
    setActive(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
    setActiveAll(false);
  };
  const clickedCategoryAll = () => {
    setActive(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActiveAll(true);
  };

  return (
    <>
      <div>
        {/* Category Button */}
        <div className="buttons w-full flex lg:justify-between lg:items-center lg:gap-8 my-8 gap-2 lg:flex-row flex-col justify-start items-start">
          {/* Buttons Div */}
          <div className="btn_div lg:w-9/12 w-full flex gap-2 flex-wrap items-start justify-start">
            <button
              className={`${
                activeAll
                  ? " bg-textPrimary-900 text-white"
                  : "border-textPrimary-900 border"
              } py-2 px-6 font-medium rounded-3xl`}
              onClick={() => {
                setBlogs(Data);
                clickedCategoryAll();
              }}>
              All
            </button>

            {categories.map((cat: any, i: number) => (
              <button
                key={i}
                className={`${
                  active3
                    ? " bg-textPrimary-900 text-white"
                    : "border-textPrimary-900 border text-black"
                } py-2 px-6 font-medium rounded-3xl`}
                onClick={() => {
                  filteredItems("category3");
                  clickedCategory3();
                }}>
                {cat.name}
              </button>
            ))}
          </div>

          {/* SearchBox */}
          <div className="searchBox lg:w-3/12 w-full mt-4 lg:mt-0 flex items-center">
            <div className="icon w-1/12 text-center">
              <BiSearch className="text-textPrimary-900 text-2xl" />
            </div>
            <div className="input_search w-11/12 border-b border-textPrimary-900 pb-1">
              <input
                type="text"
                placeholder="Search Blog...."
                className=" outline-none border-none text-textPrimary-900 placeholder:text-textSecondary-900 w-full"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="card_div flex flex-wrap justify-between">
          {posts
            .filter((blog: any) =>
              blog.title.toLocaleLowerCase().includes(query)
            )
            .map((elem: any) => {
              const { id, thumbnail, title, description, slug } = elem;
              return (
                <div
                  className="lg:w-4/12 md:w-[48%] w-full lg:px-4 py-4"
                  key={id}>
                  <div className="blog_card_content text-center border border-textPrimary-900 rounded-md">
                    {/* Blog Image */}
                    <div className="image">
                      {thumbnail ? (
                        <Image
                          width={500}
                          height={500}
                          src={thumbnail}
                          alt="blog_Image"
                          className="h-64 rounded-md"
                        />
                      ) : (
                        <div className="h-64 rounded-md bg-slate-200"></div>
                      )}
                    </div>

                    {/* Blog Header */}
                    <Link href={`/blog/${slug}`}>
                      <div className="header mt-8 px-4 overflow-hidden h-full max-h-[145px] pb-2">
                        <h1 className="text-textSecondary-900 font-medium font-serif text-2xl lg:text-3xl cursor-pointer capitalize">
                          {title}
                        </h1>
                      </div>

                      {/* Author Info */}
                      <div className="author_info mt-5 px-4">
                        <p className="text-sm text-textSecondary-900">
                          <span className="mr-2">{elem.user?.name}</span> |{" "}
                          <span className="mx-2">
                            {new Date(elem.createdAt).toDateString()}
                          </span>
                        </p>
                      </div>

                      {/* Content Area */}
                      <div className="totalContent cursor-pointer mt-7 text-sm text-dateColor-900 leading-6 pb-4">
                        <div className="content_area h-24 overflow-hidden px-4">
                          <p>{description}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="pagination hidden lg:block">
          {/* <Pagination pageCount /> */}
        </div>

        <div className="load_more block lg:hidden mb-8">
          <div className="load_more_content flex justify-center">
            <Link href="/more">
              <button className="text-white px-6 py-2 font-medium rounded-full bg-textPrimary-900">
                Load Nore Stories
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
