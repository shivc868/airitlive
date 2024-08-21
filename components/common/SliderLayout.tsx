import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { NextButton, PrevButtton } from "./Icons";

interface SliderLayoutProps {
  children: React.ReactNode;
  classname?: string;
  paginationClass?: string;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  slidesPerView?: number; // Add this prop
}

const SliderLayout: React.FC<SliderLayoutProps> = ({
  children,
  classname,
  paginationClass,
  prevIcon,
  nextIcon,
  slidesPerView = 1.6, // Default value
}) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div
      className={`${classname} max-w-[846px] h-full rounded-[22px] w-full relative mx-auto success-in-action`}
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={37}
        slidesPerView={slidesPerView} // Use the slidesPerView prop
        centeredSlides={true}
        onSlideChange={handleSlideChange}
        speed={600}
        parallax={true}
        navigation={true}
        pagination={{ clickable: true }}
        className={paginationClass}
        modules={[Parallax, Pagination, Navigation]}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide className="h-full " key={index}>
            {child}
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
          {prevIcon || <PrevButtton />}
        </button>
        <button
          className={`swiper-button-next -mr-[4%] ${
            isEnd ? "opacity-0 pointer-events-none" : ""
          }`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          {nextIcon || <NextButton />}
        </button>
      </div>
    </div>
  );
};

export default SliderLayout;
