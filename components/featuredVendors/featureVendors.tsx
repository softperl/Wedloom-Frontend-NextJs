"use client";
import React from "react";
//@ts-ignore
import { Navigation } from "swiper";
//@ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
import FvendrosCarousel from "@/components/carousels/fvendrosCarousel";
import SectionHeader from "@/components/sectionHeader";

const FeatureVendors = () => {
  const data = [
    {
      img: "https://images.pexels.com/photos/2124722/pexels-photo-2124722.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Vanity Affair By Anmol",
      category: "Bridal Makeup",
      price: "Rs. 26,000",
      rating: "4.7",
    },
    {
      img: "https://images.pexels.com/photos/2124722/pexels-photo-2124722.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Vanity Affair By Anmol",
      category: "Bridal Makeup",
      price: "Rs. 19,000",
      rating: "5",
    },
    {
      img: "https://images.pexels.com/photos/2124722/pexels-photo-2124722.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Vanity Affair By Anmol",
      category: "Bridal Makeup",
      price: "Rs. 14,000",
      rating: "4.9",
    },
    {
      img: "https://images.pexels.com/photos/2124722/pexels-photo-2124722.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Vanity Affair By Anmol",
      category: "Bridal Makeup",
      price: "Rs. 15,000",
      rating: "4.5",
    },
    {
      img: "https://images.pexels.com/photos/2124722/pexels-photo-2124722.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Vanity Affair By Anmol",
      category: "Bridal Makeup",
      price: "Rs. 36,000",
      rating: "4.9",
    },
  ];
  return (
    <section className="lg:py-14">
      <div className="popular_venue container mx-auto md:px-20 px-4 text-white">
        <SectionHeader text="Featured Vendors" />
        <div className="popular_venue_content py-9 px-0 flex flex-wrap items-center justify-between">
          {/* Carousel Items */}
          <div className="carousel__div w-full flex items-center justify-between">
            <Swiper
              navigation={true}
              modules={[Navigation]}
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
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}>
              {data?.map((item: any, i: number) => {
                return (
                  <SwiperSlide key={i}>
                    <FvendrosCarousel
                      img={item?.img}
                      name={item?.title}
                      summary={item?.category}
                      price={item?.price}
                      rating={item?.rating}
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

export default FeatureVendors;
