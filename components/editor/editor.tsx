"use client";

import useCardEditor from "@/lib/hooks/useCardEditor";
import { motion } from "framer-motion";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Data } from "./Data";

export const Editor = () => {
  const {
    setEditMode,
    fontSize,
    setInputValue,
    unhideItem,
    hide,
    unHidePage,
    setUnHidePage,
  } = useCardEditor();
  const [mainRef, setMainRef] = useState<any>();
  const editorRef = useRef<HTMLParagraphElement>(null);
  const editorRef1 = useRef<HTMLParagraphElement>(null);
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentBg, setCurrentBg] = useState<string | null>(null);
  const pageNumber = searchParams.get("pageNumber");

  const getRef = (value: React.RefObject<HTMLParagraphElement>) => {
    if (value?.current) {
      setInputValue(value?.current.innerText);
    }
    setMainRef(value);
    setEditMode(true);
  };

  // const handleClickOutside = (event: MouseEvent) => {
  //   if (mainRef?.current && !mainRef?.current.contains(event.target as Node)) {
  //     setEditMode(false);
  //   }
  // };

  useEffect(() => {
    const hasPageNumber = pageNumber ? parseInt(pageNumber) : 1;
    const dataIndex = Data?.find(
      (item: any) => item?.id === hasPageNumber?.toString()
    );
    if (dataIndex) {
      setCurrentBg(dataIndex?.bg);
    }
  }, [params, router, pathname, pageNumber]);

  useEffect(() => {
    hide.includes(Number(pageNumber))
      ? setUnHidePage(Number(pageNumber))
      : setUnHidePage(null);
  }, [pageNumber, hide, router, pathname, searchParams, params]);

  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflow: "hidden",
          height: "659.288px",
          width: "414px",
          margin: "16px auto",
          display: "flex",
          flexDirection: "column",
          flex: "1 1 0%",
        }}>
        {unHidePage === Number(pageNumber) && (
          <div className="absolute top-0 left-0 z-10 text-center h-full w-full flex flex-col items-center justify-center bg-white/85 p-5 gap-5">
            <p className="text-sm">
              This page is now hidden and won’t be visible in your invitation.
            </p>
            <button
              onClick={() => unhideItem(Number(pageNumber))}
              className="p-4 border border-textPrimary-900 inline-flex text-textPrimary-900 rounded-md text-sm font-medium">
              Tap to unhide page
            </button>
          </div>
        )}
        <div
          style={{
            position: "relative",
            backgroundImage: `url(${currentBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            overflow: "hidden",
            height: "659.288px",
            width: "414px",
            border: "1px",
            margin: "0px auto",
            display: "flex",
            flexDirection: "column",
            flex: "1 1 0%",
          }}>
          <motion.p
            ref={editorRef}
            onClick={() => {
              getRef(editorRef);
            }}
            style={{
              fontFamily: "cursive",
              fontWeight: "800",
              fontSize: `${fontSize}px`,
              cursor: "pointer",
              position: "absolute",
              top: "300px",
              left: "50%",
              translateX: "-50%",
              textAlign: "center",
              border: mainRef === editorRef ? "1px solid blue" : "none",
            }}
            drag
            dragConstraints={{ right: 414, bottom: 659 }}
            dragElastic={0.2}>
            This is a sample
          </motion.p>
          ,
          <motion.p
            ref={editorRef1}
            onClick={() => {
              getRef(editorRef1);
            }}
            style={{
              fontSize: `${fontSize}px`,
              cursor: "pointer",
              position: "absolute",
              top: "380px",
              left: "50%",
              translateX: "-50%",
              textAlign: "center",
              border: mainRef === editorRef1 ? "1px solid blue" : "none",
            }}
            drag
            dragConstraints={{ right: 414, bottom: 659 }}
            dragElastic={0.2}>
            This is a sample paragraph text inside.
          </motion.p>
        </div>
      </div>
    </>
  );
};
