import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { NextButton, PrevButtton } from "./Icons";

interface SuccessActionProps {
  children: React.ReactNode;
  classname: React.ReactNode;
  paginationClass?: string;
  slidesPerView?: number;
  isSpecialPage?: boolean;
}

const SliderLayout: React.FC<SuccessActionProps> = ({
  children,
  classname,
  paginationClass,
  slidesPerView = 1.6,
  isSpecialPage = false,
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
      className={`${classname} max-w-[846px] relative h-full rounded-[22px] w-full mx-auto success-in-action`}
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={37}
        slidesPerView={slidesPerView}
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
      <div className="flex items-start ">
        <button
          className={`swiper-button-prev  lg:!w-11 ${
            isSpecialPage ? "lg:-ml-16" : ""
          }  rotate-180 ${isBeginning ? "opacity-0 pointer-events-none" : ""}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <PrevButtton />
        </button>
        <button
          className={`swiper-button-next lg:!w-11 !top-[40%] ${
            isSpecialPage ? "lg:-mr-16" : ""
          }   ${isEnd ? "opacity-0 pointer-events-none" : ""}`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <NextButton />
        </button>
      </div>
    </div>
  );
};

export default SliderLayout;
