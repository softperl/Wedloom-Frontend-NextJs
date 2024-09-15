import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaImage } from "react-icons/fa";

const ProjectAlbumView = ({ data }: { data: any }) => {
  return (
    <div className="w-full portfolio__album__view">
      <div className="project__sample_albums grid grid-cols-2 gap-5">
        {data?.map((item: any, i: number) => {
          return (
            <div key={i} className="project__sample_album">
              <div className="image relative">
                <Image
                  width={500}
                  height={500}
                  src={item?.photos[0]!?.photo}
                  alt=""
                  className="w-full h-56 brightness-50"
                />
                <div className="info absolute bottom-1 left-3 text-white">
                  <h5>{item?.name}</h5>
                </div>
                <div className="total absolute right-3 top-2 text-white font-semibold">
                  <FaImage className="w-5 h-5" />{" "}
                  <span className="ml-2">{item?.photos?.length}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectAlbumView;
