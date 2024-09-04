"use client";
import React from "react";
import SectionHeader from "@/components/sectionHeader";
//@ts-ignore
import { Navigation } from "swiper";
//@ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
import WstoriesCarousel from "@/components/carousels/wstoriesCarousel";
import { formatDate } from "date-fns/format";

const Wstories = () => {
  const data = [
    {
      img: "https://image.wedmegood.com/resized/450X/uploads/images/d2f380bdc1ac49b3a21427c5f6e0cb85realwedding/ShivaniSiddhant-275.jpeg?crop=10,125,2027,1140",
      name: "Shivani and Siddhant",
      summary:
        "A Grand Indore Wedding With A Bride Who Served Us Swoon-Worthy Looks",
      date: "2024-08-21T16:15:06.334Z",
      slug: "/hsdh-ret-dfhdbc-sxl",
    },
    {
      img: "https://image.wedmegood.com/resized/450X/uploads/images/d2f380bdc1ac49b3a21427c5f6e0cb85realwedding/ShivaniSiddhant-275.jpeg?crop=10,125,2027,1140",
      name: "Shivani and Siddhant",
      summary:
        "A Grand Indore Wedding With A Bride Who Served Us Swoon-Worthy Looks",
      date: "2024-08-21T16:15:06.334Z",
      slug: "/hsdh-ret-dfhdbc-sxl",
    },
    {
      img: "https://image.wedmegood.com/resized/450X/uploads/images/d2f380bdc1ac49b3a21427c5f6e0cb85realwedding/ShivaniSiddhant-275.jpeg?crop=10,125,2027,1140",
      name: "Shivani and Siddhant",
      summary:
        "A Grand Indore Wedding With A Bride Who Served Us Swoon-Worthy Looks",
      date: "2024-08-21T16:15:06.334Z",
      slug: "/hsdh-ret-dfhdbc-sxl",
    },
    {
      img: "https://image.wedmegood.com/resized/450X/uploads/images/d2f380bdc1ac49b3a21427c5f6e0cb85realwedding/ShivaniSiddhant-275.jpeg?crop=10,125,2027,1140",
      name: "Shivani and Siddhant",
      summary:
        "A Grand Indore Wedding With A Bride Who Served Us Swoon-Worthy Looks",
      date: "2024-08-21T16:15:06.334Z",
      slug: "/hsdh-ret-dfhdbc-sxl",
    },
  ];

  return (
    <section className="lg:py-14 py-10">
      <div className="popular_venue container mx-auto md:px-20 px-4">
        <SectionHeader text="Real Wedding Stories" />
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
                      name={item?.name}
                      summary={item?.summary}
                      date={formatDate(item?.date, "d MMMM YYY")}
                      slug={item?.slug}
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

export default Wstories;
