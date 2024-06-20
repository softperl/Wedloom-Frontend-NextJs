"use client";

import { data } from "@/app/(main)/wedding-invitations/page";
import { ActionFooter } from "@/components/editor/actionFooter";
import { StickyPagesCustomized } from "@/components/editor/stickyPagesCustomized";
import { ViewCard } from "@/components/editor/viewCard";
import { Watermark } from "@/components/editor/watermark";
import Navbar from "@/components/navbar/navbar";
import { CardPopup } from "@/components/popups/cardPopup";
import { PublishPopup } from "@/components/popups/publishPopup";
import Path from "@/components/routesPath/path";
import TopNav from "@/components/topNav/topNav";
import useCardEditor from "@/lib/hooks/useCardEditor";
import { cn } from "@/lib/utils";
import Tippy from "@tippyjs/react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { FaExpandAlt, FaUndoAlt } from "react-icons/fa";
import {
  FaChevronLeft,
  FaDownload,
  FaPen,
  FaRegCopy,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";

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
  const params = useParams();
  const searchParams = useSearchParams();
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeCard, setActiveCard] = useState<number | null>();
  const [cardName, setCardName] = useState<string | null>();
  const [afterLastPage, setAfterLastPage] = useState(false);
  const [publishPopUp, setPublishPopUp] = useState(false);
  const [url, setUrl] = useState<null | string>(null);

  useEffect(() => {
    setAfterLastPage(false);
  }, [router, pathname]);

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

  useEffect(() => {
    setPublishPopUp(false);
  }, [router, pathname]);

  useEffect(() => {
    // Check if window is defined (client side)
    if (typeof window !== "undefined") {
      // Create a URL object with the current URL
      const url = new URL(window.location.href);
      setUrl(url?.origin);
    }
  }, []);

  const gvUrl = `${url}/invite/gv/1647813`;
  const whatsAppText = `We look forward to your presence on our special day ! Find our invitation here ${gvUrl}`;

  const copyLink = () => {
    navigator.clipboard.writeText(gvUrl);
    alert("Link Copied");
  };

  return (
    <html lang="en">
      {params?.card[0] === "gv" ? (
        <body>
          <main className="bg-sectionBg-900 overflow-x-hidden h-full">
            <div className="container mx-auto overflow-x-hidden h-full">
              <ViewCard />
              <Watermark />
              <ActionFooter />
            </div>
          </main>
        </body>
      ) : (
        <body className={cn((modal || publishPopUp) && "overflow-hidden")}>
          <main className="bg-sectionBg-900 overflow-x-hidden h-full">
            <TopNav />
            <Navbar />
            <div className="container mx-auto px-5 lg:px-20">
              {params?.card[0] === "share-card" && (
                <>
                  <div className="py-5">
                    <Path
                      first="Home"
                      second="Invitation Cards"
                      third="Wedding Cards"
                      fourth={cardName}
                    />
                  </div>
                  <div className="bg-white p-2 flex justify-between items-center relative mx-auto overflow-hidden w-[414px] h-full shadow">
                    <button
                      onClick={() => router.back()}
                      className="inline-flex items-center text-sm p-3 rounded-md border">
                      <FaChevronLeft className="w-4 h-4 mr-1" />
                      Share Wedding Card
                    </button>
                    <button
                      onClick={() => {
                        router.push(`/invite/all-cards`);
                      }}
                      className="inline-flex items-center text-sm p-3 rounded-md border">
                      <IoMailOpenOutline className="w-4 h-4 mr-1" /> Your Cards
                    </button>
                  </div>
                </>
              )}
              {params?.card[0] === "edit-card" && <StickyPagesCustomized />}
              {params?.card[0] === "card-view" && (
                <>
                  <div className="py-5">
                    <Path
                      first="Home"
                      second="Invitation Cards"
                      third="Wedding Cards"
                      fourth="Preview Card"
                    />
                  </div>
                  <div className="bg-white p-2 flex justify-between items-center relative mx-auto overflow-hidden w-[414px] h-full shadow">
                    <button
                      onClick={() => router.back()}
                      className="inline-flex items-center text-sm p-3 rounded-md border">
                      <FaChevronLeft className="w-4 h-4 mr-1" />
                      Preview Card
                    </button>
                    <button
                      onClick={() => {
                        setPublishPopUp(true);
                      }}
                      className="text-sm bg-textPrimary-900 text-white p-3 rounded-md">
                      Publish
                    </button>
                  </div>
                </>
              )}

              {children}
            </div>
          </main>
          {params?.card[0] === "edit-card" && (
            <div className="sticky bottom-0 bg-sectionBg-900">
              <div className="flex items-center justify-between">
                <div className="bg-white w-[414px] shadow mx-auto p-5 space-y-4">
                  {!afterLastPage ? (
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
                          activeIndex === 4
                            ? setAfterLastPage(true)
                            : router.push(
                                `${pathname}?cardId=${activeCard}&pageNumber=${
                                  activeIndex + 1
                                }`
                              );
                        }}>
                        Next
                      </button>
                    </div>
                  ) : (
                    <div className="flex-1 flex justify-between items-center gap-2">
                      <button
                        onClick={() =>
                          router.push(`/invite/card-view?cardId=${activeCard}`)
                        }
                        className="w-full border p-3 text-sm text-center text-gray-500 rounded-md">
                        Preview
                      </button>
                      <button
                        onClick={() => {
                          setPublishPopUp(true);
                        }}
                        className="w-full border bg-textPrimary-900 p-3 text-center text-white text-sm rounded-md">
                        Publish
                      </button>
                    </div>
                  )}
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
          )}
          {params?.card[0] === "card-view" && (
            <>
              <Watermark />
              <ActionFooter />
            </>
          )}
          {params?.card[0] === "share-card" && (
            <div className="p-4 border bg-white my-2 max-w-[414px] mx-auto flex flex-col gap-5">
              <div className="shadow p-4 flex flex-col gap-5 border">
                <div className="">
                  <div className="space-y-1">
                    <h1 className="text-lg font-medium">
                      Share only
                      <span className="italic text-red-500 text-sm ml-4">
                        Free
                      </span>
                    </h1>
                    <div className="flex w-full">
                      <p className="text-blue-600 text-sm underline line-clamp-1 overflow-hidden">
                        {gvUrl}
                      </p>
                      <FaRegCopy
                        onClick={copyLink}
                        className="w-4 h-4 ml-1 text-gray-400 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <BiCheck className="w-5 h-5 mr-2" />
                    <p className="text-sm">Share link with Guests</p>
                  </div>
                  <div className="flex">
                    <BiCheck className="w-5 h-5 mr-2" />
                    <p className="text-sm">
                      Guests RSVP, map location & comment
                    </p>
                  </div>
                  <div className="flex text-gray-400">
                    <BiX className="w-5 h-5 mr-2" />
                    <p className="text-sm">No Downloadable Digital Invite</p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    router.push(
                      `https://api.whatsapp.com/send?text=${whatsAppText}`
                    )
                  }
                  className="w-full border bg-green-600 p-4 text-center text-white text-sm rounded-md inline-flex items-center justify-center">
                  <FaWhatsapp className="w-4 h-4 mr-1" />
                  Share
                </button>
              </div>
              <div className="shadow p-4 flex flex-col gap-5 border">
                <div className="">
                  <div className="space-y-1">
                    <h1 className="text-lg font-medium">
                      Share + Download
                      <span className="italic text-red-500 text-sm ml-4">
                        ₹199 only
                      </span>
                    </h1>
                    <div className="flex w-full">
                      <p className="text-blue-600 text-sm underline line-clamp-1 overflow-hidden">
                        {gvUrl}
                      </p>
                      <FaRegCopy
                        onClick={copyLink}
                        className="w-4 h-4 ml-1 text-gray-400 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <BiCheck className="w-5 h-5 mr-2" />
                    <p className="text-sm">Share link with Guests</p>
                  </div>
                  <div className="flex">
                    <BiCheck className="w-5 h-5 mr-2" />
                    <p className="text-sm">
                      Guests RSVP, map location & comment
                    </p>
                  </div>
                  <div className="flex">
                    <BiCheck className="w-5 h-5 mr-2" />
                    <p className="text-sm">
                      Downloadable card allowed [Non-Animated PDF]
                    </p>
                  </div>
                </div>
                <button className="w-full border bg-textPrimary-900 p-4 text-center text-white text-sm rounded-md inline-flex items-center justify-center">
                  <FaDownload className="w-4 h-4 mr-1" /> Download
                </button>
              </div>
            </div>
          )}

          {modal && <CardPopup />}
          {publishPopUp && (
            <PublishPopup closeModal={() => setPublishPopUp(false)} />
          )}
        </body>
      )}
    </html>
  );
}
