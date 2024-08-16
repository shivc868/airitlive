import React from "react";

interface UnifiedCardProps {
  data: {
    icon: JSX.Element;
    description: string;
  };
}

const UnifiedCard: React.FC<UnifiedCardProps> = ({ data }) => {
  return (
    <article className="flex flex-col gap-3 md:gap-7 min-w-[150px] lg:min-w-[300px] max-w-[270px] md:max-w-[330px] w-full justify-center items-center">
      <span className="lg:max-w-[62px] max-w-[30px]">{data.icon}</span>
      <h4 className="max-[450px]:text-sm text-base sm:text-lg md:text-xl lg:text-2xl text-thunder text-center font-lato">
        {data.description}
      </h4>
    </article>
  );
};

export default UnifiedCard;
