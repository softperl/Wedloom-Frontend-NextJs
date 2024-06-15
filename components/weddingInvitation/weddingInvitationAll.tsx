"use client";

import InvitesCarousel from "@/components/carousels/invitesCarousel";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const WeddingInvitationAll = ({
  tab = true,
  title,
  items,
  data,
}: {
  tab?: boolean;
  title: string;
  items: number;
  data: any;
}) => {
  const pathname = usePathname();
  return (
    <>
      <div className="">
        {/* Content Header Part */}
        <div className="container mx-auto px-5 sm:px-0">
          <div className="my-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h5 className="text-2xl font-semibold">{title}</h5>
              <h6 className="text-sm text-dateColor-900">{items} Items</h6>
            </div>
          </div>
          {tab && (
            <div className="flex gap-6 items-center text-sm text-dateColor-900 pb-6">
              <Link href={"/wedding-invitations/wedding-card-designs"}>
                <p
                  className={cn(
                    "border-b border-b-2 border-b-transparent cursor-pointer",
                    pathname === "/wedding-invitations/wedding-card-designs" &&
                      "border-b-textPrimary-900 text-textPrimary-900"
                  )}>
                  Wedding Cards
                </p>
              </Link>
              <Link href={"/wedding-invitations/video-templates"}>
                <p
                  className={cn(
                    "border-b border-b-2 border-b-transparent cursor-pointer",
                    pathname === "/wedding-invitations/video-templates" &&
                      "border-b-textPrimary-900 text-textPrimary-900"
                  )}>
                  Video Cards
                </p>
              </Link>
              <Link href={"/wedding-invitations/save-the-date-templates"}>
                <p
                  className={cn(
                    "border-b border-b-2 border-b-transparent cursor-pointer",
                    pathname ===
                      "/wedding-invitations/save-the-date-templates" &&
                      "border-b-textPrimary-900 text-textPrimary-900"
                  )}>
                  Save the date cards
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto text-white">
        <div className="px-0 flex flex-wrap items-center justify-between">
          {/* Carousel Items */}
          <div className="carousel__div w-full flex items-center justify-between">
            <div className="grid grid-cols-none sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
              {data?.map((item: any, i: number) => {
                return (
                  <div key={i} className="w-full">
                    <InvitesCarousel
                      name={item?.name}
                      img={item?.img}
                      id={item?.id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default WeddingInvitationAll;
