import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioView = ({ data, profileId }: { data: any; profileId?: any }) => {
  return (
    <div className="w-100 portfolioView__card">
      <div className="project__sample_portfolio grid gap-2 lg:grid-cols-4 grid-cols-2">
        {data?.map((item: any, i: number) => {
          return (
            <div key={i} className="project__sample__image">
              <Link href={`/gallery/${profileId}?photos=${item?.id}`}>
                <Image
                  width={500}
                  height={500}
                  src={item?.photo}
                  alt={"img"}
                  className="h-40 rounded-md cursor-pointer"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioView;
