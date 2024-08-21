import React from "react";

interface InsightCardProps {
  data: {
    title: string;
    author: string;
    date: string;
    description: string;
  };
  className?: string;
  contentClass?: string;
}

const InsightCard: React.FC<InsightCardProps> = ({
  data,
  className = "",
  contentClass = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden w-full h-[250px]  !min-w-[320px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-center rounded-[22px] bg-[url('/img/latest-insight-bg.webp')] bg-cover ${className}`}
    >
      <div className="absolute block xl:hidden bg-black/50 inset-0 z-0"></div>
      <div
        className={`absolute font-inter bottom-0 max-w-[400px] left-0 p-4 md:p-6 lg:p-8 text-white z-20 ${contentClass}`}
      >
        <h2 className="text-lg sm:text-2xl font-semibold leading-[144.856%]">
          {data.title}
        </h2>
        <p className="text-xs font-light mt-3 lg:mt-[22px]">
          By {data.author} | {data.date}
        </p>
        <p className="text-xs md:text-sm font-light tracking-tight leading-[195.254%] mt-1.5 sm:mt-5">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default InsightCard;
