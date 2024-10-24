import Image from "next/image";
import Link from "next/link";
import React from "react";

const UploadFromImage = () => {
  return (
    <div className="images flex gap-6 mt-4 ">
      <div className="singleImage flex items-center flex-col">
        <Link href="/uploadView">
          <Image
            fill
            src="/pexels-photo-1484990.jpeg"
            alt=""
            className="h-24 w-24 cursor-pointer"
          />
        </Link>
        <div className="author__name mt-3 text-sm font-normal">
          <span>Ravi & Vidishha</span>
        </div>
      </div>
      <div className="singleImage flex items-center flex-col">
        <Link href="/uploadView">
          <Image
            fill
            src="/pexels-photo-1484990.jpeg"
            alt=""
            className="h-24 w-24 cursor-pointer"
          />
        </Link>
        <div className="author__name mt-3 text-sm font-normal">
          <span>Ravi & Vidishha</span>
        </div>
      </div>
      <div className="singleImage flex items-center flex-col">
        <Link href="/uploadView">
          <Image
            fill
            src="/pexels-photo-1484990.jpeg"
            alt=""
            className="h-24 w-24 cursor-pointer"
          />
        </Link>
        <div className="author__name mt-3 text-sm font-normal">
          <span>Ravi & Vidishha</span>
        </div>
      </div>
      <div className="singleImage flex items-center flex-col">
        <Link href="/uploadView">
          <Image
            fill
            src="/pexels-photo-11279839.jpeg"
            alt=""
            className="h-24 w-24 cursor-pointer"
          />
        </Link>
        <div className="author__name mt-3 text-sm font-normal">
          <span>Ravi & Vidishha</span>
        </div>
      </div>
      <div className="singleImage flex items-center flex-col">
        <Link href="/uploadView">
          <Image
            fill
            src="/pexels-photo-5747219.jpeg"
            alt=""
            className="h-24 w-24 cursor-pointer"
          />
        </Link>
        <div className="author__name mt-3 text-sm font-normal">
          <span>Ravi & Vidishha</span>
        </div>
      </div>
    </div>
  );
};

export default UploadFromImage;
