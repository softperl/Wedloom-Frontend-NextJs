import Link from "next/link";
import React from "react";

const PackageDetails = ({ item, services, lastElem, path }: any) => {
  return (
    <div
      className={`price_segment px-4 pt-6 pb-2 ${
        lastElem === true ? "" : "border-b border-paginationBg-900"
      }`}>
      {/* Package Details Div */}
      <div className="details grid grid-cols-3 grid-rows-3 gap-4 w-full">
        {/* Details One */}
        {services?.map((item: any, id: number) => {
          return (
            <div key={id} className="candid mb-4">
              <h6 className="text-sm text-textSecondary-900 font-semibold">
                Service {id + 1}
              </h6>
              <span className="font-semibold text-sm text-dateColor-900">
                {item}
              </span>
            </div>
          );
        })}
      </div>
      {/* Button Div */}
      <div className="btn w-full">
        <Link href={path}>
          <button className="bg-textPrimary-900 text-white w-full py-4 font-semibold text-base">
            Purchase {item} Package
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PackageDetails;
