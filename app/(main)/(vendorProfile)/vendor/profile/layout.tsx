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
      <div className="container mx-auto lg:px-20 px-2 lg:py-14 py-4">
        <div className="w-full grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4 xl:col-span-3">
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
          </div>
          <div className="col-span-12 lg:col-span-8 xl:col-span-9">
            <div className="bg-white shadow-sm w-full rounded-sm overflow-hidden h-max">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
