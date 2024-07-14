import Image from "next/image";
import React from "react";

const PsearchCarousel = ({ img, text }: { img: string; text: string }) => {
  return (
    <div className="w-full">
      <div className="psearchCarousel__content w-full d-flex justify-between items-center">
        <div className="pSearch__img overflow-hidden">
          <Image
            width={500}
            height={500}
            src={img}
            alt=""
            className="lg:w-full hover:scale-125 duration-200 rounded-lg"
          />
        </div>
        <div className="psearch__content mt-3 lg:text-start text-center">
          <a
            href="*"
            className="lg:text-base text-sm text-textSecondary-900 font-bold hover:text-textPrimary-900 cursor-pointer duration-200">
            {text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PsearchCarousel;
