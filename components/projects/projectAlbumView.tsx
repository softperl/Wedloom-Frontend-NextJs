import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaImage } from "react-icons/fa";

const ProjectAlbumView = () => {
  return (
    <div className="w-full portfolio__album__view">
      <div className="project__sample_albums grid grid-cols-2 gap-5">
        <div className="project__sample_album">
          <div className="image relative">
            <Image
              fill
              src="https://images.pexels.com/photos/2102765/pexels-photo-2102765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-56 brightness-50"
            />
            <div className="info absolute bottom-1 left-3 text-white">
              <h5>Joshua & Tarini</h5>
              <p>Mumbai</p>
              <p>Hindu Wedding</p>
            </div>
            <div className="total absolute right-3 top-2 text-white font-semibold">
              <FaImage className="w-5 h-5" /> <span className="ml-2">30</span>
            </div>
          </div>
        </div>
        <div className="project__sample_album">
          <Link href="albumview">
            <div className="image relative">
              <Image
                fill
                src="https://images.pexels.com/photos/2377658/pexels-photo-2377658.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-full h-56 brightness-50"
              />
              <div className="info absolute bottom-1 left-3 text-white">
                <h5>Joshua & Tarini</h5>
                <p>Mumbai</p>
                <p>Hindu Wedding</p>
              </div>
              <div className="total absolute right-3 top-2 text-white font-semibold">
                <FaImage className="w-5 h-5" /> <span className="ml-2">30</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="project__sample_album">
          <Link href="albumview">
            <div className="image relative">
              <Image
                fill
                src="https://images.pexels.com/photos/2421190/pexels-photo-2421190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full h-56 brightness-50"
              />
              <div className="info absolute bottom-1 left-3 text-white">
                <h5>Joshua & Tarini</h5>
                <p>Mumbai</p>
                <p>Hindu Wedding</p>
              </div>
              <div className="total absolute right-3 top-2 text-white font-semibold">
                <FaImage className="w-5 h-5 " />{" "}
                <span className="ml-2">30</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="project__sample_album">
          <Link href="albumview">
            <div className="image relative">
              <Image
                fill
                src="https://images.pexels.com/photos/2124728/pexels-photo-2124728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full h-56 brightness-50"
              />
              <div className="info absolute bottom-1 left-3 text-white">
                <h5>Joshua & Tarini</h5>
                <p>Mumbai</p>
                <p>Hindu Wedding</p>
              </div>
              <div className="total absolute right-3 top-2 text-white font-semibold">
                <FaImage className="w-5 h-5" /> <span className="ml-2">30</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectAlbumView;
