"use client";

import useUi from "@/lib/hooks/useUi";
import React from "react";

const GoogleMap = () => {
  const { map } = useUi();

  return (
    <div className="container mx-auto xl:w-3/4 rounded-md mt-8 mb-8 md:mt-16 md:mb-12">
      <div className="google__map md:px-20 px-8">
        <iframe
          src={map?.url}
          height="450"
          style={{ width: "100%", border: "0px" }}
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
