import React from "react";

interface UnifiedCardProps {
  data: {
    icon: JSX.Element;
    description: string;
  };
}

const UnifiedCard: React.FC<UnifiedCardProps> = ({ data }) => {
  return (
    <article className="flex flex-col gap-7 max-w-[330px]  justify-center items-center">
      <span className="lg:max-w-[62px] max-w-[30px]">{data.icon}</span>
      <h4 className="text-lg md:text-xl lg:text-2xl text-thunder text-center font-lato">
        {data.description}
      </h4>
    </article>
  );
};

export default UnifiedCard;
