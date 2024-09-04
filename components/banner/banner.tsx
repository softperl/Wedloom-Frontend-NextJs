"use client";

import MobileVendors from "@/components/mobileVendors";
import useUi from "@/lib/hooks/useUi";
import { cn, slugify } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Banner = () => {
  const { vendorCategories, cities } = useUi();
  const [citiesValue, setCitiesValue] = useState("");
  const [openVendor, setOpenVendor] = useState(false);
  const [vendorInput, setVendorInput] = useState("");
  const [vendorInputShow, setVendorInputShow] = useState("");
  const [vendorsValue, setVendorsValue] = useState("");
  const [openCity, setOpenCity] = useState(false);
  const [citiesInput, setCitiesInput] = useState("");
  const [citiesInputShow, setCitiesInputShow] = useState("");

  const VendorDropdown = () => {
    if (openVendor === true) {
      setVendorInput("");
    }
    const value = vendorInput !== vendorsValue ? vendorsValue : vendorInput;
    setVendorInputShow(value);
  };
  useEffect(() => {
    VendorDropdown();
  }, [openVendor]);

  const CitiesDropdown = () => {
    if (openCity === true) {
      setCitiesInput("");
    }
    const value = citiesInput !== citiesValue ? citiesValue : citiesInput;
    setCitiesInputShow(value);
  };
  useEffect(() => {
    CitiesDropdown();
  }, [openCity]);

  // Close Dropdown When Click
  const vendorRef = useRef<any>();
  const citiesRef = useRef<any>();

  useEffect(() => {
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

  useEffect(() => {
    const closePopup = (e: any) => {
      if (!citiesRef.current.contains(e.target)) {
        setOpenCity(false);
      }
    };
    document.addEventListener("click", closePopup);
    return () => {
      document.removeEventListener("click", closePopup);
    };
  }, [openCity]);

  const search = () => {
    if (vendorsValue && citiesValue) {
      return `/vendors/${slugify(citiesValue)}/${slugify(vendorsValue)}`;
    }
    if (!citiesValue && vendorsValue) {
      return `/vendors/all/${slugify(vendorsValue)}`;
    }
    if (citiesValue && !vendorsValue) {
      return `/vendors/${slugify(citiesValue)}`;
    }
    return "/vendors";
  };

  console.log(vendorsValue, citiesValue);
  return (
    // Banner Start
    <div className="banner text-white">
      {/* Positoning this we can control the mobile menu and also the postion of banner content */}
      <div className="banner__content relative w-full flex-wrap flex items-center justify-center">
        <div className="wrapper absolute bottom-14 lg:bottom-0 flex flex-wrap md:items-center flex-col md:px-0 px-6">
          <h1 className="text-3xl md:text-4xl md:mb-3 mb-2 font-semibold">
            Your Wedding, Your Way
          </h1>
          <h2 className="text-base font-medium md:text-lg">
            Find the best wedding vendors with thousands of trusted reviews
          </h2>

          {/* For Desktop Mode City List */}
          <div className="for_Desktop hidden xl:block">
            <div className="dropdown__container flex my-5 w-full">
              {/* Select Vendor Dropdown */}
              <div className="vendor__container w-5/12" ref={vendorRef}>
                <div className="vendor__container__wrapper relative w-full border-r">
                  <div
                    className="input__container"
                    onClick={() => setOpenVendor(!openVendor)}>
                    <input
                      className="p-3 w-full outline-none border-none text-textSecondary-900 font-medium cursor-pointer"
                      type="text"
                      value={openVendor ? vendorInput : vendorInputShow}
                      onChange={(e) => setVendorInput(e.target.value)}
                      placeholder="Select Vendor"
                      required
                    />
                    <div className="input__arrow__container absolute right-4 bottom-4 text-black">
                      <BiChevronDown
                        className={cn(
                          "cursor-pointer transition-all duration-300",
                          openVendor && "rotate-180"
                        )}
                      />
                    </div>
                  </div>
                  {/* Dropdown Open */}
                  {openVendor && (
                    <div className="dropdown border-t-2 box-border absolute w-full">
                      <div className="max-h-[200px] overflow-scroll border border-t-0">
                        {vendorCategories
                          ?.filter((v: any) =>
                            v?.name?.toLocaleLowerCase()?.includes(vendorInput)
                          )
                          ?.map((opt: any) => (
                            <div
                              className="bg-white text-black p-2 flex items-center cursor-pointer hover:bg-gray-300 text-sm"
                              key={opt?.name}
                              onClick={() => {
                                setVendorInput(opt?.name);
                                setVendorsValue(opt?.name);
                                setOpenVendor(false);
                              }}>
                              {opt?.name}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Select City Container */}
              <div className="city__container w-5/12" ref={citiesRef}>
                <div className="city__container__wrapper relative w-full border-r-2">
                  <div
                    className="input__container"
                    onClick={() => setOpenCity(!openCity)}>
                    <input
                      className="p-3 w-full outline-none border-none text-textSecondary-900 font-medium cursor-pointer"
                      type="text"
                      value={openCity ? citiesInput : citiesInputShow}
                      onChange={(e) => setCitiesInput(e.target.value)}
                      required
                      placeholder="Select City"
                    />
                    <div className="input__arrow__container absolute right-4 bottom-4 text-black">
                      <BiChevronDown
                        className={cn(
                          "cursor-pointer transition-all duration-300",
                          openCity && "rotate-180"
                        )}
                      />
                    </div>
                  </div>
                  {/* Dropdown Open */}
                  {openCity && (
                    <div className="dropdown border-t-2 box-border absolute w-full">
                      <div className="max-h-[200px] overflow-scroll border border-t-0">
                        {cities
                          ?.filter((v: any) =>
                            v?.name?.toLocaleLowerCase()?.includes(citiesInput)
                          )
                          ?.map((opt: any) => (
                            <div
                              className="bg-white text-black p-2 flex items-center cursor-pointer hover:bg-gray-300 text-sm"
                              key={opt?.name}
                              onClick={() => {
                                setCitiesInput(opt?.name);
                                setCitiesValue(opt?.name);
                                setOpenCity(false);
                              }}>
                              {opt?.name}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="submit w-2/12">
                <Link href={search()}>
                  <button className="bg-navbarBGL-900 p-3">Get Started</button>
                </Link>
              </div>
            </div>
            <div className="search__result flex mb-10">
              <div className="heading mr-5">
                <p>Popular Searches: </p>
              </div>
              <div className="content">
                <p>
                  Wedding Photographers in Pakistan | Bridal Makeup in Pakistan
                  | Wedding Cards in Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vendor Show */}
        <div
          className="mobile_vendors block xl:hidden w-full px-6 absolute"
          style={{ bottom: "-23px" }}>
          <MobileVendors />
        </div>
      </div>
    </div>
    // Banner End
  );
};

export default Banner;
