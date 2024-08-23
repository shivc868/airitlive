import React from "react";

interface PerformanceMetricsCardsProps {
  percentage: string;
  description: string;
  category: string;
  icon: React.ReactNode; // This allows any valid React node (e.g., JSX elements) to be passed as the icon
}

const PerformanceMetricsCards: React.FC<PerformanceMetricsCardsProps> = ({
  percentage,
  description,
  category,
  icon,
}) => {
  return (
    <div className="max-w-[292px] justify-center items-center lg:justify-start lg:items-start flex flex-col gap-3 w-full">
      <h2 className="text-3xl md:text-5xl lg:text-[72px] font-lato !tracking-none font-semibold gradient-hero-main-text">
        {percentage}
      </h2>
      <h6 className="text-[#2D293E] lg:text-start text-center max-[570px]:text-xs text-sm sm:text-lg md:text-xl leading-[1.2]  lg:text-2xl md:w-[90%] lg:w-full font-lato">
        {description}
      </h6>
      <div className="imageDiv">
        {" "}
        <button className="flex px-3 py-1 rounded-lg bg-white justify-center items-center gap-1 ">
          {icon}
          <span className="text-black font-lato text-base lg:text-[18px]">
            {category}
          </span>
        </button>
      </div>
    </div>
  );
};

export default PerformanceMetricsCards;
