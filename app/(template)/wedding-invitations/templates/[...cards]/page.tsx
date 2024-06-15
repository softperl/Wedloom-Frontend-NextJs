"use client";

import Path from "@/components/routesPath/path";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page({
  params,
}: {
  params: {
    cards: string;
  };
}) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeIndex, setActiveIndex] = useState(1);

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
    <div className="container mx-auto px-5 lg:px-20">
      <div className="flex flex-col gap-5 py-5">
        <div className="">
          <Path
            first="Home"
            second="Invitation Cards"
            third="Wedding Cards"
            fourth={<span className="capitalize">{params.cards[0]}</span>}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-2xl font-bold text-center capitalize">
            {params.cards[0]}
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
      <div className="flex items-center justify-center border w-[414px] h-[658px] my-4 mx-auto">
        hi
      </div>
    </div>
  );
}
