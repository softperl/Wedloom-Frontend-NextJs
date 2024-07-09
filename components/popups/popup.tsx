"use client";

import {
  internationaCities,
  othercities,
  popularCities,
  topCities,
} from "@/components/data/cityList";
import Link from "next/link";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Popup = () => {
  const [value, setValue] = useState("");
  return (
    <div className="popup w-2/4 pt-8 pr-16 pl-16 pb-16 rounded-md bg-white shadow-2xl">
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
        <div className="city__list flex justify-between mt-5">
          <div className="top__cities">
            <span className="top__cities__title text-textPrimary-900 font-semibold">
              Top Cities
            </span>
            <ul className="mt-1">
              {topCities
                .filter((item: any) => item.name.toLowerCase().includes(value))
                .map((city: any) => (
                  <li key={city.id}>
                    <Link href={`search/${city.path}`}>{city.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="popular__cities">
            <span className="popular__cities__title text-textPrimary-900 font-semibold">
              Popular Cities
            </span>
            <ul className="mt-1">
              {popularCities
                .filter((item: any) => item.name.toLowerCase().includes(value))
                .map((city: any) => (
                  <li key={city.id}>
                    <Link href={`search/${city.path}`}>{city.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="other__cities">
            <span className="other__cities__title text-textPrimary-900 font-semibold">
              Other Cities
            </span>
            <ul className="mt-1">
              {othercities
                .filter((item: any) => item.name.toLowerCase().includes(value))
                .map((city: any) => (
                  <li key={city.id}>
                    <Link href={`search/${city.path}`}>{city.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="international__cities">
            <span className="international__cities__title text-textPrimary-900 font-semibold">
              International Cities
            </span>
            <ul className="mt-1">
              {internationaCities
                .filter((item: any) => item.name.toLowerCase().includes(value))
                .map((city: any) => (
                  <li key={city.id}>
                    <Link href={`search/${city.path}`}>{city.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
