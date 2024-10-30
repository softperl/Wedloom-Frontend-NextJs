"use client";
import React, { useState } from "react";
import "./wCategorySingle.css";
import { BiChevronDown } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/utils";

const WcategorySingle = ({
  bgColor,
  title,
  subtitle,
  image,
  cities,
}: {
  bgColor: any;
  title: any;
  subtitle?: any;
  image: any;
  cities: any;
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="h-full w-full">
      <div
        style={{ backgroundColor: `${bgColor}` }}
        className="wCategory__single__content ">
        <div className="flex items-center">
          <div className="content__left w-full pl-5 text-textSecondary-900">
            <div
              className="category__Heading flex items-center gap-5 lg:text-xl text-base font-semibold cursor-pointer capitalize"
              onClick={() => setToggle(!toggle)}>
              <h5>{title}</h5>
              <BiChevronDown className="cursor-pointer" />
            </div>
            {/* <span className="text-sm">{subtitle}</span> */}
          </div>
          <div className="content__right w-full">
            <Image
              width={500}
              height={500}
              src={image || ""}
              alt={title}
              className="w-full h-32"
            />
          </div>
        </div>
        {toggle && (
          <div className="w-full pl-5 text-black py-6 bg-white shadow-2xl text-xs lg:text-base">
            <ul className="grid grid-cols-2 gap-2">
              <li className="hover:font-semibold duration-200">
                <Link href={slugify(`/vendors/all/${title}`)}>View All</Link>
              </li>
              <li className="hover:font-semibold duration-200 invisible"></li>

              {cities?.slice(0, 6)?.map((item: any, i: number) => {
                return (
                  <li key={i} className="hover:font-semibold duration-200">
                    <Link
                      href={slugify(
                        `/vendors/${item?.name.toLowerCase()}/${title}`
                      )}>
                      {item?.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WcategorySingle;
