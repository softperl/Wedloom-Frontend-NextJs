"use client";
import React from "react";
import SectionHeader from "@/components/sectionHeader";
//@ts-ignore
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import WstoriesCarousel from "@/components/carousels/wstoriesCarousel";
import { formatDate } from "date-fns/format";

const LatestBlogs = ({ heading }: { heading: string }) => {
  const data = [
    {
      img: "/pexels-photo-2106687.jpeg",
      title:
        "12 Amazing New Things To Do To Your Lehenga That Will Make It Super Unique!",
      summary:
        "Every bride wants to be a unique one- we bet you do too! So rather than running around for a unique lehenga, you could also consider making a few tweaks here and there, as well as adding new things th...",
      date: "2024-08-21T16:15:06.334Z",
    },
    {
      img: "/pexels-photo-2106687.jpeg",
      title:
        "12 Amazing New Things To Do To Your Lehenga That Will Make It Super Unique!",
      summary:
        "Every bride wants to be a unique one- we bet you do too! So rather than running around for a unique lehenga, you could also consider making a few tweaks here and there, as well as adding new things th...",
      date: "2024-08-21T16:15:06.334Z",
    },
    {
      img: "/pexels-photo-2106687.jpeg",
      title:
        "12 Amazing New Things To Do To Your Lehenga That Will Make It Super Unique!",
      summary:
        "Every bride wants to be a unique one- we bet you do too! So rather than running around for a unique lehenga, you could also consider making a few tweaks here and there, as well as adding new things th...",
      date: "2024-08-21T16:15:06.334Z",
    },
    {
      img: "/pexels-photo-2106687.jpeg",
      title:
        "12 Amazing New Things To Do To Your Lehenga That Will Make It Super Unique!",
      summary:
        "Every bride wants to be a unique one- we bet you do too! So rather than running around for a unique lehenga, you could also consider making a few tweaks here and there, as well as adding new things th...",
      date: "2024-08-21T16:15:06.334Z",
    },
  ];
  return (
    <section className="lg:py-14">
      <div className="popular_venue container mx-auto lg:px-20 px-4">
        <SectionHeader text={heading} />
        <div className="popular_venue_content py-9 px-0 flex flex-wrap items-center justify-between">
          {/* Carousel Items */}
          <div className="carousel__div w-full flex items-center justify-between">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={3}
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
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}>
              {data?.map((item: any, i: number) => {
                return (
                  <SwiperSlide key={i}>
                    <WstoriesCarousel
                      img={item?.img}
                      name={item?.title}
                      summary={item?.summary}
                      date={formatDate(item?.date, "d MMMM YYY")}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
