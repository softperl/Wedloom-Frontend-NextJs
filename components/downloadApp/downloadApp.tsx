"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaHeart, FaRegLightbulb } from "react-icons/fa";
import { FaAndroid, FaApple, FaBasketShopping } from "react-icons/fa6";

const DownloadApp = () => {
  const [value, setValue] = useState("+91");

  return (
    <section className="py-16">
      <div className="donwloadApp__container container mx-auto px-4 md:px-20">
        <div className="donwloadApp__content w-full bg-downloadBg-900 py-10 px-4 md:px-28 flex justify-between rounded-md md:flex-nowrap flex-wrap flex-col md:flex-row">
          <div className="download__left w-full md:w-6/12 md:text-start">
            <div className="downlaod__left__content text-center md:text-start">
              <h4 className="text-2xl text-textSecondary-900 font-bold">
                Download The WedMeGood Mobile App Today!
              </h4>
              <div className="download__list w-full flex items-center gap-6 text-textPrimary-900 font-semibold mt-4 mb-8">
                <div className="idea">
                  <FaRegLightbulb className="pr-2" />
                  <span>Save Wedding Ideas</span>
                </div>
                <div className="idea">
                  <FaHeart className="pr-2" />
                  <span>Shortlist Vendors</span>
                </div>
                <div className="idea">
                  <FaBasketShopping className="pr-2" />
                  <span>Get Free Wedding Checklist</span>
                </div>
              </div>
              <div className="download__number">
                <p className="text-textSecondary-900 font-bold">
                  You will receive an SMS with a link to download the App
                </p>
                <div className="donwload__input flex items-center md:justify-start justify-center gap-3 my-8">
                  <div className="flag border-b-2">
                    <Image
                      width={500}
                      height={500}
                      src="./india.png"
                      alt="flag"
                      className="w-6"
                    />
                  </div>
                  <div className="input__fields border-b-2">
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      className="outline-none text-textSecondary-900 bg-transparent "
                    />
                  </div>
                </div>
              </div>
              <div className="download__button">
                <button className="bg-textPrimary-900 font-bold p-3 md:py-4 md:px-12 rounded-full hover:bg-btnHover-900 duration-300">
                  Download The App
                </button>
                <div className="os_icon text-black text-4xl my-4">
                  <FaApple />
                  <FaAndroid className="ml-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="download__right w-full md:w-6/12 flex md:justify-end justify-center">
            <div className="download__right__img">
              <Image
                fill
                src="/download_app.avif"
                alt="download_Image"
                className="w-44"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
