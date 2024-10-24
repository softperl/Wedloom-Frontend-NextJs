"use client";

import useChats from "@/lib/hooks/useChats";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FaDesktop,
  FaImages,
  FaInfoCircle,
  FaRegChartBar,
  FaRegComments,
  FaVenus,
} from "react-icons/fa";
import { FaQuestion, FaRegFileZipper, FaRegMessage } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { LuPackagePlus } from "react-icons/lu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { unReadConversation } = useChats();
  const pathname = usePathname();
  const vendorId = pathname?.split("/")[2]!;

  const vendorMenu = [
    {
      label: "Profile Informations",
      link: `/admin-view/${vendorId}/profile`,
      icon: FaInfoCircle,
    },
    {
      label: "Projects",
      link: `/admin-view/${vendorId}/projects`,
      icon: FaImages,
    },
    {
      label: "Packages",
      link: `/admin-view/${vendorId}/packages`,
      icon: LuPackagePlus,
    },
    {
      label: "Faq",
      link: `/admin-view/${vendorId}/faq`,
      icon: FaQuestion,
    },
    {
      label: "Membership Plans",
      link: `/admin-view/${vendorId}/membership`,
      icon: FaDesktop,
    },

    {
      label: "Reviews",
      link: `/admin-view/${vendorId}/reviews`,
      icon: FaRegComments,
    },
    {
      label: "Banquets",
      link: `/admin-view/${vendorId}/banquets`,
      icon: FaVenus,
    },
    {
      label: "Menu",
      link: `/admin-view/${vendorId}/menu`,
      icon: FaRegFileZipper,
    },
    {
      label: "Analytics",
      link: `/admin-view/${vendorId}/analytics`,
      icon: FaRegChartBar,
    },
    {
      label: "Settings",
      link: `/admin-view/${vendorId}/settings`,
      icon: IoMdSettings,
    },
    {
      label: "Messages",
      link: `/admin-view/${vendorId}/inbox`,
      icon: FaRegMessage,
      count: unReadConversation,
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
