import { slugify } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GLookCarousel = ({ img, text }: { img: string; text: string }) => {
  return (
    <Link href={`/photos/${slugify(text)}`} className="w-full">
      <div className="GLookCarousel__content w-full d-flex justify-between items-center bg-white shadow-lg p-2">
        <div className="GLookCarousel__img overflow-hidden">
          <Image
            width={500}
            height={500}
            src={img || ""}
            alt={text}
            className="h-60 hover:scale-125 duration-200 rounded-md"
          />
        </div>
        <div className="psearch__content mt-3 text-center">
          <a
            href={`/photos/${slugify(text)}`}
            className="text-base text-textSecondary-900 font-bold hover:text-textPrimary-900 cursor-pointer duration-200 capitalize">
            {text}
          </a>
        </div>
      </div>
    </Link>
  );
};

export default GLookCarousel;
