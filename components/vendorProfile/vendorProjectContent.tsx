"use client";

import { useState } from "react";
import Albums from "../projectsTabs/albums";
import Projects from "../projectsTabs/projects";
import Videos from "../projectsTabs/videos";

const VendorProjectContent = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      {/* Heading */}
      {/* <div className="bg-sectionBg-900 px-4 py-3">
        <h2 className="text-textSecondary-900 lg:text-lg">Projects</h2>
      </div> */}

      {/* tabs */}
      <div className="flex items-center gap-5 mx-4 my-3 border-b pb-3">
        <button
          className={`${
            activeTab === 1 && "bg-textPrimary-900 text-white"
          } inline-block py-2 px-5 border border-textPrimary-900 rounded-md transition-all hover:bg-textPrimary-900 hover:text-white`}
          onClick={() => setActiveTab(1)}>
          Projects
        </button>
        <button
          className={`${
            activeTab === 2 && "bg-textPrimary-900 text-white"
          } inline-block py-2 px-5 border border-textPrimary-900 rounded-md transition-all hover:bg-textPrimary-900 hover:text-white`}
          onClick={() => setActiveTab(2)}>
          Albums
        </button>
        <button
          className={`${
            activeTab === 3 && "bg-textPrimary-900 text-white"
          } inline-block py-2 px-5 border border-textPrimary-900 rounded-md transition-all hover:bg-textPrimary-900 hover:text-white`}
          onClick={() => setActiveTab(3)}>
          Videos
        </button>
      </div>

      {/* Content */}
      <div className="mt-5 px-4 pb-8">
        {activeTab === 1 && <Projects />}
        {activeTab === 2 && <Albums />}
        {activeTab === 3 && <Videos />}
      </div>
    </div>
  );
};

export default VendorProjectContent;
