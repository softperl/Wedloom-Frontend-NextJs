import Image from "next/image";
import Link from "next/link";
import React from "react";

export const data = [
  {
    id: "xncjksdj874bsdhhg",
    src: "https://images.pexels.com/photos/2106460/pexels-photo-2106460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "xncjksdj874bsd4893",
    src: "https://images.pexels.com/photos/2857306/pexels-photo-2857306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "sjlksdj874bsdhhg",
    src: "https://images.pexels.com/photos/1385478/pexels-photo-1385478.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "owiuj874bsdhhg",
    src: "https://images.pexels.com/photos/1102388/pexels-photo-1102388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const PortfolioView = () => {
  return (
    <div className="w-100 portfolioView__card">
      <div className="project__sample_portfolio grid gap-2 lg:grid-cols-4 grid-cols-2">
        {data?.map((item, i) => {
          return (
            <div key={i} className="project__sample__image">
              <Link href={`/gallery/${item?.id}`}>
                <Image
                  width={500}
                  height={500}
                  src={item?.src}
                  alt={item?.id}
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
