"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/sectionHeader";
//@ts-ignore
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import WstoriesCarousel from "@/components/carousels/wstoriesCarousel";
import { formatDate } from "date-fns/format";
import { handelError } from "@/lib/utils";
import { getPosts } from "@/lib/api";

const LatestBlogs = ({ heading }: { heading: string }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data } = await getPosts({
        q: "", // Pass search query here if needed
        page: 1,
        perPage: 10,
        sortBy: "date",
        sortOrder: "desc",
      });
      setData(data.posts);
      console.log("blogs", data.posts);
    } catch (err: any) {
      handelError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

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
                      img={item?.thumbnail}
                      name={item?.title}
                      summary={item?.description}
                      date={formatDate(item?.createdAt, "d MMMM YYY")}
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

export default LatestBlogs;
