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
    <div className="max-w-[292px] flex flex-col gap-3 w-full">
      <h2 className="text-[60px] font-semibold gradient-hero-main-text">
        {percentage}
      </h2>
      <h6 className="text-[#2D293E] text-[24px] font-lato">{description}</h6>
      <div>
        <button className="flex px-3 py-1 rounded-lg bg-white justify-center items-center gap-1">
          {icon}
          <span className="text-black font-lato text-[18px]">{category}</span>
        </button>
      </div>
    </div>
  );
};

export default PerformanceMetricsCards;
