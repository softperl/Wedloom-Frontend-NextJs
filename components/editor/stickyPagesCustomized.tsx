"use client";
import Path from "@/components/routesPath/path";
import useCardDetails from "@/lib/hooks/useCardDetails";
import useCardEditor from "@/lib/hooks/useCardEditor";
import { cn } from "@/lib/utils";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { Data } from "./Data";

const data = [
  {
    id: "783",
    name: "lorem 1",
    img: "/poster.webp",
  },
  {
    id: "9340",
    name: "lorem 2",
    img: "/poster2.webp",
  },
  {
    id: "263",
    name: "lorem 3",
    img: "/poster3.webp",
  },
  {
    id: "2443",
    name: "lorem 2",
    img: "/poster2.webp",
  },
  {
    id: "827",
    name: "lorem 1",
    img: "/poster.webp",
  },
  {
    id: "933",
    name: "lorem 2",
    img: "/poster2.webp",
  },
  {
    id: "357",
    name: "lorem 3",
    img: "/poster3.webp",
  },
  {
    id: "123",
    name: "lorem 1",
    img: "/poster.webp",
  },
  {
    id: "432",
    name: "lorem 2",
    img: "/poster2.webp",
  },
  {
    id: "367",
    name: "lorem 3",
    img: "/poster3.webp",
  },
  {
    id: "335",
    name: "lorem 2",
    img: "/poster2.webp",
  },
  {
    id: "889",
    name: "lorem 1",
    img: "/poster.webp",
  },
  {
    id: "0093",
    name: "lorem 2",
    img: "/poster2.webp",
  },
  {
    id: "8646",
    name: "lorem 3",
    img: "/poster3.webp",
  },
];

export const StickyPagesCustomized = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const { customize, hide, handleRemove } = useCardEditor();

  const { cardId, activeIndex, activeCard, cardName } = useCardDetails(
    searchParams,
    params,
    data
  );

  return (
    <div className="flex flex-col gap-5 py-5">
      <div className="">
        <Path
          first="Home"
          second="Invitation Cards"
          third="Wedding Cards"
          fourth={<span className="capitalize">{cardName}</span>}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-bold text-center capitalize">
          {cardName}
        </h1>
        <div className="flex gap-5">
          {Data?.map((item: any, i: number) => {
            const number = i + 1;
            const hideButton = hide.includes(number);

            return (
              <button
                key={i}
                onClick={() => {
                  cardId
                    ? router.push(
                        `${pathname}?cardId=${activeCard}&pageNumber=${number}`
                      )
                    : router.push(`${pathname}?pageNumber=${number}`);
                }}
                className={cn(
                  "relative border border-transparent py-2 px-4 rounded-full text-xs shadow",
                  activeIndex === number &&
                    "border-textPrimary-900 bg-textPrimary-900/20",
                  hideButton && "border-transparent bg-transparent",
                  activeIndex === number && hideButton && "opacity-20"
                )}>
                {hideButton ||
                  (activeIndex === number && hideButton) ||
                  (customize && (
                    <BiX
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent the button click from firing
                        handleRemove(number);
                      }}
                      className={cn(
                        "absolute -top-2 -right-2 p-0.5 w-5 h-5 rounded-full text-white bg-red-500",
                        hideButton && "bg-gray-500"
                      )}
                    />
                  ))}
                {"Page" + " " + number}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
