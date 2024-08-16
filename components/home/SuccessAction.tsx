import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";

interface SlideData {
  logo: string;
  partner: string;
  percentage: string;
  description: string;
}

const slidesData: SlideData[] = [
  {
    logo: "/img/red-robin.webp",
    partner: "Major League Partner",
    percentage: "50%",
    description: "uplift in per-game ad revenue",
  },
  {
    logo: "/img/red-robin.webp",
    partner: "24/7 News Network",
    percentage: "40%",
    description: "improvement in breaking news monetization",
  },
  {
    logo: "/img/red-robin.webp",
    partner: "Streaming Giant",
    percentage: "80%",
    description: "increase in completed ad views",
  },
];

const SuccessAction: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="max-w-[846px] h-full rounded-[22px] w-full mx-auto">
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
        modules={[Parallax, Pagination, Navigation]}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide className="h-full !py-16" key={index}>
            <div
              className={`flex items-center justify-between py-[37px] px-[50px] rounded-[22px] shadow-[-8px_9px_8.1px_0px_rgba(0,0,0,0.25)] h-full ${
                index % 3 === 0
                  ? "bg-purple"
                  : index % 3 === 1
                  ? "bg-lightPurple"
                  : "bg-red-900"
              }`}
            >
              <div className="max-w-[199px] w-full h-20">
                <img
                  src={slide.logo}
                  alt={`${slide.partner} Logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full flex flex-col max-w-[310px] items-center space-y-2">
                <h3 className="text-chineseBlack text-nowrap text-center font-lato text-lg sm:text-xl xl:text-[32px] md:text-2xl font-semibold">
                  {slide.partner}
                </h3>
                <p className="text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-black gradient-text">
                  {slide.percentage}
                </p>
                <p className="text-sm sm:text-base md:text-lg xl:text-2xl text-center text-chineseBlack font-lato">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex items-center">
          <button
            className={`swiper-button-prev rotate-180 ${
              isBeginning ? "opacity-0 pointer-events-none" : ""
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <g filter="url(#filter0_di_76_1697)">
                <circle cx="22" cy="18" r="17" fill="#2D293E" />
              </g>
              <path d="M18.5 11L28.5 18L18 24" stroke="white" strokeWidth="2" />
              <defs>
                <filter
                  id="filter0_di_76_1697"
                  x="0"
                  y="0"
                  width="44"
                  height="44"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_76_1697"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_76_1697"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="1.1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.681667 0 0 0 0 0.67485 0 0 0 0 0.67485 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_76_1697"
                  />
                </filter>
              </defs>
            </svg>
          </button>
          <button
            className={`swiper-button-next ${
              isEnd ? "opacity-0 pointer-events-none" : ""
            }`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <g filter="url(#filter0_di_76_1697)">
                <circle cx="22" cy="18" r="17" fill="#2D293E" />
              </g>
              <path d="M18.5 11L28.5 18L18 24" stroke="white" strokeWidth="2" />
              <defs>
                <filter
                  id="filter0_di_76_1697"
                  x="0"
                  y="0"
                  width="44"
                  height="44"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_76_1697"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_76_1697"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="1.1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.681667 0 0 0 0 0.67485 0 0 0 0 0.67485 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_76_1697"
                  />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default SuccessAction;
