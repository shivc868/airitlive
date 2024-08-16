"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function PlatformSlider() {
  return (
    <div className="mt-8 platform-slider-wrapper">
      <Swiper
        className="mySwiper pb-[50px]"
        slidesPerView={"auto"}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide className="!w-[320px]">
          <div className="flex flex-col w-full">
            <img
              src="/img/platform-1.png"
              className="w-full h-[220px] object-cover object-center"
              alt=""
            />

            <h2 className="text-center text-thunder text-lg font-inter">CTV</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[320px]">
          <div className="flex flex-col w-full">
            <img
              src="/img/platform-2.png"
              className="w-full h-[220px] object-cover object-center"
              alt=""
            />
            <h2 className="text-center text-thunder text-lg font-inter">OTT</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[320px]">
          <div className="flex flex-col w-full">
            <img
              src="/img/platform-1.png"
              className="w-full h-[220px] object-cover object-center"
              alt=""
            />
            <h2 className="text-center text-thunder text-lg font-inter">
              Native
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!w-[320px]">
          <div className="flex flex-col w-full">
            <img
              src="/img/platform-1.png"
              className="w-full h-[220px] object-cover object-center"
              alt=""
            />

            <h2 className="text-center text-thunder text-lg font-inter">CTV</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[320px]">
          <div className="flex flex-col w-full">
            <img
              src="/img/platform-2.png"
              className="w-full h-[220px] object-cover object-center"
              alt=""
            />
            <h2 className="text-center text-thunder text-lg font-inter">OTT</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[320px]">
          <div className="flex flex-col w-full">
            <img
              src="/img/platform-1.png"
              className="w-full h-[220px] object-cover object-center"
              alt=""
            />
            <h2 className="text-center text-thunder text-lg font-inter">
              Native
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
