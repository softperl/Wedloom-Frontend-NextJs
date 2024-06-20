"use client";
import { data } from "@/app/(main)/wedding-invitations/page";
import Path from "@/components/routesPath/path";
import { cn, removeHyphen } from "@/lib/utils";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";

export const StickyPages = () => {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeIndex, setActiveIndex] = useState(1);
  const cardData = data;

  useEffect(() => {
    const pageNumberString = searchParams.get("pageNumber");
    const pageNumber = pageNumberString ? parseInt(pageNumberString) : 1;
    setActiveIndex(pageNumber);
  }, [router, pathname, searchParams]);

  const pages = [
    {
      id: 1,
      name: "Page",
      link: "/",
    },
    {
      id: 2,
      name: "Page",
      link: "/",
    },
    {
      id: 3,
      name: "Page",
      link: "/",
    },
    {
      id: 4,
      name: "Page",
      link: "/",
    },
  ];

  return (
    <div className="flex flex-col gap-5 py-5">
      <div className="">
        <Path
          first="Home"
          second="Invitation Cards"
          third="Wedding Cards"
          fourth={
            <span className="capitalize">{removeHyphen(params.cards[0])}</span>
          }
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-bold text-center capitalize">
          {removeHyphen(params.cards[0])}
        </h1>
        <div className="flex gap-5">
          {pages?.map((item, i) => {
            const number = i + 1;

            return (
              <button
                key={i}
                onClick={() => {
                  router.push(`?pageNumber=${number}`);
                }}
                className={cn(
                  "relative border border-transparent py-2 px-4 rounded-full text-xs shadow",
                  activeIndex === number &&
                    "border-textPrimary-900 bg-textPrimary-900/20"
                )}>
                {item?.name + " " + number}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
