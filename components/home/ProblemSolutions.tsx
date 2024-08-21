"use client";

import { useRef, useState } from "react";
import { ArrowIcon } from "../common/AppIcons";
import { styles } from "../common/style";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { NextButton, PrevButtton } from "../common/Icons";
import { problemData } from "../common/Helper";

const ProblemSolutions = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <section id="solutions" className="px-4 max-w-[920px]  mx-auto">
      <div className={styles.container}>
        <h2 className="section-heading py-14 text-center">Problems we solve</h2>
        <div className=" relative ">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={2}
            slidesPerGroup={2}
            spaceBetween={100}
            loop={true}
            navigation={true}
            speed={600}
            onSlideChange={handleSlideChange}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              320: {
                spaceBetween: 10,
              },
              480: {
                spaceBetween: 20,
              },
              768: {
                spaceBetween: 30,
              },
              1024: {
                spaceBetween: 100,
              },
            }}
          >
            {problemData.map((problem, index) => (
              <SwiperSlide key={index} className="min-h-full lg:!min-w-[380px]">
                <div className="max-w-full min-h-full max-h-full min-w-full cursor-pointer flex flex-col overflow-hidden group relative bg-[#C594F6] rounded-lg w-full">
                  <div className="transition-all flex-col grow flex h-full duration-300 group-hover:-translate-y-[calc(100%-60px)] relative z-10">
                    <div className=" grow h-full flex flex-col w-full">
                      <div className="pt-10 justify-between grow problem-solution-bg-gradient flex flex-col gap-24">
                        <h3 className="text-sm sm:text-base md:text-xl lg:text-[30px] px-4 leading-[1.2] text-center text-white opacity-95 font-lato font-bold">
                          {problem.title}
                        </h3>

                        <p className="text-white p-3 text-xs sm:text-sm  lg:text-[18px] font-inter tracking-[0.217px] leading-[1.2]">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-full origin-center duration-300 transition-all group-hover:rotate-180 min-h-[60px] flex justify-center items-center">
                      <ArrowIcon />
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 h-full w-full z-0 gap-4 flex flex-col justify-center items-center">
                    <h2 className="font-lato gradient-hero-main-text text-[40px] pt-10 leading-[1.2">
                      {problem.solutionTitle}
                    </h2>
                    <p className="text-white text-center leading-[1.2] text-base p-4">
                      {problem.solutionDescription}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* == Navigation === */}
          <div className="hidden lg:flex  items-center w-full justify-center h-full">
            <button
              className={`swiper-button-prev -ml-[6%] rotate-180 min-w-11 ${
                isBeginning ? "opacity-0 pointer-events-none" : ""
              }`}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <PrevButtton />
            </button>
            <button
              className={`swiper-button-next -mr-[6%] min-w-11 ${
                isEnd ? "opacity-0 pointer-events-none" : ""
              }`}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <NextButton />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutions;
