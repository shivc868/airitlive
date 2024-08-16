import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { NextButton, PrevButtton } from "./Icons";

interface SuccessActionProps {
  children: React.ReactNode;
  classname: React.ReactNode;
  paginationClass?: string;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
}

const SliderLayout: React.FC<SuccessActionProps> = ({
  children,
  classname,
  paginationClass,
  prevIcon,
  nextIcon,
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
      className={`${classname} max-w-[846px] h-full rounded-[22px] w-full mx-auto success-in-action`}
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={37}
        slidesPerView={1.16}
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
          <SwiperSlide className="h-full py-12 md:!py-16" key={index}>
            {child}
          </SwiperSlide>
        ))}
        <div className="flex items-center">
          <button
            className={`swiper-button-prev  rotate-180 ${
              isBeginning ? "opacity-0 pointer-events-none" : ""
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            {prevIcon || <PrevButtton />}
          </button>
          <button
            className={`swiper-button-next ${
              isEnd ? "opacity-0 pointer-events-none" : ""
            }`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            {nextIcon || <NextButton />}
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default SliderLayout;
