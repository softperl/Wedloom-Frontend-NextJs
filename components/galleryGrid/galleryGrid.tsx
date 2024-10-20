"use client";
import React from "react";
// Paginatio Components Import
import Pagination from "@/components/pagination/pagination";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const GalleryGrid = ({ data }: { data: any }) => {
  const params = useParams();
  return (
    <div className="gridItem py-8 lg:px-12 px-2">
      {/* Heading */}
      <div className="heading flex justify-center">
        <span className="text-xl text-textPrimary-900 font-bold">
          Browse Photos by This Vendor
        </span>
      </div>

      {/* Grid Gallery Start */}
      <div className="gridItems_images grid grid-cols-2 lg:grid-cols-4 gap-x-2 lg:gap-x-6 lg:gap-y-8 gap-y-4 mt-8">
        {data?.map((image: any, i: number) => (
          <Link
            key={i}
            href={`/gallery/${params?.profileId}?photos=${image?.id}`}>
            <div className="image lg:h-60 h-48">
              <Image
                width={500}
                height={500}
                src={image.photo}
                alt="galleryItemImage"
                className="w-full h-full rounded-md"
              />
            </div>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      {/* <Pagination /> */}
    </div>
  );
};

export default GalleryGrid;
