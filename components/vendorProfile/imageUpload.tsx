"use client";

import { useProjects } from "@/lib/hooks/useProjects";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaCloudArrowUp } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const ImageUpload = () => {
  const { setProjectsFiles } = useProjects();
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>("");

  const addFiles = (newFiles: FileList | null) => {
    if (newFiles) {
      const updatedFiles = [...files, ...Array.from(newFiles)];
      if (updatedFiles.length > 40) {
        setError("You can upload a maximum of 40 images.");
      } else {
        setFiles(updatedFiles);
        setError("");
      }
    }
  };

  const removeImage = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const uploadFiles = () => {
    setProjectsFiles(files);
    router.push("/vendor/profile/projects");
  };
  return (
    <div>
      {/* Heading */}
      <div className="bg-sectionBg-900 px-4 py-3">
        <Link href="/vendor/profile/projects/portfolio">
          <h2 className="text-textSecondary-900 lg:text-lg cursor-pointer flex items-center">
            <FaArrowLeftLong className="w-5 h-5 mr-2" /> Upload Images to
            Portfolio
          </h2>
        </Link>
      </div>

      {/* Upload Box */}
      <form className="w-full h-full mt-12 flex justify-center items-center">
        {/* Image Upload */}
        <label htmlFor="file" className="text-textSecondary-900 cursor-pointer">
          <div className="border-2 border-dashed border-paginationBg-900 w-max text-center pt-2 pb-6 px-10">
            <FaCloudArrowUp className="w-10 h-10 mx-auto" />
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
          style={{ display: "none" }}
          onChange={(e) => addFiles(e.target.files)}
        />
      </form>

      {/* Error Message */}
      {error && <div className="mt-4 text-red-500 text-center">{error}</div>}

      {/* Preview Box */}
      <div className="mt-16 mb-4 mx-6 w-full flex flex-wrap items-center gap-4">
        {files.length > 0 &&
          files.slice(0, 40).map((img, i) => {
            return (
              <div
                key={i}
                className="w-20 h-20 border-paginationBg-900 border p-1 relative">
                <Image
                  fill
                  src={URL.createObjectURL(img)}
                  alt="images"
                  className="w-full h-full"
                />

                {/* close */}
                <div
                  className="text-textPrimary-900 absolute top-[-10px] -right-[5px] cursor-pointer"
                  onClick={() => removeImage(i)}>
                  <IoClose className="w-5 h-5 text-white bg-textPrimary-900 rounded-sm" />
                </div>
              </div>
            );
          })}
      </div>

      {files.length > 0 && (
        <div className="flex items-center justify-between gap-6 px-6 pb-6">
          <button
            onClick={uploadFiles}
            className={`w-6/12 text-white py-4 text-sm ${
              files.length > 40
                ? "bg-[#F396BB] cursor-not-allowed"
                : "bg-textPrimary-900 cursor-pointer"
            }`}
            disabled={files.length > 40}>
            Upload Files
          </button>
          <button
            onClick={() => router.push("/vendor/profile/projects")}
            className={`w-6/12 text-textPrimary-900 py-4 text-sm cursor-pointer border border-textPrimary-900`}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
