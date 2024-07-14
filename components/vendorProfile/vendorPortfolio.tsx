"use client";
import Link from "next/link";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const VendorPortfolio = () => {
  // State
  const [certified, setCertified] = useState(false);

  return (
    <div>
      {/* Heading */}
      <div className="bg-sectionBg-900 px-2 lg:px-6 py-3 flex justify-between items-center">
        {/* Left */}
        <div>
          <Link href="/vendor/profile/projects">
            <h2 className="text-textSecondary-900 lg:text-lg cursor-pointer inline-flex items-center">
              {" "}
              <FaArrowLeftLong className="w-5 h-5 mr-2" /> Portfolio
            </h2>
          </Link>
        </div>

        {/* Right */}
        <div>
          <Link href="/imageupload/guideline">
            <span className="text-xs lg:text-sm font-medium text-textPrimary-900 cursor-pointer">
              View image upload guidelines
            </span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 lg:px-6 pt-4 pb-14">
        {/* Check Items */}
        <div>
          <div className="flex gap-4 items-center">
            <div>
              <input
                className="accent-textPrimary-900 outline-none"
                type="checkbox"
                id="certified"
                checked={certified}
                onChange={(e) => setCertified(e.target.checked)}
              />
            </div>
            <div>
              <label
                className={`text-xs lg:text-sm font-medium ${
                  certified ? "text-[#27AE5F]" : "text-red-600"
                }`}
                htmlFor="certified">
                I certify that the work uploaded is my own / is the copyright of
                our firm. I understand that any work found to be someone
                else&apos;s would be removed immediately, and action could be
                taken.
              </label>
            </div>
          </div>
        </div>

        <Link href={certified ? "/vendor/profile/projects/image-upload" : ""}>
          <div
            className={`mt-16 w-full lg:w-60 h-64 ${
              certified ? "cursor-pointer" : "cursor-not-allowed"
            } text-white font-semibold flex justify-center items-center text-center`}
            style={{
              background: `url("/addNewAlbum.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
            <span>
              <FaPlus className="w-5 h-5 mx-auto" />
              <p>Add new image</p>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VendorPortfolio;
