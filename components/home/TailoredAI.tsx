import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { Keyboard, Navigation, Parallax } from "swiper/modules";
import { NextButton, PrevButtton } from "../common/Icons";
import TailoredAIMobile from "./TailoredAIMobile";

interface SuccessActionProps {
  children?: React.ReactNode;
  className?: string;
  paginationClass?: string;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
}

const tailoredAi = [
  {
    category: "sports",
    items: [
      {
        src: "/img/real-time.webp",
        title: "Real Time Ad Insertion During Live Sport Events",
      },
      { src: "/img/fan-engagement.webp", title: "Fan Engagement Optimization" },
      {
        src: "/img/sponsrship.webp",
        title: "Sponsorship Performance Tracking",
      },
      {
        src: "/img/sponsrship.webp",
        title: "Sponsorship Performance Tracking",
      },
    ],
  },
  {
    category: "news",
    items: [
      { src: "/img/breaking-news.webp", title: "Breaking News Alert" },
      { src: "/img/add.webp", title: "Context Aware Ad Placement" },
      {
        src: "/img/cross.webp",
        title: "Cross Platform Story Flow Optimization",
      },
      {
        src: "/img/cross.webp",
        title: "Cross Platform Story Flow Optimization",
      },
    ],
  },
  {
    category: "entertainment",
    items: [
      { src: "/img/friendly-app.webp", title: "Binge-friendly Ad Experience" },
      { src: "/img/content.webp", title: "Content Matched Brand Integration" },
      { src: "/img/viewer-journey.webp", title: "Viewer Journey Monetization" },
      { src: "/img/viewer-journey.webp", title: "Viewer Journey Monetization" },
    ],
  },
];

const TailoredAI: React.FC<SuccessActionProps> = ({ prevIcon, nextIcon }) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("sports");

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    // Determine the active category based on the index of the first visible slide
    const activeSlideIndex = swiper.activeIndex;
    const slidesPerGroup = swiper.params.slidesPerGroup;
    const activeGroupIndex = Math.floor(activeSlideIndex / slidesPerGroup);

    // Determine the active category based on the current group
    const category = tailoredAi[activeGroupIndex]?.category || "sports";
    setActiveCategory(category);
  };

  return (
    <section className="w-full mx-auto relative success-in-action space-y-14 max-w-[1198px] md:px-4">
      <div className="space-y-4 px-4 md:px-0">
        <h3 className="section-heading text-center">
          Global Sports & Entertainment Group
        </h3>
        <p className="text-[#2D293E] font-bold font-lato text-xl xl:text-2xl text-center">
          Your Content, Maximized Everywhere Network
        </p>
      </div>
      <h3 className="section-heading text-center">
        Tailored AI for your Media
      </h3>
      <div className="md:block hidden relative">
        <div className="max-w-[1122px] relative mx-auto">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={3}
            slidesPerGroup={3}
            centeredSlides={false}
            spaceBetween={46}
            onSlideChange={handleSlideChange}
            keyboard={{ enabled: true }}
            speed={1000}
            parallax={true}
            grabCursor={true}
            navigation={true}
            modules={[Parallax, Navigation, Keyboard]}
            breakpoints={{
              768: {
                spaceBetween: 25,
              },
              1024: {
                spaceBetween: 35,
              },
            }}
          >
            {tailoredAi.flatMap((category) =>
              category.items.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col relative w-full h-[220px]">
                    <img
                      src={item.src}
                      className="w-full absolute inset-0 rounded-md h-full object-cover object-center"
                      alt={item.title}
                    />
                    <h2 className="text-white z-10 flex justify-start px-4 py-8 items-end h-full font-semibold max-w-[280px] text-lg font-inter">
                      {item.title}
                    </h2>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
          <div className="hidden lg:flex absolute top-0 items-center w-full justify-center h-full">
            <button
              className={`swiper-button-prev xl:-ml-[4%] rotate-180 ${
                isBeginning ? "opacity-0 pointer-events-none" : ""
              }`}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <PrevButtton />
            </button>
            <button
              className={`swiper-button-next xl:-mr-[4%] ${
                isEnd ? "opacity-0 pointer-events-none" : ""
              }`}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <NextButton />
            </button>
          </div>
          <h3 className="text-center text-xl lg:text-2xl text-thunder font-bold mt-4">
            {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h3>
        </div>
      </div>
      <div className="block md:hidden w-full">
        {tailoredAi.map((category) => (
          <TailoredAIMobile
            key={category.category}
            slidesData2={category.items}
          />
        ))}
      </div>
    </section>
  );
};

export default TailoredAI;
