import Link from "next/link";
import {
  FaDesktop,
  FaImages,
  FaInfoCircle,
  FaRegChartBar,
  FaRegComments,
  FaVenus,
} from "react-icons/fa";
import { FaRegFileZipper, FaRegMessage } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdCall } from "react-icons/md";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const vendorMenu = [
    {
      label: "Profile Informations",
      link: "/vendor/profile",
      icon: FaInfoCircle,
    },
    {
      label: "Projects",
      link: "/vendor/profile/projects",
      icon: FaImages,
    },
    {
      label: "Membership Plans",
      link: "/vendor/profile/membership",
      icon: FaDesktop,
    },
    {
      label: "Reviews",
      link: "/vendor/profile/reviews",
      icon: FaRegComments,
    },
    {
      label: "Banquets",
      link: "/vendor/profile/banquets",
      icon: FaVenus,
    },
    {
      label: "Menu",
      link: "/vendor/profile/menu",
      icon: FaRegFileZipper,
    },
    {
      label: "Analytics",
      link: "/vendor/profile/analytics",
      icon: FaRegChartBar,
    },
    {
      label: "Settings",
      link: "/vendor/profile/settings",
      icon: IoMdSettings,
    },
    {
      label: "Messages",
      link: "/vendor/profile/inbox",
      icon: FaRegMessage,
    },
  ];
  return (
    <div className="bg-[#efefef]">
      {/* Content Container Start */}
      <div className="container mx-auto lg:px-20 px-2 lg:py-14 py-4">
        <div className="w-full h-full flex justify-between flex-col lg:flex-row">
          {/* Left Side */}
          <div className="w-full lg:w-[15%]">
            {/* Toggle Card */}
            <div className="px-5 lg:py-6 py-4 flex flex-col gap-6 bg-white shadow-sm w-full rounded-sm">
              {vendorMenu?.map((item: any, i: number) => {
                return (
                  <Link key={i} href={item?.link}>
                    <div
                      className={`flex items-center gap-5 cursor-pointer text-[#4a4a4a] hover:text-[#00aef7] duration-100`}>
                      <item.icon className="w-5 h-5" />
                      <span className="text-xs lg:text-sm font-medium">
                        {item?.label}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Weddloom Contact */}
            <div className="bg-white shadow-sm w-full rounded-sm mt-4 px-5 py-3 flex justify-center flex-col items-center gap-1 border-b border-b-paginationBg-900 lg:border-none mb-4 lg:mb-0">
              <h1 className="text-textPrimary-900 font-semibold">
                WeddLoom Support
              </h1>

              <div className="flex items-center gap-2 text-textSecondary-900 cursor-pointer hover:text-[#00aef7] duration-100">
                <MdCall className="w-5 h-5" />
                <span className="text-sm lg:text-base font-semibold">
                  0129874-564
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white shadow-sm w-full lg:w-[80%] rounded-sm overflow-hidden h-max">
            {children}
          </div>
        </div>
      </div>
      {/* Content Container End */}
    </div>
  );
}
