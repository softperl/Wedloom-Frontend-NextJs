"use client";
import useAuth from "@/lib/hooks/useAuth";
import useUi from "@/lib/hooks/useUi";
import { slugify } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaQuora,
  FaReddit,
  FaTelegram,
  FaThreads,
  FaTiktok,
  FaTumblr,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const { aboutData, socialLinks, footerMenus } = useUi();
  const { user } = useAuth();

  const filterFooter = footerMenus?.map((item: any) => item.menus).flat();
  console.log("footerMenus", filterFooter);

  return (
    <section className={`lg:py-14 py-6 bg-white`}>
      <div className="popular_venue container mx-auto md:px-20 px-4 text-textSecondary-900">
        <div className="w-full">
          <div className="footer__top w-full flex-wrap md:flex-nowrap">
            <h5 className="text-base font-bold">
              Site Name -{" "}
              {aboutData ? aboutData.name : "Your Personal Wedding Planner"}
            </h5>
            <div>{aboutData?.content}</div>
          </div>

          {/* Footer Contact */}
          <div className="footer__contact w-full flex justify-between my-6 border-t md:my-8 md:flex-nowrap flex-wrap gap-8 pt-6">
            <div className="footger__contact__left w-full lg:w-6/12 justify-center text-center lg:text-start">
              <p className="font-bold">Contact us to get best deals</p>
              <div className="main__number my-4 text-sm">
                <span>{aboutData?.email}</span>
                <p>{aboutData?.phone}</p>
              </div>
              <span className="font-bold">Get Latest Blog Alerts</span>
              <div className="email__section flex w-full my-4 justify-center lg:justify-start">
                <div className=" flex w-10/12 border border-paginationBg-900">
                  <input
                    type="text"
                    placeholder="Email"
                    className="outline-none text-textSecondary-900 p-3 border-none w-full"
                  />
                  <button className="bg-textPrimary-900 p-3 text-white font-semibold">
                    Submit
                  </button>
                </div>
              </div>
              <div className="button__div flex gap-2 justify-center lg:justify-start">
                <button className="p-2 md:p-4 text-textPrimary-900 border border-textPrimary-900 rounded-md hover:bg-textPrimary-900 hover:text-white duration-300 font-semibold">
                  Submit Wedding
                </button>
                {user?.role === "User" && (
                  <button className="p-2 md:p-4 text-textBlue-900 border border-textBlue-900 rounded-md hover:bg-textBlue-900 hover:text-white duration-300 font-semibold">
                    Register a Vendor
                  </button>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="footer__contact__middle w-full lg:w-6/12 font-bold">
              <p className="font-bold text-center">Follow us on:</p>
              <div className="w-full flex flex-wrap items-center justify-center gap-8 mt-4 lg:mt-16">
                {socialLinks?.Facebook && (
                  <a href={socialLinks?.Facebook}>
                    <FaFacebook className="w-8 h-8 text-[#0765FF]" />
                  </a>
                )}
                {socialLinks?.Twitter && (
                  <a href={socialLinks?.Twitter}>
                    <FaTwitter className="w-8 h-8 text-[#2A9EF0]" />
                  </a>
                )}
                {socialLinks?.Pinterest && (
                  <a href={socialLinks?.Pinterest}>
                    <FaPinterest className="w-8 h-8 text-[#DE0318]" />
                  </a>
                )}
                {socialLinks?.Instagram && (
                  <a href="*">
                    <FaInstagram className="w-8 h-8 text-[#C0307C]" />
                  </a>
                )}
                {socialLinks?.Linkedin && (
                  <a href={socialLinks?.Linkedin}>
                    <FaLinkedin className="w-8 h-8 text-[#0162C0]" />
                  </a>
                )}
                {socialLinks?.Facebook && (
                  <a href={socialLinks?.Facebook}>
                    <FaYoutube className="w-8 h-8 text-[#ED1A0E]" />
                  </a>
                )}
                {socialLinks?.Quora && (
                  <a href={socialLinks?.Quora}>
                    <FaQuora className="w-8 h-8 text-[#B32926]" />
                  </a>
                )}
                {socialLinks?.Reddit && (
                  <a href={socialLinks?.Reddit}>
                    <FaReddit className="w-8 h-8 text-[#F74201]" />
                  </a>
                )}
                {socialLinks?.Telegram && (
                  <a href={socialLinks?.Telegram}>
                    <FaTelegram className="w-8 h-8 text-[#32A7D9]" />
                  </a>
                )}
                {socialLinks?.Threads && (
                  <a href={socialLinks?.Threads}>
                    <FaThreads className="w-8 h-8" />
                  </a>
                )}
                {socialLinks?.TikTok && (
                  <a href={socialLinks?.TikTok}>
                    <FaTiktok className="w-8 h-8 text-[#000]" />
                  </a>
                )}
                {socialLinks?.Tumblr && (
                  <a href={socialLinks?.Tumblr}>
                    <FaTumblr className="w-8 h-8 text-[#2F4055]" />
                  </a>
                )}
                {socialLinks?.WhatsApp && (
                  <a href={socialLinks?.WhatsApp}>
                    <FaWhatsapp className="w-8 h-8 text-[#41E35E]" />
                  </a>
                )}
                {socialLinks?.Discord && (
                  <a href={socialLinks?.Discord}>
                    <FaDiscord className="w-8 h-8 text-[#5666E2]" />
                  </a>
                )}
              </div>
            </div>
            <div className="footger__contact__right lg:items-center w-full lg:w-5/12 flex flex-col md:justify-start justify-center items-center">
              <p className="font-bold mb-4">Get The (Site Name) App</p>
              <div className="">
                <Image
                  width={100}
                  height={100}
                  src="/2004164.png"
                  alt=""
                  className="w-44 h-28 cursor-pointer object-contain"
                />
              </div>
            </div>
          </div>

          <hr />

          {/* Footer Bottom */}

          <div className="footer__bottom flex gap-8 md:gap-0 justify-between lg:mt-12 my-4 md:flex-nowrap flex-wrap text-center md:text-start">
            {filterFooter?.map((item: any, i: number) => {
              return (
                <div key={i} className="div1 w-full">
                  <span className="font-semibold text-base mb-8">
                    {item?.name}
                  </span>
                  <ul className="flex flex-col gap-2 lg:mt-6 mt-2 lg:text-base text-sm">
                    {item?.subMenus?.map((sub: any, id: number) => {
                      return (
                        <li key={id}>
                          <Link href={slugify(sub?.categoryName)}>
                            {sub?.categoryName}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            {/* <div className="div2 w-full">
              <span className="font-semibold text-base mb-8">
                Wedding Ideas
              </span>
              <ul className="flex flex-col gap-2 mt-2 lg:text-base text-sm">
                <li>
                  <Link href="/">Birdal Wear</Link>
                </li>
                <li>
                  <Link href="/">Wedding Jewellery</Link>
                </li>
                <li>
                  <Link href="/">Makeup and Hair</Link>
                </li>
                <li>
                  <Link href="/">Wedding Decor</Link>
                </li>
              </ul>
            </div>
            <div className="div3 w-full">
              <span className="font-semibold text-base mb-8">
                Photo Gallery
              </span>
              <ul className="flex flex-col gap-2 mt-2 lg:text-base text-sm">
                <li>
                  <Link href="/">Birdal Wear</Link>
                </li>
                <li>
                  <Link href="/">Wedding Jewellery</Link>
                </li>
                <li>
                  <Link href="/">Makeup and Hair</Link>
                </li>
                <li>
                  <Link href="/">Wedding Decor</Link>
                </li>
                <li>
                  <Link href="/">Search By City</Link>
                </li>
                <li>
                  <Link href="/">Download Our App</Link>
                </li>
                <li>
                  <Link href="/">Top Rated Vendors</Link>
                </li>
                <li>
                  <Link href="/">Destination Wedding</Link>
                </li>
                <li>
                  <Link href="/">Mehndi Design</Link>
                </li>
              </ul>
            </div>
            <div className="div4 w-full">
              <span className="font-semibold text-base mb-8">Home</span>
              <ul className="flex flex-col gap-2 mt-2 lg:text-base text-sm">
                <li>
                  <Link href="/">Birdal Wear</Link>
                </li>
                <li>
                  <Link href="/">Wedding Jewellery</Link>
                </li>
                <li>
                  <Link href="/">Makeup and Hair</Link>
                </li>
                <li>
                  <Link href="/">Wedding Decor</Link>
                </li>
                <li>
                  <Link href="/">Search By City</Link>
                </li>
              </ul>
            </div>
            <div className="div5 w-full">
              <span className="font-semibold text-base mb-8">
                Wedding Invitation Maker
              </span>
              <ul className="flex flex-col gap-2 mt-2 lg:text-base text-sm">
                <li>
                  <Link href="/">Birdal Wear</Link>
                </li>
                <li>
                  <Link href="/">Wedding Jewellery</Link>
                </li>
                <li>
                  <Link href="/">Makeup and Hair</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
