import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation, Parallax } from "swiper/modules";
import { NextButton, PrevButtton } from "../common/Icons";
import TailoredAIMobile from "./TailoredAIMobile";

interface SuccessActionProps {
  children: React.ReactNode;
  classname: React.ReactNode;
  paginationClass?: string;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
}

const tailoredAi = [
  {
    src: "/img/real-time.webp",
    title: "Real Time Ad Insertion During Live Sport Events",
  },
  { src: "/img/fan-engagement.webp", title: "Fan Engagement Optimization" },
  { src: "/img/sponsrship.webp", title: "Sponsorship Performance Tracking" },
  {
    src: "/img/real-time.webp",
    title: "Real Time Ad Insertion During Live Sport Events",
  },
  { src: "/img/fan-engagement.webp", title: "Fan Engagement Optimization" },
  { src: "/img/sponsrship.webp", title: "Sponsorship Performance Tracking" },
];
const slidesData2 = [
  {
    src: "/img/breaking-news.webp",
    title: "Real Time Ad Insertion During Live Sport Events",
  },
  {
    src: "/img/add.webp",
    title: "Context Aware Ad Placement",
  },

  {
    src: "/img/cross.webp",
    title: "Cross Platform Story Flow Optimization",
  },

  {
    src: "/img/cross.webp",
    title: "Cross Platform Story Flow Optimization",
  },
];
const slidesData3 = [
  {
    src: "/img/friendly-app.webp",
    title: "Binge-friendly Ad Experience",
  },
  {
    src: "/img/content.webp",
    title: "Content Matched Brand Integration",
  },
  {
    src: "/img/viewer-journey.webp",
    title: "Viewer Journey Monetization",
  },
  {
    src: "/img/viewer-journey.webp",
    title: "Viewer Journey Monetization",
  },
];

const TailoredAI: React.FC<SuccessActionProps> = ({ prevIcon, nextIcon }) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="w-full mx-auto relative success-in-action  max-w-[1198px]">
      <h3 className="section-heading text-center">
        Tailored AI for your Media
      </h3>
      <div className="md:block hidden relative">
        <div className="mt-8 max-w-[1122px] relative  mx-auto">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={3}
            spaceBetween={46}
            onSlideChange={handleSlideChange}
            speed={600}
            parallax={true}
            navigation={true}
            modules={[Parallax, Navigation]}
          >
            {tailoredAi.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col relative  w-full h-[220px]">
                  <img
                    src={slide.src}
                    className="w-full absolute inset-0  h-full object-cover object-center"
                    alt={slide.title}
                  />
                  <h2 className=" text-white  z-10 flex justify-start px-4 py-8 items-end h-full  font-semibold max-w-[280px] text-lg font-inter">
                    {slide.title}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex absolute top-0 items-center w-full justify-center h-full">
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
      </div>
      <div className="block md:hidden w-full">
        <TailoredAIMobile slidesData2={tailoredAi} />
        <TailoredAIMobile slidesData2={slidesData2} />
        <TailoredAIMobile slidesData2={slidesData3} />
      </div>
    </section>
  );
};

export default TailoredAI;
