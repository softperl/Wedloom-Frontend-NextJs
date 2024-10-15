"use client";

import React from "react";

export const ViewCard = () => {
  return (
    <div className="relative mx-auto overflow-hidden grid w-[414px] h-full">
      <div
        className="flex flex-1 border w-[414px] h-[659.288px] mx-auto bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url("/bd7d2302-20b1-4b7a-bd3f-f904b813e8d6-bgImage.avif")`,
        }}>
        <p className="text-yellow-800 cursor-pointer absolute top-28 left-20">
          This is a sample paragraph
        </p>
      </div>
      <div
        className="flex flex-1 border w-[414px] h-[659.288px] mx-auto bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url("/bd7d2302-20b1-4b7a-bd3f-f904b813e8d6-bgImage.avif")`,
        }}>
        <p className="text-yellow-800 cursor-pointer absolute top-28 left-20">
          This is a sample paragraph
        </p>
      </div>
      <div
        className="flex flex-1 border w-[414px] h-[659.288px] mx-auto bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url("/bd7d2302-20b1-4b7a-bd3f-f904b813e8d6-bgImage.avif")`,
        }}>
        <p className="text-yellow-800 cursor-pointer absolute top-28 left-20">
          This is a sample paragraph
        </p>
      </div>
    </div>
  );
};
