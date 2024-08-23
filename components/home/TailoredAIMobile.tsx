import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow"; // Import coverflow effect

// Import required modules
import {
  Navigation,
  Parallax,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import SecondaryButton from "../common/SecondaryButton";

interface SuccessActionMobileProps {
  slidesData2: { src: string; title: string }[];
}

const TailoredAIMobile: React.FC<SuccessActionMobileProps> = ({
  slidesData2,
}) => {
  return (
    <div>
      <div className="mt-8 max-w-[1122px] m">
        <Swiper
          slidesPerView={1.79}
          spaceBetween={25}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          speed={600}
          parallax={true}
          navigation={true}
          loop={true}
          modules={[Parallax, Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 20,
            stretch: 2,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            450: { spaceBetween: 30 },
            600: { slidesPerView: 2.5, spaceBetween: 25 },
          }}
        >
          {slidesData2.map((slide, index) => (
            <SwiperSlide className="!h-auto rounded-md" key={index}>
              <div className="flex flex-col relative w-full h-full min-h-[130px] sm:min-h-[155px] max-h-[200px]">
                <img
                  src={slide.src}
                  className="w-full absolute inset-0 h-full object-cover !rounded-md   object-center"
                  alt={slide.title}
                />
                <h2 className="text-white z-10 flex justify-start sm:px-4 px-2 pt-9 md:pt-10 pb-5 items-end h-full font-semibold text-sm font-inter">
                  {slide.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <SecondaryButton className="mx-auto h-6 mt-6 text-sm">
          Know More
        </SecondaryButton>
      </div>
    </div>
  );
};

export default TailoredAIMobile;
