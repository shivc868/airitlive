"use client";

import React, { useRef, useState } from "react";
import { styles } from "../common/style";
import { ArrowIcon } from "../common/AppIcons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

const ProblemSolutions = () => {
  const problemData = [
    {
      title: "Underperforming Ad Revenue",
      description:
        "Despite high traffic and quality content, publishers struggle to optimize their ad revenue streams. Many find that their current ad tech solutions fail to maximize their inventory’s potential, leaving money on the table.",
      solutionTitle: "How We Solve It",
      solutionDescription:
        "Air1Live enhances revenue by implementing advanced AI-driven ad optimization strategies, ensuring higher CPMs and fully utilized ad space across all platforms.",
    },
    {
      title: "Poor in Programmatic Advertising",
      description:
        "Programmatic advertising can be complex and requires constant optimization to ensure high ROI. Publishers often face challenges with inefficiencies and poor targeting capabilities.",
      solutionTitle: "How We Solve It",
      solutionDescription:
        "Air1Live improves programmatic performance by utilizing cutting-edge algorithms that optimize ad placements and targeting, leading to better ROI for publishers.",
    },
    {
      title: "Complexity of Managing Multi-Platform Monetization",
      description:
        "Handling multiple platforms for monetization can be a daunting task, with each platform requiring different strategies and management tools.",
      solutionTitle: "How We Solve It",
      solutionDescription:
        "Air1Live simplifies this process by providing a unified platform that integrates all your monetization efforts, ensuring consistency and efficiency across all channels.",
    },
    {
      title: "Fragmented Audience Data",
      description:
        "Audience data is often scattered across various platforms and channels, making it difficult to obtain a holistic view of your audience.",
      solutionTitle: "How We Solve It",
      solutionDescription:
        "Air1Live consolidates audience data from multiple sources into a single platform, allowing for more accurate targeting and personalized ad experiences.",
    },
    {
      title: "Ensuring Brand Safety & Compliance",
      description:
        "Maintaining brand safety and compliance in a rapidly evolving ad landscape is challenging for publishers.",
      solutionTitle: "How We Solve It",
      solutionDescription:
        "Air1Live ensures brand safety and compliance by offering tools that monitor and enforce policies across all ad placements, protecting your brand’s reputation.",
    },
    {
      title: "Slow & Poor Ad Tech Support",
      description:
        "Publishers often struggle with delayed and inadequate support from ad tech providers, leading to prolonged downtime and revenue loss.",
      solutionTitle: "How We Solve It",
      solutionDescription:
        "Air1Live provides 24/7 dedicated support with a team of experts ready to resolve any issues quickly, minimizing downtime and maximizing revenue.",
    },
    {
      title: "Balancing User Experience with Monetization",
      description:
        "Striking the right balance between user experience and monetization can be difficult, with intrusive ads often leading to poor user engagement.",
      solutionTitle: "How We Solve It",
      solutionDescription:
        "Air1Live offers non-intrusive ad solutions that enhance user experience while maximizing ad revenue, ensuring a win-win scenario for publishers and users alike.",
    },
    {
      title: "Difficulty in Ad Personalization",
      description:
        "Personalizing ads to meet the preferences of different audience segments can be challenging, especially with limited data and tools.",
      solutionTitle: "How We Solve It",
      solutionDescription:
        "Air1Live leverages advanced data analytics to deliver personalized ad experiences that resonate with your audience, increasing engagement and conversion rates.",
    },
    {
      title: "Navigating the Ad Tech Landscape",
      description:
        "The ad tech landscape is constantly evolving, making it difficult for publishers to stay ahead of the curve.",
      solutionTitle: "How We Solve It",
      solutionDescription:
        "Air1Live keeps you ahead with a future-proof ad tech stack that adapts to industry changes, ensuring you’re always at the forefront of innovation.",
    },
    {
      title: "Lack of Transparency in Ad Performance",
      description:
        "Publishers often struggle with a lack of transparency in ad performance, making it difficult to optimize and improve their strategies.",
      solutionTitle: "How We Solve It",
      solutionDescription:
        "Air1Live provides detailed and transparent reporting on ad performance, empowering you with the insights needed to make informed decisions and optimize your revenue.",
    },
  ];
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {};
  return (
    <section id="solutions" className="px-4">
      <div className={styles.container}>
        <h2 className="section-heading py-14 text-center">Problems we solve</h2>
        <div className="flex overflow-hidden sm:px-8 gap-5 flex-wrap">
          <Swiper
            className="mySwiper max-w-full !overflow-visible !pb-10"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            speed={600}
            parallax={true}
            onSlideChange={handleSlideChange}
            pagination={{
              clickable: true,
            }}
            modules={[Parallax, Pagination]}
          >
            {problemData.map((problem, index) => (
              <SwiperSlide
                key={index}
                className="!w-[320px] sm:!w-[350px] md:!w-[379px] min-h-full"
              >
                <div className="max-w-full min-h-full max-h-full min-w-full cursor-pointer flex flex-col overflow-hidden group relative bg-[#C594F6] rounded-lg w-full">
                  <div className="transition-all flex-col grow flex h-full duration-300 group-hover:-translate-y-[calc(100%-60px)] relative z-10">
                    <div className="bg-black grow h-full flex flex-col w-full">
                      <div className="pt-10 justify-end grow problem-solution-bg-gradient flex flex-col gap-24">
                        <h3 className="text-[30px] px-4 leading-[1.2] text-center text-white opacity-95 font-lato font-bold">
                          {problem.title}
                        </h3>

                        <p className="text-white tracking-[0.21px] p-3 text-[18px] font-lato leading-[1.2]">
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
            {/* <div className="flex items-center">
              <button
                className={`swiper-button-prev rotate-180 !left-[-25px]`}
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
                  <path
                    d="M18.5 11L28.5 18L18 24"
                    stroke="white"
                    strokeWidth="2"
                  />
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
                className={`swiper-button-next !right-[-25px]`}
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
                  <path
                    d="M18.5 11L28.5 18L18 24"
                    stroke="white"
                    strokeWidth="2"
                  />
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
            </div> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutions;
