"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

// import { GlassMagnifier } from "react-image-magnifiers";
// Import required modules

import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
  Parallax,
} from "swiper/modules";
import { NextButton, PrevButtton } from "../common/Icons";
import ImageMagnifier from "../common/ImageMagnifier";
import Link from "next/link";

const platforms = [
  { src: "/img/platform-1.png", title: "CTV", url: "/" },
  { src: "/img/platform-2.png", title: "OTT", url: "/" },
  { src: "/img/platform-3.webp", title: "Native", url: "/" },
  { src: "/img/platform-4.webp", title: "Apps", url: "/" },
  { src: "/img/platform-5.webp", title: "Games", url: "/" },
  { src: "/img/platform-6.webp", title: "Website", url: "/" },
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
            slidesPerView={2.5}
            spaceBetween={20}
            //   autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            //   }}
            centeredSlides={true}
            speed={600}
            parallax={true}
            navigation={true}
            loop={true}
            pagination={{ clickable: true }}
            modules={[
              Parallax,
              Navigation,
              EffectCoverflow,
              Pagination,
              Autoplay,
            ]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 20,
              stretch: 2,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              450: { spaceBetween: 30 },
              600: { slidesPerView: 2.5, spaceBetween: 25 },
            }}
          >
            {platforms.map((platform, index) => (
              <SwiperSlide
                key={index}
                className="!h-[150px] sm:h-[200px] flex  rounded-md items-center justify-center"
              >
                <Link className="cursor-pointer" href={platform.url}>
                  <div className="relative w-full h-full">
                    <ImageMagnifier
                      height="!min-h-[150px] sm:h-[200px]"
                      src={platform.src}
                    />
                    <h2 className="text-black z-40 relative flex items-center justify-center sm:px-4 px-2 pt-2 font-semibold text-sm font-inter">
                      {platform.title}
                    </h2>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Desktop Slider */}
      <div className="md:block hidden w-full">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={3}
          onSlideChange={handleSlideChange}
          keyboard={{ enabled: true }}
          speed={1000}
          parallax={true}
          grabCursor={true}
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            768: { slidesPerView: 2.5, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {platforms.map((platform, index) => (
            <SwiperSlide key={index} className="flex items-center">
              <Link className="cursor-pointer" href={platform.url}>
                <div className="relative w-full h-[220px]">
                  <ImageMagnifier src={platform.src} />
                  <h2 className="text-center text-thunder text-lg font-inter mt-2">
                    {platform.title}
                  </h2>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:flex absolute top-0 items-center w-full justify-center h-full">
        <button
          className={`swiper-button-prev -mr-[2%] xl:-ml-[4%] rotate-180 ${
            isBeginning ? "opacity-0 pointer-events-none" : ""
          }`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <PrevButtton />
        </button>
        <button
          className={`swiper-button-next -mr-[2%] xl:-mr-[4%] ${
            isEnd ? "opacity-0 pointer-events-none" : ""
          }`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <NextButton />
        </button>
      </div>
    </section>
  );
};

export default PlatformSlider;
