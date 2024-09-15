import React from "react";

export default function page() {
  return (
    <div className="h-full w-full">
      <div className="min-h-screen h-full flex flex-col items-center justify-center space-y-2">
        <div className="flex items-center">
          <h1 className="text-8xl font-bold text-textPrimary-900 -rotate-10">
            4
          </h1>
          <h1 className="text-8xl font-bold text-textPrimary-900">0</h1>
          <h1 className="text-8xl font-bold text-textPrimary-900 rotate-10">
            4
          </h1>
        </div>
        <p className="text-xl text-gray-400">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
