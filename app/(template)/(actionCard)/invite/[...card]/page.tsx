"use client";

import { CanvasEditor } from "@/components/editor/canvasEditor";
import { ViewCard } from "@/components/editor/viewCard";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { FaDownload, FaRegCopy, FaWhatsapp } from "react-icons/fa6";

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const [url, setUrl] = useState<null | string>(null);

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
    <>
      {params?.card[0] === "edit-card" && <CanvasEditor />}
      {params?.card[0] === "card-view" && <ViewCard />}
      {params?.card[0] === "share-card" && (
        <>
          <ViewCard />
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
                  <p className="text-sm">Guests RSVP, map location & comment</p>
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
                  <p className="text-sm">Guests RSVP, map location & comment</p>
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
        </>
      )}
    </>
  );
}
