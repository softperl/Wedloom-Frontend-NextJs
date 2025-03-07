"use client";
import React, { useState } from "react";

import ProjectAlbumView from "@/components/projects/projectAlbumView";
import ProjectVideo from "@/components/projects/projectVideo";
import PortfolioView from "@/components/projects/portfolioView";
import UploadFromImage from "@/components/uploadFromImage/uploadFromImage";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useParams } from "next/navigation";

const ProjectsSample = ({ data }: { data: any }) => {
  const params = useParams();
  const photos = data?.ProjectPhoto;
  const videos = data?.ProjectVideo;
  const albums = data?.ProjectAlbum;

  const [portfolio, setPortfolio] = useState(true);
  const [showAlbum, setShowAlbum] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const portfolioView = () => {
    setPortfolio(true);
    setShowAlbum(false);
    setShowVideo(false);
  };

  const albumView = () => {
    setPortfolio(false);
    setShowVideo(false);
    setShowAlbum(true);
  };

  const videoView = () => {
    setPortfolio(false);
    setShowAlbum(false);
    setShowVideo(true);
  };

  return (
    <div className="projectSample w-full">
      <div className="project_sample_content">
        <div className="content__heading border-b">
          <div className="heading__wrapper px-6 flex gap-8 lg:text-base text-sm text-textSecondary-900 font-medium w-full">
            <div
              className={`protfolio lg:py-6 lg:px-6 p-2 cursor-pointer lg:text-start text-center ${
                portfolio
                  ? "text-textPrimary-900 border-b-4 border-textPrimary-900"
                  : ""
              }`}
              onClick={portfolioView}>
              <span className="text-xs md:text-base">
                PORTFOLIO ({data?._count?.ProjectPhoto})
              </span>
            </div>
            <div
              className={`album lg:py-6 lg:px-6 p-2 cursor-pointer lg:text-start text-center ${
                showAlbum
                  ? "text-textPrimary-900 border-b-4 border-textPrimary-900"
                  : ""
              }`}
              onClick={albumView}>
              <span className="text-xs md:text-base">
                ALBUM ({data?._count?.ProjectAlbum})
              </span>
            </div>
            <div
              className={`video lg:py-6 lg:px-6 p-2 cursor-pointer lg:text-start text-center ${
                showVideo
                  ? "text-textPrimary-900 border-b-4 border-textPrimary-900"
                  : ""
              }`}
              onClick={videoView}>
              <span className="text-xs md:text-base">
                VIDEOS ({data?._count?.ProjectVideo})
              </span>
            </div>
          </div>
        </div>
        <div className="project__sample_content px-6 py-6">
          {portfolio && <PortfolioView data={photos} profileId={data?.id} />}
          {showAlbum && <ProjectAlbumView data={albums} />}
          {showVideo && <ProjectVideo data={videos} />}
        </div>
        {/* Project Button */}
        {data?._count?.ProjectPhoto > 4 && (
          <div className="project__button w-full text-center pb-5 border-b-2 border-paginationBg-900">
            <Link href={`/gallery/${params?.profileId}?photos=all`}>
              <button className="border border-textPrimary-900 text-textPrimary-900 px-8 py-1 rounded-full hover:bg-textPrimary-900 hover:text-white duration-300 font-semibold">
                View More
              </button>
            </Link>
          </div>
        )}

        {/* Project Upload From */}
        <div className="upload__from px-6 pt-6 pb-8 hidden lg:first-letter:block">
          <div className="upload__content">
            <div className="upload_from_content flex items-center justify-between">
              <div className="uploading__from__heading flex w-10/12">
                <p className="font-bold text-textSecondary-900">
                  Albums Uploaded from:{" "}
                </p>
                <span className="ml-2 text-textSecondary-900">
                  <strong className="text-sm">
                    Lahore <span className="text-dateColor-900">(24)</span>
                  </strong>
                </span>
              </div>
              <div className="uploaded__from__searchbox w-max">
                <Link href="search">
                  <div className="icon border border-dateColor-900 py-1 px-3 cursor-pointer">
                    <FaMagnifyingGlass className="w-5 h-5 text-textPrimary-900" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Upload from Image */}
            <div>
              <UploadFromImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSample;
