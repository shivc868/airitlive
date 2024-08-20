"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

// Import required modules
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { NextButton, PrevButtton } from "../common/Icons";

const platforms = [
  { src: "/img/platform-1.png", title: "CTV" },
  { src: "/img/platform-2.png", title: "OTT" },
  { src: "/img/platform-1.png", title: "Native" },
  { src: "/img/platform-1.png", title: "CTV" },
  { src: "/img/platform-2.png", title: "OTT" },
  { src: "/img/platform-1.png", title: "Native" },
];

const PlatformSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="mt-8 relative success-in-action max-w-[1090px] mx-auto">
      {/* Mobile Slider */}
      <div className="md:hidden block">
        <div className="relative max-w-[1122px] mx-auto">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={2}
            spaceBetween={10}
            centeredSlides={true}
            onSlideChange={handleSlideChange}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            coverflowEffect={{
              stretch: 1,
              depth: 50,
              modifier: 1,
            }}
            breakpoints={{
              450: { spaceBetween: 20 },
              768: { slidesPerView: 2.5, spaceBetween: 25 },
            }}
            className="!py-14"
          >
            {platforms.map((platform, index) => (
              <SwiperSlide
                key={index}
                className="!h-[200px] flex  items-center justify-center rounded-sm overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <img
                    src={platform.src}
                    className="w-full h-full object-cover object-center"
                    alt={platform.title}
                  />
                  <h2 className="text-white absolute inset-0 flex items-end justify-start sm:px-4 px-2 pt-9 md:pt-10 pb-5 font-semibold text-sm font-inter">
                    {platform.title}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hidden lg:flex absolute top-10 items-center w-full justify-center h-full">
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
      </div>

      {/* Desktop Slider */}
      <div className="md:block hidden w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2.5, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {platforms.map((platform, index) => (
            <SwiperSlide key={index} className="flex items-center">
              <div className="relative w-full h-[220px]">
                <img
                  src={platform.src}
                  className="w-full h-full object-cover object-center"
                  alt={platform.title}
                />
                <h2 className="text-center text-thunder text-lg font-inter mt-2">
                  {platform.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PlatformSlider;
