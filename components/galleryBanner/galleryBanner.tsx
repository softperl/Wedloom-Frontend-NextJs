"use client";
import { formatDate } from "date-fns/format";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillHeart, AiFillPinterest, AiOutlineHeart } from "react-icons/ai";
import { FaPinterest, FaShareSquare } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiShare } from "react-icons/pi";

const GalleryBanner = ({
  bannerPhoto,
  albums,
  vendorName,
  vendorType,
  more,
  createdAt,
}: any) => {
  const [filled, setFilled] = useState(false);
  return (
    <div className="gallery_banner w-full lg:h-[70vh] bg-replyBox-900">
      <div className="galleryBanner_content lg:flex h-max lg:h-full w-full border-b border-paginationBg-900">
        {/* Gallery Content Starts Here */}
        {/* Left */}

        <div className="gB_left w-full lg:w-9/12 h-full relative">
          <Image
            width={500}
            height={500}
            src={bannerPhoto || "/placehoderImg.jpg"}
            alt="galleryBanner"
            className="w-full h-full"
          />
          <div className="lg:block hidden">
            <div className="socialLinks flex gap-8 absolute bottom-6 right-6">
              <div
                className="pinterest bg-white px-3 text-white py-1 font-semibold cursor-pointer"
                style={{ backgroundColor: "#E60023" }}>
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center">
                  <AiFillPinterest className="mr-1 text-2xl" />
                  <span>Pin</span>
                </a>
              </div>
              <div
                className="love bg-white px-3 py-1 cursor-pointer flex items-center"
                onClick={() => setFilled(!filled)}>
                {!filled ? (
                  <AiOutlineHeart className="mr-1 text-2xl" />
                ) : (
                  <AiFillHeart className="mr-1 text-textPrimary-900 text-2xl" />
                )}
                <span>{filled ? 1 : 0}</span>
              </div>
              <div className="share bg-white px-3 py-1 font-semibold cursor-pointer flex items-center justify-center">
                <PiShare className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="gB_right w-full lg:w-3/12 h-full lg:bg-white bg-sectionBg-900">
          {/* Heading */}
          <div className="details pb-5 border-b border-paginationBg-900 px-4 pt-4">
            <div className="history text-dateColor-900 font-medium text-xs lg:text-sm flex items-center">
              <MdOutlineWatchLater className="mr-1 text-lg" />
              <span>
                Uploaded {createdAt && formatDate(createdAt, "d MMM yyyy")}
              </span>
            </div>
            <div className="heading mt-5">
              <h3 className="text-textSecondary-900 capitalize font-semibold text-sm lg:text-base">
                Photo By {vendorName} - {vendorType}
              </h3>
            </div>

            {/* Mobile Social */}
            <div className="block lg:hidden">
              <div className="socialLinks flex gap-8 mt-3">
                <div
                  className="pinterest bg-white px-1 lg:px-3 text-white py-1 font-semibold cursor-pointer shadow-sm"
                  style={{ backgroundColor: "#E60023" }}>
                  <a
                    href="https://www.pinterest.com"
                    target="_blank"
                    rel="noreferrer">
                    <FaPinterest className="mr-1" />
                    <span>Pin</span>
                  </a>
                </div>
                <div
                  className="love bg-white px-3 py-1 cursor-pointer shadow-sm"
                  onClick={() => setFilled(!filled)}>
                  {!filled ? (
                    <AiOutlineHeart className="mr-1 text-2xl" />
                  ) : (
                    <AiFillHeart className="mr-1 text-textPrimary-900 text-2xl" />
                  )}
                  <span>{filled ? 1 : 0}</span>
                </div>
                <div className="share bg-white px-3 py-1 font-semibold cursor-pointer shadow-sm">
                  <FaShareSquare />
                </div>
              </div>
            </div>
          </div>

          {/* Album */}
          <div className="album pt-6 px-4 pb-8 border-b border-paginationBg-900">
            <div className="album_heading">
              <h3 className="text-textSecondary-900 font-semibold">
                View More photos from this Album
              </h3>
            </div>
            <div className="image_div flex gap-2 mt-4">
              {albums?.slice(0, 4)?.map((item: any, i: number) => {
                return (
                  <div key={i} className="image4 w-full h-24 relative">
                    <Link href="/">
                      <Image
                        width={500}
                        height={500}
                        src={item?.photo}
                        alt=""
                        className="h-full w-full rounded-md"
                      />
                      {i === 3 && (
                        <div
                          className="overlay absolute w-full h-full right-0 bottom-0 flex justify-center items-center cursor-pointer rounded-md"
                          style={{
                            background:
                              "radial-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
                          }}>
                          <span className="text-white text-sm">
                            +{more} More
                          </span>
                        </div>
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryBanner;
