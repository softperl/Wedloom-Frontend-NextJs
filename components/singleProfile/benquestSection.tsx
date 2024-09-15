import Image from "next/image";
import Link from "next/link";
import React from "react";

const BenquestSection = ({ data }: any) => {
  return (
    <div>
      <div className="pricingProfile bg-white shadow-md w-full">
        <div className="pricingProfile__content">
          <div className="heading flex justify-between border-b border-paginationBg-900 p-4">
            <div className="title">
              <h2 className="text-textSecondary-900 font-semibold font-base text-xl">
                Areas Available ({data?._count?.Banquet})
              </h2>
            </div>
          </div>
          <div className="py-2 grid lg:grid-cols-2">
            {data?.Banquet?.map((item: any, i: number) =>
              item?.href ? (
                <Link key={i} href={item?.href}>
                  <div className="flex flex-nowrap p-4">
                    <div className="w-16">
                      <Image
                        alt="outdor"
                        src={"/outdoor.svg"}
                        className="h-10 w-10 mr-5"
                        width={500}
                        height={500}
                      />
                      <p className="text-xs">{item?.type}</p>
                    </div>
                    <div className="">
                      <h6 className="text-[15px] font-bold">
                        {`${item?.fixedCapacity} seating | 
                  ${item?.floatCapacity} floating`}
                      </h6>
                      <p>{item?.title}</p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div key={i} className="flex flex-nowrap p-4">
                  <div className="w-16">
                    <Image
                      alt="outdorimage"
                      src={"/outdoor.svg"}
                      className="h-10 w-10 mr-5"
                      width={500}
                      height={500}
                    />
                    <p className="text-xs">{item?.type}</p>
                  </div>
                  <div className="">
                    <h6 className="text-[15px] font-bold">
                      {`${item?.fixedCapacity} seating | 
                    ${item?.floatCapacity} floating`}
                    </h6>
                    <p>{item?.title}</p>
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
