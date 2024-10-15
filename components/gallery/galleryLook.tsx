"use client";
import React from "react";
import SectionHeader from "@/components/sectionHeader";
//@ts-ignore
import { Navigation } from "swiper";
//@ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
import GLookCarousel from "@/components/carousels/gLookCarousel";

const GalleryLook = () => {
  const data = [
    {
      img: "/outfits.avif",
      text: "Bridal Ware in Lahore",
    },
    {
      img: "/outfits.avif",
      text: "Lahore",
    },
    {
      img: "/outfits.avif",
      text: "Bridal Ware",
    },
    {
      img: "/outfits.avif",
      text: "jdskjd sd",
    },
    {
      img: "/outfits.avif",
      text: "uiuw sdjsg sgds",
    },
    {
      img: "/outfits.avif",
      text: "Ware in Lahore",
    },
  ];
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
                {data?.map((item: any, i: number) => {
                  return (
                    <SwiperSlide key={i}>
                      <GLookCarousel img={item?.img} text={item?.text} />
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
            <SwiperSlide>
              <GLookCarousel img="/outfits.avif" text="Bridal Ware in Lahore" />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel
                img="/outfits.avif"
                text="Bridal Ware in Pakistan"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel
                img="/outfits.avif"
                text="Bridal Ware in Faisalabad"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel img="/mua.webp" text="Bridal Ware in Islamabad" />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel img="/mua.webp" text="Bridal Ware in Karachi" />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel img="/mua.webp" text="Bridal Ware in Multan" />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel img="/mua.webp" text="Bridal Ware in Sukkur" />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel img="/mua.webp" text="Bridal Ware in Okara" />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel img="/mua.webp" text="Bridal Ware in Nawabshah" />
            </SwiperSlide>
            <SwiperSlide>
              <GLookCarousel img="/mua.webp" text="Bridal Ware in Jhelum" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default GalleryLook;
