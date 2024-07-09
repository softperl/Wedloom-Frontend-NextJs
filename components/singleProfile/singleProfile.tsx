"use client";
import Tippy from "@tippyjs/react";
import React, { useState } from "react";
import Pcontact from "@/components/photographerContact/pcontact";
import PricingProfile from "@/components/pricing/pricingProfile";
import ProjectsSample from "@/components/projects/projectsSample";
import Path from "@/components/routesPath/path";
import { About } from "@/components/about/about";
import Review from "@/components/submitReview/review";
import Link from "next/link";
import { FaFlag, FaImage, FaPenNib, FaPhone, FaStar } from "react-icons/fa";
import {
  FaHeart,
  FaLocationDot,
  FaRegHeart,
  FaShareNodes,
} from "react-icons/fa6";
import Image from "next/image";

const SingleProfile = ({ scroll, project, about, review }: any) => {
  const [click, setclick] = useState(false);
  return (
    <section className="lg:pt-4">
      <div className="single__profile container mx-auto lg:px-20">
        <div className="hidden xl:block">
          <Path first="Home" second="Photographer" third="Profile" />
        </div>
        {/* Single Profile Start */}
        <div className="singleProfile__content lg:flex lg:my-6 lg:gap-8">
          {/* Left */}
          <div className="singleProfileContent__left lg:w-7/12 w-full">
            <div className="details">
              {/* Image */}
              <div className="details__img h-96 relative" id="image">
                <Image
                  src="https://images.pexels.com/photos/1707446/pexels-photo-1707446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="h-96 w-full rounded-md"
                  fill
                />
                <div className="handpicked">
                  <Tippy
                    theme="tomato"
                    content={<div className="w-64">Tooltip</div>}
                    placement={"right"}>
                    <img
                      src={"/handpicked.png"}
                      alt="handpic tooltip"
                      className="w-32 absolute lg:top-0 top-2 left-0"
                    />
                  </Tippy>
                </div>
              </div>

              {/* Deails */}
              <div className="photographer__details w-full bg-white shadow-md lg:pt-4 pt-4 mb-8">
                {/* Name */}
                <div className="photographerDetails__name w-full flex justify-between items-center px-6">
                  <div className="name">
                    <div className="only_name flex items-center gap-3">
                      <h5 className="text-xl text-textSecondary-900 font-bold">
                        THE MEMORY CAPTURE
                      </h5>

                      <div className="blue_badge">
                        <span>
                          <img src={"/blue.webp"} alt="" className="w-5" />
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-textSecondary-900 font-medium hidden lg:block">
                      (Formerly Known as AJEET KHAN)
                    </span>
                  </div>
                  <div className="rating hidden lg:block">
                    <div className="overall__rating">
                      <span className="bg-textPrimary-900 px-4 py-2 text-white font-semibold flex items-center flex-nowrap">
                        <FaStar className="mr-2" />
                        5.0
                      </span>
                      <p className="mt-2 font-semibold text-textSecondary-900">
                        38 reviews
                      </p>
                    </div>
                  </div>
                </div>
                {/* Location */}
                <div className="location text-base text-textSecondary-900 my-4 px-6 flex items-center">
                  <FaLocationDot className="w-5 h-5" />{" "}
                  <span className="font-medium ml-2">Lahore, Pakistan</span>{" "}
                  <Link href="map">
                    <span>(View on Map)</span>
                  </Link>
                </div>

                {/* Contact */}
                <Link href="/contact">
                  <div className="contact text-textPrimary-900 px-6 flex items-center">
                    <FaPhone className="w-5 h-5" />
                    <span className="font-medium ml-2">Contact</span>
                  </div>
                </Link>

                {/* Listing */}

                <div className="listing bg-sectionBg-900 px-8 lg:py-6 py-4 mt-4 text-textBlack-900 flex items-center">
                  <div className="photos w-full border-r-2 cursor-pointer hidden lg:flex items-center">
                    <FaImage className="w-5 h-5 mr-2" />
                    <span>1055 Photos</span>
                  </div>
                  <div className="review block lg:hidden w-full border-r">
                    <div className="overall__rating">
                      <span className="bg-textPrimary-900 lg:px-4 lg:py-2 px-4 py-1 text-white font-semibold">
                        <FaStar className="w-5 h-5 mr-1 lg:mr-2" />
                        5.0
                      </span>
                      <p className="lg:mt-2 font-semibold text-textSecondary-900">
                        38 reviews
                      </p>
                    </div>
                  </div>
                  <div
                    className="photos w-full text-center border-r-2 cursor-pointer lg:flex items-center justify-center"
                    onClick={() => setclick(!click)}>
                    {click ? (
                      <FaHeart className="mr-2 text-textPrimary-900" />
                    ) : (
                      <FaRegHeart className="mr-2" />
                    )}

                    <span>Shortlist</span>
                  </div>
                  <div className="photos w-full text-center border-r-2 cursor-pointer hidden lg:flex items-center justify-center">
                    <FaPenNib className="w-5 h-5 mr-2" />
                    <span>Write a Review</span>
                  </div>
                  <div className="photos w-full text-center cursor-pointer lg:flex items-center justify-center">
                    <FaShareNodes className="w-5 h-5 mr-2" />
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Content For Mobile */}
            <div className="singleProfileContent__right block xl:hidden w-full">
              <PricingProfile />
              <Pcontact />
              <div className="report mt-6 text-textPrimary-900 text-center">
                <Link href="/report">
                  <span className="flex items-center justify-center">
                    <FaFlag className="w-5 h-5 mr-2" />
                    Report Inaccurate Info
                  </span>
                </Link>
              </div>
            </div>

            {/* Section :any */}
            <div className="hidden lg:block">
              <div className="w-full bg-white shadow-md text-base font-semibold px-6 text-textSecondary-900 flex gap-12 mb-4">
                <div
                  className="project cursor-pointer py-4"
                  onClick={() => scroll(project)}>
                  <span>Project</span>
                </div>
                <div
                  className="project cursor-pointer py-4"
                  onClick={() => scroll(about)}>
                  <span>About</span>
                </div>
                <div
                  className="project cursor-pointer py-4"
                  onClick={() => scroll(review)}>
                  <span>Reviews</span>
                </div>
              </div>
            </div>

            {/* Projects Start Section*/}
            <div className="projects bg-white shadow-md mt-6" ref={project}>
              <div className="project__card">
                <ProjectsSample />
              </div>
            </div>
          </div>

          {/* About Section */}

          {/* Right */}

          {/* Pricing Content for Desktop */}
          <div className="singleProfileContent__right lg:w-5/12 w-full hidden lg:block">
            {/* Pricing Components */}
            <PricingProfile />

            {/* Contact Components */}
            <Pcontact />

            <div className="report mt-6 text-textPrimary-900 text-center">
              <Link href="/report">
                <span className="flex items-center justify-center">
                  <FaFlag className="w-5 h-5 mr-3" />
                  Report Inaccurate Info
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:px-20">
        {/* Projects Start Section*/}
        <div className="projects bg-white" ref={about}>
          <div className="project__card">
            <About />
          </div>
        </div>
        {/* Projects Start Section*/}
        <div className="projects bg-white" ref={review}>
          <div className="project__card">
            <Review heading="Reviews for THE MEMORY CAPTURE (38)" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProfile;
