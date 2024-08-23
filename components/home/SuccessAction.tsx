import React from "react";
import SliderLayout from "../common/SliderLayout";
import { sucessslidesData } from "../common/Helper";

const SuccessAction = () => (
  <>
    <h3 className="section-heading text-center mb-4 lg:mb-7">
      Success in Action
    </h3>
    <SliderLayout
      slidesPerView={1.14}
      classname="max-w-[940px] w-full h-full relative mx-auto"
      paginationClass="pagination-style-one"
    >
      {sucessslidesData.map((slide, index) => (
        <div
          key={index}
          className={`flex items-center w-full justify-between min-h-[160px] lg:min-h-[270px] py-4 md:py-[37px] px-5 md:px-[50px] rounded-[22px] shadow-[-8px_9px_8.1px_0px_rgba(0,0,0,0.25)] h-full ${
            slide.partner === "Major League Partner"
              ? "bg-lightPurple"
              : slide.partner === "24/7 News Network"
              ? "bg-[#B84FF4]"
              : "bg-[#A320EE]"
          }`}
        >
          <div className="max-w-[199px] w-fit sm:w-full h-11 lg:h-20">
            <img
              src={slide.logo}
              alt={`${slide.partner} Logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex flex-col max-w-[310px] items-center space-y-2">
            <h3 className="text-chineseBlack text-nowrap text-center font-lato text-base sm:text-xl xl:text-[32px] md:text-2xl font-semibold">
              {slide.partner}
            </h3>
            <p className="text-3xl sm:text-5xl lg:text-6xl xl:text-[72px] font-black gradient-text">
              {slide.percentage}
            </p>
            <p className="text-xs sm:text-base lg:text-lg xl:text-2xl text-center text-chineseBlack font-lato">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
    </SliderLayout>
  </>
);

export default SuccessAction;
