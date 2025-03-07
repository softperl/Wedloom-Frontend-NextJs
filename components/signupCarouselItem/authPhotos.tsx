import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const AuthPhotos = ({
  image,
  className,
}: {
  image: string;
  className: string;
}) => {
  return (
    <div className="w-full">
      <div className="bg-white w-full">
        <Image
          width={500}
          height={500}
          src={image}
          alt="banner"
          className={cn(className)}
        />
      </div>
    </div>
  );
};

export default AuthPhotos;
