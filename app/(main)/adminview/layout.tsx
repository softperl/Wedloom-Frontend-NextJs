"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

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
    // {
    //   label: "Projects",
    //   link: "/vendor/profile/projects",
    //   icon: FaImages,
    // },
    // {
    //   label: "Packages",
    //   link: "/vendor/profile/packages",
    //   icon: LuPackagePlus,
    // },
    // {
    //   label: "Faq",
    //   link: "/vendor/profile/faq",
    //   icon: FaQuestion,
    // },
    // {
    //   label: "Membership Plans",
    //   link: "/vendor/profile/membership",
    //   icon: FaDesktop,
    // },

    // {
    //   label: "Reviews",
    //   link: "/vendor/profile/reviews",
    //   icon: FaRegComments,
    // },
    // {
    //   label: "Banquets",
    //   link: "/vendor/profile/banquets",
    //   icon: FaVenus,
    // },
    // {
    //   label: "Menu",
    //   link: "/vendor/profile/menu",
    //   icon: FaRegFileZipper,
    // },
    // {
    //   label: "Analytics",
    //   link: "/vendor/profile/analytics",
    //   icon: FaRegChartBar,
    // },
    // {
    //   label: "Settings",
    //   link: "/vendor/profile/settings",
    //   icon: IoMdSettings,
    // },
    // {
    //   label: "Messages",
    //   link: "/vendor/profile/inbox",
    //   icon: FaRegMessage,
    //   count: unReadConversation,
    // },
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
