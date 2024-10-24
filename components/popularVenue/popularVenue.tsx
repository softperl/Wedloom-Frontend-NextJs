"use client";
import React from "react";
import PvenueCarousel from "@/components/carousels/pvenueCarousel";
import SectionHeader from "@/components/sectionHeader";
//@ts-ignore
import { Navigation } from "swiper";
//@ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";

const PopularVenue = () => {
  const data = [
    {
      img: "/pexels-photo-5834134.jpeg",
      name: "5 Star & Above Hotels",
      links: [
        {
          name: "popular1",
          href: "/popular1",
        },
        {
          name: "popular2",
          href: "/popular2",
        },
        {
          name: "popular3",
          href: "/popular3",
        },
        {
          name: "popular4",
          href: "/popular4",
        },
      ],
    },
    {
      img: "/pexels-photo-5834134.jpeg",
      name: "5 Star & Above Hotels",
      links: [
        {
          name: "popular1",
          href: "/popular1",
        },
        {
          name: "popular2",
          href: "/popular2",
        },
      ],
    },
    {
      img: "/pexels-photo-5834134.jpeg",
      name: "5 Star & Above Hotels",
      links: [
        {
          name: "popular1",
          href: "/popular1",
        },
        {
          name: "popular3",
          href: "/popular3",
        },
        {
          name: "popular4",
          href: "/popular4",
        },
      ],
    },
  ];
  return (
    <section className="lg:py-14 mt-12">
      <div className="popular_venue container mx-auto md:px-20 px-4">
        <SectionHeader text="Popular Venues" />
        <div className="popular_venue_content py-9 flex flex-wrap items-center justify-between">
          {/* Carousel Items Desktop*/}
          <div className="hidden lg:block carousel__div w-full">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={1}
              grabCursor={true}
              loop={false}
              loopFillGroupWithBlank={true}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}>
              {data?.map((item: any, i: number) => {
                return (
                  <SwiperSlide key={i}>
                    <PvenueCarousel
                      img={item?.img}
                      name={item?.name}
                      links={item?.links}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Mobile Venue Box */}
          <div className="block lg:hidden mobile_venue">
            {data?.map((item: any, i: number) => {
              return (
                <PvenueCarousel
                  key={i}
                  img={item?.img}
                  name={item?.name}
                  links={item?.links}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularVenue;
