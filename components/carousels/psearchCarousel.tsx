import { slugify } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PsearchCarousel = ({ img, text }: { img: string; text: string }) => {
  return (
    <Link href={slugify(`/vendors/all/${text}`)} className="w-full h-full">
      <div className="w-full">
        <div className="psearchCarousel__content w-full d-flex justify-between items-center">
          <div className="pSearch__img overflow-hidden">
            <Image
              width={500}
              height={500}
              src={img || ""}
              alt={text}
              className="lg:w-full hover:scale-125 duration-200 rounded-lg"
            />
          </div>
          <div className="psearch__content mt-3 lg:text-start text-center">
            <a
              href="*"
              className="lg:text-base text-sm text-textSecondary-900 font-bold hover:text-textPrimary-900 cursor-pointer duration-200 capitalize">
              {text}
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PsearchCarousel;
