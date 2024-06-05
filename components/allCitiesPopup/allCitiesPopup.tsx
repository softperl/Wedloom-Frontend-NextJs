"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  internationaCities,
  othercities,
  popularCities,
  topCities,
} from "@/components/data/cityList";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const AllCitiesPopup = ({ toggle }: any) => {
  const [value, setValue] = useState("");
  return (
    <div className="all_cities_popup h-full overflow-y-scroll w-screen bg-white text-textSecondary-900 z-50 fixed top-0 right-0">
      <div className="all_cities_content">
        {/* Heading Part */}
        <div className="heading bg-textPrimary-900 px-4 pb-5 pt-3">
          <div className="cities flex items-center text-white mb-4 ml-2">
            <i
              className="fa-solid fa-xmark text-3xl cursor-pointer"
              onClick={toggle}></i>
            <h1 className="ml-4 text-lg font-bold">Cities</h1>
          </div>
          <div className="searchBox flex items-center bg-white pl-6 p-2 rounded-full">
            <FaMagnifyingGlass className="mr-4" />
            <input
              type="text"
              placeholder="Search City"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full bg-transparent outline-none text-textPrimary-900
            "
            />
          </div>
        </div>

        {/* Top Cities */}
        <div className="top_cities px-4 py-6 border-b border-paginationBg-900">
          <div className="heading">
            <span className="text-textPrimary-900 font-semibold text-base">
              Top Cities
            </span>
          </div>
          {/* Top City List*/}
          <div className="top_city_content mt-4 flex">
            <div className="left list-none w-full text-sm font-medium">
              <ul>
                {topCities
                  .filter((item) => item.name.toLowerCase().includes(value))
                  .slice(0, 5)
                  .map((city) => (
                    <li key={city.id} className="mb-4">
                      <Link href={city.path}>{city.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="right list-none w-full text-sm font-medium">
              <ul>
                {topCities
                  .filter((item) => item.name.toLowerCase().includes(value))
                  .slice(5, 10)
                  .map((city) => (
                    <li key={city.id} className="mb-4">
                      <Link href={city.path}>{city.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Popular Cities */}
        <div className="popular_cities px-4 py-6 border-b border-paginationBg-900">
          <div className="heading">
            <span className="text-textPrimary-900 font-semibold text-base">
              Popular Cities
            </span>
          </div>

          {/* Popular City List*/}
          <div className="popular_city_content mt-4 flex">
            <div className="left list-none w-full text-sm font-medium">
              <ul>
                {popularCities
                  .filter((item) => item.name.toLowerCase().includes(value))
                  .slice(0, 5)
                  .map((city) => (
                    <li key={city.id} className="mb-4">
                      <Link href={city.path}>{city.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="right list-none w-full text-sm font-medium">
              <ul>
                {popularCities
                  .filter((item) => item.name.toLowerCase().includes(value))
                  .slice(5, 10)
                  .map((city) => (
                    <li key={city.id} className="mb-4">
                      <Link href={city.path}>{city.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Others Citiess */}
        <div className="others_cities px-4 py-6 border-b border-paginationBg-900">
          <div className="heading">
            <span className="text-textPrimary-900 font-semibold text-base">
              Others Cities
            </span>
          </div>
          {/* otehrs City List*/}
          <div className="others_city_content mt-4 flex">
            <div className="list-none w-full text-sm font-medium">
              <ul>
                {othercities
                  .filter((item) => item.name.toLowerCase().includes(value))
                  .slice(0, 5)
                  .map((city) => (
                    <li key={city.id} className="mb-4">
                      <Link href={city.path}>{city.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="list-none w-full text-sm font-medium">
              <ul>
                {othercities
                  .filter((item) => item.name.toLowerCase().includes(value))
                  .slice(5, 10)
                  .map((city) => (
                    <li key={city.id} className="mb-4">
                      <Link href={city.path}>{city.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {/* International Cities */}
        <div className="international_cities px-4 py-6 border-b border-paginationBg-900">
          <div className="heading">
            <span className="text-textPrimary-900 font-semibold text-base">
              International Cities
            </span>
          </div>
          {/* international City List*/}
          <div className="international_city_content mt-4 flex">
            <div className="list-none w-full text-sm font-medium">
              <ul>
                {internationaCities
                  .filter((item) => item.name.toLowerCase().includes(value))
                  .slice(0, 5)
                  .map((city) => (
                    <li key={city.id} className="mb-4">
                      <Link href={city.path}>{city.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="list-none w-full text-sm font-medium">
              <ul>
                {internationaCities
                  .filter((item) => item.name.toLowerCase().includes(value))
                  .slice(5, 10)
                  .map((city) => (
                    <li key={city.id} className="mb-4">
                      <Link href={city.path}>{city.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
