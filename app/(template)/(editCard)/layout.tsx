"use client";

import { data } from "@/app/(main)/wedding-invitations/page";
import { StickyPagesCustomized } from "@/components/editor/stickyPagesCustomized";
import Navbar from "@/components/navbar/navbar";
import { CardPopup } from "@/components/popups/cardPopup";
import TopNav from "@/components/topNav/topNav";
import useCardEditor from "@/lib/hooks/useCardEditor";
import { cn } from "@/lib/utils";
import Tippy from "@tippyjs/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaExpandAlt, FaUndoAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { editMode, modal, setModal } = useCardEditor();
  const [size, setSize] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressIndicatorRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeCard, setActiveCard] = useState<number | null>();
  const [cardName, setCardName] = useState<string | null>();

  useEffect(() => {
    const pageNumberString = searchParams.get("pageNumber");
    const pageNumber = pageNumberString ? parseInt(pageNumberString) : 1;
    setActiveIndex(pageNumber);

    const cardNumberString = searchParams.get("cardId");
    const cardNumber = cardNumberString ? parseInt(cardNumberString) : 1;
    setActiveCard(cardNumber);
    data?.filter((item) => {
      if (item?.id === cardNumber.toString()) {
        setCardName(item?.name);
      }
    });
  }, [router, pathname, searchParams]);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging.current || !progressBarRef.current) return;
    const progressBarRect = progressBarRef.current.getBoundingClientRect();
    const newProgress =
      (Math.min(
        Math.max(event.clientX - progressBarRect.left, 0),
        progressBarRect.width
      ) /
        progressBarRect.width) *
      100;
    setProgress(newProgress);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <html lang="en">
      <body className={cn(modal && "overflow-hidden")}>
        <main className="bg-sectionBg-900 overflow-x-hidden h-full">
          <TopNav />
          <Navbar />
          <div className="container mx-auto px-5 lg:px-20">
            <StickyPagesCustomized />
            {children}
          </div>
        </main>
        <div className="sticky bottom-0 bg-sectionBg-900">
          <div className="flex items-center justify-between">
            <div className="bg-white w-[414px] shadow mx-auto p-5 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1 flex justify-between items-center gap-2">
                  <div
                    className={cn(
                      "space-y-2 text-center mx-auto flex items-center justify-between flex-col w-12 h-10 cursor-pointer",
                      !editMode && "text-gray-500 cursor-default"
                    )}
                    onClick={() => {
                      setModal(true);
                    }}>
                    <FaPen className="w-4 h-4" />
                    <p className="text-xs">Edit</p>
                  </div>
                  <div
                    className={cn(
                      "space-y-2 text-center mx-auto flex items-center flex-col justify-between w-12 h-10 cursor-pointer",
                      !editMode && "text-gray-500 cursor-default",
                      !size && !editMode && "text-gray-500 cursor-default"
                    )}
                    onClick={() => {
                      setSize(!size);
                    }}>
                    <FaExpandAlt className="w-4 h-4" />
                    <p className="text-xs">Size</p>
                  </div>
                  <div
                    className={cn(
                      "space-y-2 text-center mx-auto flex items-center flex-col justify-between w-12 h-10 cursor-pointer",
                      !editMode && "text-gray-500 cursor-default"
                    )}
                    onClick={() => {
                      console.log("undo");
                    }}>
                    <FaUndoAlt className="w-4 h-4" />
                    <p className="text-xs">Undo</p>
                  </div>
                </div>
                <button className="border p-3 text-sm text-center text-gray-500 rounded-md">
                  Save Draft
                </button>
                <button
                  className="border bg-textPrimary-900 p-3 text-center text-white text-sm rounded-md"
                  onClick={() => {
                    router.push(
                      `${pathname}?cardId=${activeCard}&pageNumber=${
                        activeIndex + 1
                      }`
                    );
                  }}>
                  Next
                </button>
              </div>
              {size && (
                <div className="py-2 px-5 w-full">
                  <div
                    ref={progressBarRef}
                    className="relative p-1 rounded-full flex-1 bg-textPrimary-900/10 shadow"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}>
                    <div
                      className="bg-textPrimary-900 absolute top-0 left-0 rounded-l-full h-full"
                      style={{
                        width: Math.round(progress) + "%",
                      }}></div>
                    <Tippy
                      content={
                        <div className="bg-textPrimary-900 w-8 h-8 text-white text-center rounded-full flex items-center justify-center text-sm relative">
                          {Math.round(progress)}
                          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-textPrimary-900 flex w-7 h-5 justify-center [clip-path:polygon(100%_0%,0%_0%,50%_100%)]"></span>
                        </div>
                      }
                      theme="tomato">
                      <div
                        ref={progressIndicatorRef}
                        className="w-6 h-6 absolute group hover:bg-textPrimary-900/20 rounded-full top-1/2 -translate-y-1/2 cursor-pointer flex items-center justify-center"
                        style={{ left: `calc(${progress}% - 8px)` }}>
                        <div className="w-4 h-4 bg-textPrimary-900 rounded-full cursor-pointer" />
                      </div>
                    </Tippy>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {modal && <CardPopup />}
      </body>
    </html>
  );
}
