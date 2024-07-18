"use client";

import {
  internationaCities,
  othercities,
  popularCities,
  topCities,
} from "@/components/data/cityList";
import useUi from "@/lib/hooks/useUi";
import Link from "next/link";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Popup = () => {
  const { cities } = useUi();
  const [value, setValue] = useState("");
  return (
    <div className="w-full pt-8 pr-16 pl-16 pb-16 rounded-md bg-white shadow-2xl">
      <div className="popup__container">
        <div
          className="searchbox p-1"
          style={{ border: "1px solid #d7d7d7", color: "#d7d7d7" }}>
          <div className="border__div w-full p-2 bg-white">
            <div className="search__icon w-full flex items-center">
              <FaMagnifyingGlass className="w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="Search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full text-textPrimary-900 border-none focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-5 w-full">
          <div className="w-40 flex flex-col">
            <span className="text-textPrimary-900 font-semibold">
              Top Cities
            </span>
            <ul className="mt-1">
              {cities
                ?.filter((item: any) =>
                  item?.name.toLowerCase()?.includes(value)
                )
                ?.map((city: any) => (
                  <li key={city.id} className="text-black">
                    <Link href={`search`}>{city?.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="w-40 flex flex-col">
            <span className="text-textPrimary-900 font-semibold">
              Popular Cities
            </span>
            <ul className="mt-1">
              {cities
                ?.filter((item: any) =>
                  item?.name.toLowerCase()?.includes(value)
                )
                ?.map((city: any) => (
                  <li key={city.id} className="text-black">
                    <Link href={`search`}>{city?.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="w-40 flex flex-col">
            <span className="text-textPrimary-900 font-semibold">
              Other Cities
            </span>
            <ul className="mt-1">
              {cities
                ?.filter((item: any) =>
                  item?.name.toLowerCase()?.includes(value)
                )
                ?.map((city: any) => (
                  <li key={city.id} className="text-black">
                    <Link href={`search`}>{city?.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
          {/* <div className="w-40 flex flex-col">
            <span className="text-textPrimary-900 font-semibold">
              International Cities
            </span>
            <ul className="mt-1">
              {cities
                ?.filter((item: any) =>
                  item?.name.toLowerCase()?.includes(value)
                )
                ?.map((city: any) => (
                  <li key={city.id} className="text-black">
                    <Link href={`search`}>{city?.name}</Link>
                  </li>
                ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Popup;
