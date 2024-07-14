"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import {
  FaArrowLeftLong,
  FaCloudArrowUp,
  FaSquareXmark,
} from "react-icons/fa6";

const UploadImagetoMenu = () => {
  // Image State
  const [files, setFiles] = useState<any>([]);

  const removeImage = (index: number) => {
    const file = [...files];
    file.splice(index, 1);
    setFiles(file);
  };

  return (
    <div>
      {/* Heading */}
      <div className="bg-sectionBg-900 px-4 py-3">
        <Link href="/vendor/profile/menu/">
          <h2 className="text-textSecondary-900 text-lg cursor-pointer inline-flex items-center">
            {" "}
            <FaArrowLeftLong className="w-5 h-5 mr-2" />
            Upload Images to Menu
          </h2>
        </Link>
      </div>

      {/* Upload Box */}
      <div className="w-full h-full mt-12 flex justify-center items-center">
        {/* Image Upload */}
        <label htmlFor="file" className="text-textSecondary-900 cursor-pointer">
          <div className="border-2 border-dashed border-paginationBg-900 w-max text-center pt-2 pb-6 px-10">
            <FaCloudArrowUp className="w-5 h-5 mx-auto" />
            <div className="my-4">
              <p className="text-sm mb-2">Max file size : 16 MB</p>
              <p className="text-sm mb-2">Accepted Formats: jpg, jpeg, png</p>
              <p className="text-sm mb-2">Max files: 40</p>
            </div>
            <div>
              <span className="bg-textPrimary-900 text-white px-7 text-sm py-2 rounded-full">
                Choose Files
              </span>
            </div>
          </div>
        </label>
        <input
          type="file"
          id="file"
          accept=".png, .jpeg, .jpg"
          multiple
          max={40}
          style={{ display: "none" }}
          onChange={(e) => setFiles(e.target.files)}
        />
      </div>

      {/* Preview Box */}
      <div className="mt-16 mb-4 mx-6 w-full flex flex-wrap items-center gap-4">
        {files?.length > 0 &&
          Array.from(files)
            .slice(0, 40)
            .map((img, i) => {
              return (
                <div
                  key={i}
                  className="w-20 h-20 border-paginationBg-900 border p-1 relative">
                  <Image
                    fill
                    //@ts-ignore
                    src={img ? URL.createObjectURL(img) : null}
                    alt="images"
                    className="w-full h-full"
                  />

                  {/* close */}
                  <div
                    className="text-textPrimary-900 absolute top-[-10px] -right-[5px] cursor-pointer"
                    onClick={() => removeImage(i)}>
                    <FaSquareXmark className="w-5 h-5" />
                  </div>
                </div>
              );
            })}
        {/* Buttons */}
      </div>
      {files?.length > 0 && (
        <div>
          <button
            className={`w-6/12  text-white py-4 text-sm ${
              files.length > 40
                ? "bg-[#F396BB] cursor-not-allowed"
                : "bg-textPrimary-900 cursor-pointer"
            }`}
            disabled={files.length > 40}>
            Upload Files
          </button>
          <button
            className={`w-6/12  text-white py-4 text-sm ${
              files.length < 40
                ? "bg-[#F396BB] cursor-not-allowed"
                : "bg-textPrimary-900 cursor-pointer"
            }`}
            disabled={files.length < 40}>
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadImagetoMenu;
