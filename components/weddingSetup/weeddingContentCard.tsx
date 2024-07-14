import Image from "next/image";
import React from "react";

const WeeddingContentCard = ({
  img,
  title,
  text,
}: {
  img: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      {/* Image */}
      <div>
        <Image fill src={img} alt="mail_icon" className="w-12 lg:w-14" />
      </div>
      {/* Title */}
      <div className="my-3">
        <p className="text-textSecondary-900 text-center font-semibold lg:text-base text-sm">
          {title}
        </p>
      </div>

      {/* Texts */}
      <div>
        <span className="text-gray-500 text-xs lg:text-[13px]">{text}</span>
      </div>
    </div>
  );
};

export default WeeddingContentCard;
