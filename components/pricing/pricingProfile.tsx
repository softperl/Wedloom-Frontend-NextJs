"use client";
import PackageDetails from "@/components/pricing/packageDetails";
import { getPackage } from "@/lib/api";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const PricingProfile = () => {
  const params = useParams();
  const [packages, setPackages] = useState<any>([]);
  const [segment, setSegment] = useState(false);

  const getPackageFn = async () => {
    try {
      const { data } = await getPackage(params?.profileId);
      setPackages(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPackageFn;
  }, []);

  console.log(packages);

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
                return (
                  <>
                    <div
                      key={i}
                      className="photo_package flex items-center justify-between border-b py-3 px-4 cursor-pointer"
                      onClick={() => setSegment(!segment)}>
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
                              segment && "rotate-180"
                            )}
                          />
                        </span>
                      </div>
                    </div>
                    {segment && <PackageDetails />}
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
