"use client";

import useCardEditor from "@/lib/hooks/useCardEditor";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

export const CanvasEditor = () => {
  const { setEditMode, fontSize, setInputValue } = useCardEditor();
  const [mainRef, setMainRef] = useState<any>();
  const editorRef = useRef<HTMLParagraphElement>(null);
  const editorRef1 = useRef<HTMLParagraphElement>(null);

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

  console.log("main ref", mainRef);
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url("https://image.wedmegood.com/e-invite-images/bd7d2302-20b1-4b7a-bd3f-f904b813e8d6-bgImage.JPEG")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
        height: "659.288px",
        width: "414px",
        border: "1px",
        margin: "16px auto",
        display: "flex",
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
  );
};
