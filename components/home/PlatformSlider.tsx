"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { NextButton, PrevButtton } from "../common/Icons";

export default function PlatformSlider() {
  const platforms = [
    { src: "/img/platform-1.png", title: "CTV" },
    { src: "/img/platform-2.png", title: "OTT" },
    { src: "/img/platform-1.png", title: "Native" },
    { src: "/img/platform-1.png", title: "CTV" },
    { src: "/img/platform-2.png", title: "OTT" },
    { src: "/img/platform-1.png", title: "Native" },
  ];

  const swiperRef = useRef<any>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <div className="mt-8  success-in-action  relative max-w-[1090px] mx-auto hlo">
      <Swiper
        className="mySwiper pb-[50px]"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={3}
        spaceBetween={40}
        centeredSlides={true}
        onSlideChange={handleSlideChange}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            spaceBetween: 15,
          },
          768: {
            spaceBetween: 25,
          },
          1024: {
            spaceBetween: 30,
          },
        }}
      >
        {platforms.map((platform, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col w-full">
              <img
                src={platform.src}
                className="w-full h-[220px] object-cover object-center"
                alt={platform.title}
              />
              <h2 className="text-center text-thunder text-lg font-inter">
                {platform.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden lg:flex absolute top-0 items-center w-full justify-center h-full">
        <button
          className={`swiper-button-prev -ml-[4%] rotate-180 ${
            isBeginning ? "opacity-0 pointer-events-none" : ""
          }`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <PrevButtton />
        </button>
        <button
          className={`swiper-button-next -mr-[4%] ${
            isEnd ? "opacity-0 pointer-events-none" : ""
          }`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <NextButton />
        </button>
      </div>
    </div>
  );
}
