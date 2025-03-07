"use client";

import UserRightCard from "@/components/userProfile/userRightCard";
import { getAllEventsByUserId } from "@/lib/api";
import useChats from "@/lib/hooks/useChats";
import useUi from "@/lib/hooks/useUi";
import { calculateTimeRemaining, cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { vendorCategories, setRefresh, refresh } = useUi();
  const { unReadConversation } = useChats();
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [q, setQ] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await getAllEventsByUserId({
        q,
        page: currentPage,
        perPage: 10,
        sortOrder: "desc",
      });
      setEvents(data.events);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, q]);

  const userMenu = [
    {
      label: "Setup Your Wedding",
      link: "/setup-wedding",
    },
    {
      label: "Messages",
      link: "/user/inbox",
      count: unReadConversation,
    },
    {
      label: "Loves",
      link: "/user/profile",
    },
    {
      label: "Checklists",
      link: "/user/profile/checklists",
    },
    {
      label: "Shortlists",
      link: "/user/profile/shortlists",
    },
    {
      label: "Finalize Vendors",
      link: "/user/profile/finalize-vendor",
    },
    {
      label: "Settings",
      link: "/user/profile/settings",
    },
  ];

  return (
    <>
      {events?.length > 0 && (
        <div className="w-full h-[30vh] md:h-[50vh] bg-no-repeat bg-cover bg-top relative">
          <div className="relative w-full h-full">
            <Image
              fill
              src="/Alfisha-Fahad-habib-Day-2-3-One-Horizon-Productions-52.webp"
              alt=""
              className="w-full h-full inset-0 object-top"
            />
            {/* Black Overlay */}
            <div className="relative w-full h-full">
              <Image
                width={800}
                height={400}
                src="/image_gradient.png"
                alt=""
                className="w-full h-full inset-0 filter blur-sm"
              />
              <div className="bg-black/30 absolute top-0 left-0 w-full h-full"></div>
            </div>
          </div>

          {/* Contents */}
          <div className="banner-blur w-full h-full absolute top-0 left-0">
            {events?.length > 0 && (
              <div className="flex items-center justify-center absolute right-10 bottom-6">
                <FaLocationDot className="text-textPrimary-900 w-5 h-5" />
                <p className="ml-1 text-white text-xs lg:text-sm">
                  {events[0]?.location}
                </p>
              </div>
            )}
            {/* Name */}
            <div className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-screen-sm lg:max-w-screen-lg">
              <h1 className="text-white text-2xl lg:text-4xl font-medium mx-auto text-center -translate-y-10">
                {!loading && events[0]?.title}
              </h1>
              <div className="w-full mx-auto flex justify-center gap-20 relative border-b-2 border-white rounded-l-[50%] rounded-r-[50%] -top-14 lg:-top-20">
                <div className="bg-white lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] p-2 text-center rotate-6 lg:rotate-3 mt-[-12px] lg:mt-[-10px] flex flex-col justify-between items-center font-semibold text-textPrimary-900 translate-y-14 lg:translate-y-24">
                  <h1 className="lg:text-5xl text-xl">
                    {events?.length > 0 &&
                      calculateTimeRemaining(events[0]?.date).months}
                  </h1>
                  <p className="text-[13px] md:text-base">MONTH</p>
                </div>

                <div className="bg-white lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] p-2 text-center -rotate-6 lg:-rotate-3 mt-[-12px] lg:mt-[-10px] flex flex-col justify-between items-center font-semibold text-textPrimary-900 translate-y-14 lg:translate-y-24">
                  <h1 className="lg:text-5xl text-xl">
                    {events?.length > 0 &&
                      calculateTimeRemaining(events[0]?.date).days}
                  </h1>
                  <p className="text-[13px] md:text-base">DAY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#efefef]">
        {/* Content Container Start */}
        <div className="blogList_container_content container mx-auto lg:px-20 px-2 lg:py-14 py-4">
          <div className="w-full h-full flex justify-between flex-col lg:flex-row">
            <div className=""></div>
            {/* Left Side */}
            <div className="w-full lg:w-[18%] flex lg:flex-col flex-col-reverse">
              {/* Toggle Card */}
              <div className="px-5 lg:py-6 py-4 flex flex-col gap-5 bg-white shadow-sm w-full rounded-sm mb-4 lg:mb-0">
                {userMenu?.map((item: any, i: number) => {
                  return (
                    <Link key={i} href={item?.link}>
                      <div
                        className={`flex items-center gap-5 cursor-pointer text-[#4a4a4a] hover:text-[#00aef7] duration-100`}>
                        <div className="w-full flex items-center justify-between gap-2">
                          <p className="text-xs lg:text-sm font-medium">
                            {item?.label}
                          </p>

                          {item?.count > 0 && (
                            <div
                              className={cn(
                                "w-6 h-6 rounded-full invisible flex items-center justify-center",
                                item?.count > 0 && "bg-textPrimary-900 visible"
                              )}>
                              {item?.count > 0 && (
                                <p className="p-1 text-xs text-white">
                                  {item?.count}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Weddloom Contact */}
              <div className="bg-white shadow-sm w-full rounded-sm lg:mt-4 px-5 py-3 flex justify-center flex-col items-center gap-1 border-b border-b-paginationBg-900 lg:border-none mb-4 lg:mb-0 ">
                <h1 className="text-textPrimary-900 font-semibold">
                  WeddLoom Support
                </h1>

                <div className="flex items-center gap-2 text-textSecondary-900 cursor-pointer hover:text-[#00aef7] duration-100 mt-2">
                  <MdCall className="w-4 h-4" />
                  <span className="text-sm font-semibold">0129874-564</span>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="bg-white shadow-sm w-full lg:w-[60%] rounded-sm overflow-hidden h-max mb-4 lg:mb-0">
              {children}
            </div>

            {/* Right Side */}
            <div className="bg-white shadow-sm w-full lg:w-[20%] rounded-sm overflow-hidden h-[60vh] overflow-y-scroll">
              {}
              {vendorCategories?.map((item: any, i: number) => {
                return (
                  <UserRightCard
                    key={i}
                    bg="https://cdn0.weddingwire.in/article/9086/3_2/960/jpg/16809-creative-wedding-photography-avinash-dhoundhiyal-photography-lead-image.jpeg"
                    text={item?.name}
                    link={item?.name?.toLowerCase()}
                    margin={vendorCategories?.length - 1 === i ? false : true}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* Content Container End */}
      </div>
    </>
  );
}
