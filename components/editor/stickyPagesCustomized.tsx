"use client";
import { data } from "@/app/(main)/wedding-invitations/page";
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

export const StickyPagesCustomized = ({ pages }: { pages: any }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const { customize } = useCardEditor();
  const [hide, setHide] = useState<number[]>([]);

  const { cardId, activeIndex, activeCard, cardName } = useCardDetails(
    searchParams,
    params,
    data
  );

  const handleRemove = (index: number) => {
    setHide((prevHide) => {
      if (prevHide.includes(index)) {
        return prevHide.filter((i) => i !== index);
      } else {
        return [...prevHide, index];
      }
    });
  };

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
          {pages?.map((item: any, i: number) => {
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
                {item?.name + " " + number}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
