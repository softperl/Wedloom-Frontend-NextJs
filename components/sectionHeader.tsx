"use client";
import React from "react";

const SectionHeader = ({ text }: { text: string }) => {
  return (
    <div className="text-textSecondary-900 font-semibold text-2xl">
      <h2>{text}</h2>
    </div>
  );
};

export default SectionHeader;
