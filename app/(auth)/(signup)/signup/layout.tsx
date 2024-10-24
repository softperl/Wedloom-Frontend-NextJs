"use client";
// Import Swiper React components
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
//@ts-ignore
import OthersLogin from "@/components/othersLoginButton/othersLogin";
import AuthPhotos from "@/components/signupCarouselItem/authPhotos";
import MobileSignupLoginBanner from "@/components/signuploginBanner/mobileSignupLoginBanner";
import Link from "next/link";
//@ts-ignore
import { Autoplay, Pagination } from "swiper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="contact_form">
      {/* Mobile Banner */}
      <div className="block lg:hidden">
        <MobileSignupLoginBanner image="/pexels-photo-13162696.jpeg" />
      </div>
      <div className="container mx-auto">
        {/* Desktop View */}
        <div className="flex justify-center lg:px-6 lg:my-8">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* Left */}
            {children}
            {/* Right */}
            <div className="w-full h-full shadow-lg hidden lg:block lg:w-6/12 bg-cover brightness-75 rounded-r-xl">
              {/* Carousel Start */}
              <Swiper
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={true}
                className="rounded-r-xl h-full">
                <SwiperSlide className="w-full h-full">
                  <AuthPhotos
                    className="h-[824px]"
                    image="/pexels-photo-9901800.webp"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                  <AuthPhotos
                    className="h-[824px]"
                    image="/pexels-photo-6544106.jpeg"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                  <AuthPhotos
                    className="h-[824px]"
                    image="/pexels-photo-13162696.jpeg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
