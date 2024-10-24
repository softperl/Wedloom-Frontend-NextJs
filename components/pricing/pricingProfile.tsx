"use client";
import PackageDetails from "@/components/pricing/packageDetails";
import { cn, slugify } from "@/lib/utils";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const PricingProfile = ({ packages }: { packages: any }) => {
  const [openSegment, setOpenSegment] = useState<number | null>(null);

  const toggleSegment = (index: number) => {
    setOpenSegment((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="pricingProfile bg-white shadow-md w-full">
        <div className="pricingProfile__content">
          <div className="heading flex justify-between border-b border-paginationBg-900 p-4">
            <div className="title">
              <h2 className="text-textSecondary-900 font-semibold font-base">
                Per Day Price Estimate
              </h2>
            </div>
            <div className="togglePrice text-textPrimary-900">
              <span>Package Info </span>
            </div>
          </div>
          <div className="price_highlighted py-2">
            <div className="price_hightlight">
              {/* Segment 1 */}
              {packages?.map((item: any, i: number) => {
                const isOpen = openSegment === i;
                return (
                  <>
                    <div
                      key={i}
                      className="photo_package flex items-center justify-between border-b py-3 px-4 cursor-pointer"
                      onClick={() => toggleSegment(i)}>
                      {/* Price Highlighted */}
                      <div className="w-5/12">
                        <h3 className="text-base lg:text-xl text-textPrimary-900">
                          Rs. {item?.packagePrice}{" "}
                          <span className="text-sm">per day</span>
                        </h3>
                      </div>

                      {/* Package Name Highlighted */}
                      <div className="w-5/12">
                        <h1 className="text-sm lg:text-base text-textPrimary-900">
                          ( {item?.packageName} )
                        </h1>
                      </div>

                      {/* Dropdown Button */}
                      <div className="w-1/12 text-end">
                        <span className="text-sm text-textSecondary-900">
                          <FaChevronDown
                            className={cn(
                              "text-textPrimary-900",
                              isOpen && "rotate-180"
                            )}
                          />
                        </span>
                      </div>
                    </div>

                    {isOpen && (
                      <PackageDetails
                        services={item?.services}
                        item={item?.packageName}
                        lastElem={item?.services?.length}
                        path={`/checkout/${slugify(item?.packageName)}`}
                      />
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingProfile;
