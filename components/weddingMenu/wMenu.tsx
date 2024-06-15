"use client";
import React, { useEffect, useRef, useState } from "react";
import WSubmenu from "@/components/weddingMenu/wSubMenu";
import { Fa0 } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { cn } from "@/lib/utils";

const WMenu = () => {
  // All States and References Start
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [makeFixed, setMakeFixed] = useState(false);
  const ref = useRef<any>();
  const ref2 = useRef<any>();
  // All States and References End

  useEffect(() => {
    // Fixed on Top Function
    function setFixed() {
      if (window.scrollY >= 200) {
        setMakeFixed(true);
      } else {
        setMakeFixed(false);
      }
    }
    window.addEventListener("scroll", setFixed);
  }, []);

  // UseEffect Function for Handle Popup Open Close
  useEffect(() => {
    const closePopup = (e: any) => {
      if (!ref.current.contains(e.target) && !ref2.current.contains(e.target)) {
        setShowSubmenu(false);
      }
    };
    window.addEventListener("click", closePopup);
    return () => {
      window.removeEventListener("click", closePopup);
    };
  }, [showSubmenu]);

  // Content Start
  return (
    <div
      className={`hidden xl:block ${
        makeFixed ? "fixed top-0 right-0 w-full z-50" : ""
      }`}>
      <div
        ref={ref}
        className={`p__menu px-12 bg-white py-4 text-textSecondary-900 font-medium flex items-center justify-between shadow-sm border-b`}>
        <div
          className="w-full hover:text-textPrimary-900 duration-200 locality cursor-pointer flex flex-nowrap items-center"
          onClick={() => setShowSubmenu(!showSubmenu)}>
          <span>Sort By</span>
          <FaCaretDown className={cn("ml-2", showSubmenu && "rotate-180")} />
        </div>
        <div
          className="w-full hover:text-textPrimary-900 duration-200 no_of_days cursor-pointer flex flex-nowrap items-center"
          onClick={() => setShowSubmenu(!showSubmenu)}>
          <span>Culture</span>
          <FaCaretDown className={cn("ml-2", showSubmenu && "rotate-180")} />
        </div>
        <div
          className="w-full hover:text-textPrimary-900 duration-200 services cursor-pointer flex flex-nowrap items-center"
          onClick={() => setShowSubmenu(!showSubmenu)}>
          <span>Theme</span>
          <FaCaretDown className={cn("ml-2", showSubmenu && "rotate-180")} />
        </div>
      </div>

      {/* Submenu Items Components */}
      <div ref={ref2}>{showSubmenu && <WSubmenu />}</div>
    </div>
  );
  // Content End
};

export default WMenu;
