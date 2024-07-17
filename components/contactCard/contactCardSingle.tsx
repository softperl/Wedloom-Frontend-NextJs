"use client";

import { HiMail } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import useUi from "@/lib/hooks/useUi";

const ContactCardSingle = () => {
  const { contactInfo } = useUi();
  return (
    <div className="how_it_works_card w-full cursor-pointer">
      <div className="single_card_container lg:flex lg:gap-8">
        <div className="card1 group w-full">
          <div className="how_it_works_card_content bg-white group-hover:bg-textPrimary-900 duration-300 shadow-md lg:mt-0 px-4 flex flex-col items-center justify-center py-4 rounded-md">
            <div className="icon text-textPrimary-900 group-hover:text-white lg:text-6xl text-5xl">
              <HiMail className="text-7xl" />
            </div>
            <div className="title my-3">
              <span className="text-lg text-textSecondary-900 group-hover:text-white font-bold lg:text-xl">
                Our Email
              </span>
            </div>
            <div className="step_details text-center">
              <p className="lg:text-lg text-base text-textSecondary-900 font-medium group-hover:text-white">
                {contactInfo?.email}
              </p>
            </div>
          </div>
        </div>
        <div className="card1 group w-full">
          <div className="how_it_works_card_content bg-white group-hover:bg-textPrimary-900 duration-300 shadow-md mt-6 lg:mt-0 px-4 flex flex-col items-center justify-center py-4 rounded-md">
            <div className="icon text-textPrimary-900 group-hover:text-white lg:text-6xl text-5xl">
              <IoLocationSharp className="text-7xl" />
            </div>
            <div className="title my-3">
              <span className="text-lg text-textSecondary-900 group-hover:text-white font-bold lg:text-xl">
                Our Location
              </span>
            </div>
            <div className="step_details text-center">
              <p className="lg:text-lg text-base text-textSecondary-900 font-medium group-hover:text-white">
                {contactInfo?.location}
              </p>
            </div>
          </div>
        </div>
        <div className="card1 group w-full">
          <div className="how_it_works_card_content bg-white group-hover:bg-textPrimary-900 duration-300 shadow-md mt-6 lg:mt-0 px-4 flex flex-col items-center justify-center py-4 rounded-md">
            <div className="icon text-textPrimary-900 group-hover:text-white lg:text-6xl text-5xl">
              <IoMdCall className="text-7xl" />
            </div>
            <div className="title my-3">
              <span className="text-lg text-textSecondary-900 group-hover:text-white font-bold lg:text-xl">
                Our Phone
              </span>
            </div>
            <div className="step_details text-center">
              <p className="lg:text-lg text-base text-textSecondary-900 font-medium group-hover:text-white">
                {contactInfo?.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCardSingle;
