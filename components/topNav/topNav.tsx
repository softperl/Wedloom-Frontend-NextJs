"use client";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Popup from "@/components/popups/popup";
import { BiClipboard } from "react-icons/bi";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";

const TopNav = () => {
  const [popup, setPopup] = useState(false);
  const ref = useRef<any>();
  const ref2 = useRef<any>();

  useEffect(() => {
    const closePopup = (e: any) => {
      if (!ref.current.contains(e.target) && !ref2.current.contains(e.target)) {
        setPopup(false);
      }
    };
    document.addEventListener("click", closePopup);
    return () => {
      document.removeEventListener("click", closePopup);
    };
  }, [popup]);

  return (
    <div className="hidden lg:block topNav bg-headerBG-900 px-12 py-2 text-white">
      {/* Content Start Here */}
      <div className="topNav__content flex items-center justify-between">
        <div className="topNav__left flex items-center gap-5">
          <div className="topNav__p text-sm font-normal">
            <p>Pakistans&apos;s Favourite Wedding Planning Platform</p>
          </div>
          <div
            ref={ref}
            className="topNav__city flex items-center justify-between px-3 bg-white text-black w-48 h-8 cursor-pointer rounded-sm"
            onClick={() => setPopup(!popup)}>
            <div className="topNav__city__cityName flex">
              <span className="text-sm">All Cities</span>
            </div>
            <div className="topNav__city__icon flex">
              <FaCaretDown className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="topNav__right flex gap-5 items-center justify-between">
          <div className="topNav__review flex items-center">
            <FaRegClipboard className="mr-1" />
            <span className="text-sm">Write a Review</span>
          </div>
          <div className="topNav__download flex items-center">
            <MdOutlineSmartphone className="mr-1" />
            <span className="text-sm">Download App</span>
          </div>
        </div>
      </div>

      <div ref={ref2} className="absolute z-10">
        {popup && <Popup />}
      </div>
    </div>
  );
};

export default TopNav;
