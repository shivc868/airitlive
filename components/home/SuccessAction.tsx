import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";

// Define types for the slide data
interface SlideData {
  logo: string;
  partner: string;
  percentage: string;
  description: string;
}

const slidesData: SlideData[] = [
  {
    logo: "path-to-your-logo1.png",
    partner: "Major League Partner",
    percentage: "50%",
    description: "uplift in per-game ad revenue",
  },
  {
    logo: "path-to-your-logo2.png",
    partner: "Global Partner",
    percentage: "40%",
    description: "increase in brand visibility",
  },
  {
    logo: "path-to-your-logo3.png",
    partner: "National Partner",
    percentage: "30%",
    description: "growth in fan engagement",
  },
];

const SuccessAction: React.FC = () => {
  const swiperRef = useRef<any>(null); // Use 'any' or a more specific type if you prefer

  return (
    <div className="max-w-[738px] w-full mx-auto">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "transparent",
        }}
        speed={600}
        parallax={true}
        pagination={{ clickable: true }}
        navigation={false} // Disable built-in navigation
        modules={[Parallax, Pagination, Navigation]}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex items-center justify-between py-[37px] px-[50px] rounded-[22px] ${
                index % 2 === 0 ? "bg-lightPurple" : "bg-purple"
              }`}
            >
              <div className="max-w-[199px] w-full border border-red-900 h-20">
                <img
                  src={slide.logo}
                  alt={`${slide.partner} Logo`}
                  className="w-full"
                />
              </div>
              <div className="w-full max-w-[309px] border-green-900 border space-y-[7px]">
                <h3 className="text-black text-xl font-semibold">
                  {slide.partner}
                </h3>
                <p className="text-4xl font-bold text-black">
                  {slide.percentage}
                </p>
                <p className="text-black">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex items-center">
          <button
            className="swiper-button-prev rotate-180"
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
            className="swiper-button-next"
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
