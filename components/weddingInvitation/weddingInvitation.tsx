"use client";
//@ts-ignore
import { Navigation } from "swiper";
import InvitesCarousel from "@/components/carousels/invitesCarousel";
import { Swiper, SwiperSlide } from "swiper/react";

const WeddingInvitation = ({
  title,
  items,
  data,
}: {
  title: string;
  items: number;
  data: any;
}) => {
  return (
    <>
      <div className="">
        {/* Content Header Part */}
        <div className="hidden xl:block">
          <div className="my-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h5 className="text-2xl font-semibold">{title}</h5>
              <h6 className="text-sm text-dateColor-900">{items} Items</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-white">
        <div className="px-0 flex flex-wrap items-center justify-between">
          {/* Carousel Items */}
          <div className="carousel__div w-full flex items-center justify-between">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerGroup={1}
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
                    <InvitesCarousel
                      name={item?.name}
                      img={item?.img}
                      id={item?.id}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default WeddingInvitation;
