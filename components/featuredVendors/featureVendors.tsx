"use client";
import React, { useEffect, useState } from "react";
//@ts-ignore
import { Navigation } from "swiper";
//@ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
import FvendrosCarousel from "@/components/carousels/fvendrosCarousel";
import SectionHeader from "@/components/sectionHeader";
import { getVendorsFeatured } from "@/lib/api";

const FeatureVendors = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await getVendorsFeatured();
      setData(data?.featured);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
                      img={item?.ProjectPhoto[0]?.photo}
                      name={item?.brand}
                      vendorCity={item?.city}
                      price={item?.initialPrice}
                      rating={item?.averageRating}
                      id={item?.id}
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
