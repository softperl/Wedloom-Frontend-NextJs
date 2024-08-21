"use client";
import useUi from "@/lib/hooks/useUi";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const VendorSearch = () => {
  const vendorRef = useRef<any>();
  const { vendorCategories } = useUi();
  const [openVendor, setOpenVendor] = useState(false);
  const [vendorInput, setVendorInput] = useState("");
  const [vendorInputShow, setVendorInputShow] = useState("");
  const [vendorsValue, setVendorsValue] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const VendorDropdown = () => {
    if (openVendor === true) {
      setVendorInput("");
    }
    const value = vendorInput !== vendorsValue ? vendorsValue : vendorInput;
    setVendorInputShow(value);
  };
  useEffect(() => {
    VendorDropdown();

    const closePopup = (e: any) => {
      if (!vendorRef.current.contains(e.target)) {
        setOpenVendor(false);
      }
    };
    document.addEventListener("click", closePopup);
    return () => {
      document.removeEventListener("click", closePopup);
    };
  }, [openVendor]);

  return (
    // Vendor Search Content Start
    <div className="vendor_search bg-white lg:pt-20 lg:pb-24 hidden lg:block">
      <div className="vendor_search_container container mx-auto lg:px-20 px-4">
        <div className="vendor_search_content border border-textPrimary-900 pt-14">
          {/* Heading */}
          <div className="heading w-full flex justify-center mt-[-70px]">
            <h1
              className="bg-white w-max px-10 text-3xl font-semibold text-textBlack-900"
              style={{ color: "#000" }}>
              Find the best wedding vendors with thousands of trusted reviews
            </h1>
          </div>

          {/* Input Fields */}
          <div className="search_options w-full py-10">
            <div className="dropdown__container flex justify-center my-5 w-full">
              <div className="vendor__container w-full justify-center flex items-center">
                {/* Text */}
                <div className="text w-max mr-5">
                  <span className="text-xl">I&apos;m Looking For</span>
                </div>
                {/* Input Dropdown */}
                <div
                  className="vendor__container__wrapper relative w-3/12 border-b border-textPrimary-900"
                  ref={vendorRef}>
                  <div
                    className="input__container"
                    onClick={() => setOpenVendor(!openVendor)}>
                    <input
                      type="text"
                      placeholder="Select Vendor"
                      value={openVendor ? vendorInput : vendorInputShow}
                      onChange={(e) => setVendorInput(e.target.value)}
                      className="py-3 pr-3 text-xl w-full outline-none border-none text-black cursor-pointer"
                    />
                    <div className="input__arrow__container absolute right-3 bottom-5 text-black">
                      <FaChevronDown
                        className={cn(
                          "cursor-pointer transition-all duration-300",
                          openVendor && "rotate-180"
                        )}
                      />
                    </div>
                  </div>
                  {openVendor && (
                    <div className="dropdown border border-textPrimary-900 box-border absolute w-full">
                      {vendorCategories
                        .filter((item: any) =>
                          item.name.toLocaleLowerCase().includes(vendorInput)
                        )
                        .map((opt: any, i: number) => (
                          <div
                            className="bg-white text-black p-2 flex items-center cursor-pointer hover:bg-gray-300 text-sm"
                            key={i}
                            onClick={() => {
                              setVendorInput(opt?.name);
                              setVendorsValue(opt?.name);
                              setOpenVendor(false);
                            }}>
                            {opt?.name}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Button div */}
          <div className="button_div flex justify-center">
            <div className="button bg-white w-max h-max px-8 mb-[-20px]">
              <Link href="/search">
                <button className="bg-textPrimary-900 text-white px-12 py-3 rounded-full font-medium">
                  Search
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // Vendor Search Content End
  );
};

export default VendorSearch;
