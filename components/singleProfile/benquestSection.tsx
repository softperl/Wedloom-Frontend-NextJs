import Image from "next/image";
import Link from "next/link";
import React from "react";

const BenquestSection = ({ banquets }: any) => {
  return (
    <div>
      <div className="pricingProfile bg-white shadow-md w-full">
        <div className="pricingProfile__content">
          <div className="heading flex justify-between border-b border-paginationBg-900 p-4">
            <div className="title">
              <h2 className="text-textSecondary-900 font-semibold font-base text-xl">
                Areas Available ({banquets?.length})
              </h2>
            </div>
          </div>
          <div className="py-2 grid lg:grid-cols-2">
            {banquets?.map((banquet: any, i: number) =>
              banquet?.href ? (
                <Link key={i} href={banquet?.href}>
                  <div className="flex flex-nowrap p-4">
                    <div className="w-16">
                      <Image
                        alt="outdorimage"
                        src={banquet?.src}
                        className="h-10 w-10 mr-5"
                        width={500}
                        height={500}
                      />
                      <p className="text-sm">{banquet?.banquet}</p>
                    </div>
                    <div className="">
                      <h6 className="text-[15px] font-bold">
                        {`${banquet?.fixedCapacity} seating | 
                  ${banquet?.floatingCapacity} floating`}
                      </h6>
                      <p>{banquet?.des}</p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div key={i} className="flex flex-nowrap p-4">
                  <div className="w-16">
                    <Image
                      alt="outdorimage"
                      src={banquet?.src}
                      className="h-10 w-10 mr-5"
                      width={500}
                      height={500}
                    />
                    <p className="text-sm">{banquet?.banquet}</p>
                  </div>
                  <div className="">
                    <h6 className="text-[15px] font-bold">
                      {`${banquet?.fixedCapacity} seating | 
                    ${banquet?.floatingCapacity} floating`}
                    </h6>
                    <p>{banquet?.des}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenquestSection;
