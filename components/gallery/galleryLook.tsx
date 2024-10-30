"use client";
import React from "react";
import SectionHeader from "@/components/sectionHeader";
//@ts-ignore
import { Navigation } from "swiper";
//@ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
import GLookCarousel from "@/components/carousels/gLookCarousel";
import useUi from "@/lib/hooks/useUi";

const GalleryLook = () => {
  const { vendorCategories } = useUi();

  return (
    <section className="lg:py-14">
      <div className="popular_venue container mx-auto md:px-20 px-4">
        <SectionHeader text="Gallery To Look For" />
        <div className="desktop_view hidden xl:block">
          <div className="popular_venue_content py-9 px-0 flex flex-wrap items-center justify-between">
            {/* Carousel Items */}
            <div className="carousel__div w-full flex items-center justify-between">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={1}
                grabCursor={true}
                loop={false}
                loopFillGroupWithBlank={true}
                className="mySwiper w-full"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 70,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1440: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                  },
                }}>
                {vendorCategories?.map((item: any, i: number) => {
                  return (
                    <SwiperSlide key={i}>
                      <GLookCarousel img={item?.photo} text={item?.name} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="mobile__carousel block lg:hidden py-9">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={30}
            slidesPerGroup={1}
            grabCursor={true}
            loop={false}
            loopFillGroupWithBlank={true}
            className="mySwiper">
            {vendorCategories?.map((item: any, i: number) => {
              return (
                <SwiperSlide key={i}>
                  <GLookCarousel img={item?.photo} text={item?.name} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default GalleryLook;
