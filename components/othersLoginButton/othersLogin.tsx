import Image from "next/image";
import Link from "next/link";
import React from "react";

const OthersLogin = () => {
  return (
    <div className="socialIcon flex items-center lg:justify-between lg:gap-8 gap-4 md:flex-nowrap flex-wrap">
      {/* Google Button */}
      <Link href="/" className="w-full">
        <div className="google border w-full py-3 gap-2 flex justify-center items-center cursor-pointer">
          <Image
            width={500}
            height={500}
            src="/google.webp"
            alt="google_icon"
            className="w-6"
          />
          <span className="text-textSecondary-900 font-medium text-lg">
            Google
          </span>
        </div>
      </Link>
      {/* Facebook Button */}
      <Link href="/" className="w-full">
        <div className="facebook border w-full py-3 gap-2 flex justify-center items-center cursor-pointer">
          <Image
            width={500}
            height={500}
            src="/facebook.webp"
            alt="google_icon"
            className="w-8"
          />
          <span className="text-textSecondary-900 font-medium text-lg">
            Facebook
          </span>
        </div>
      </Link>
    </div>
  );
};

export default OthersLogin;
