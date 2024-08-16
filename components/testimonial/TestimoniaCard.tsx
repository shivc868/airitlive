import React from "react";
import { MdIcon } from "../common/Icons";
import Image from "next/image";

interface TestimoniaCardData {
  feedback: string;
  image: string;
  name: string;
  role: string;
  company: string;
}

interface TestimoniaCardProps {
  data: TestimoniaCardData;
}

const TestimoniaCard: React.FC<TestimoniaCardProps> = ({ data }) => {
  return (
    <article className="bg-white gap-2 sm:gap-3 font-inter h-auto p-3 sm:p-5 mx-2 sm:mx-4 xl:mx-6 rounded-[6.714px] max-w-[340px] lg:max-w-[450px] flex flex-col justify-between">
      <MdIcon />
      <div className="flex-1">
        <p className="text-aswadBlack text-xs sm:text-sm lg:text-base leading-[150%] md:leading-[170%]">
          {data.feedback}
        </p>
      </div>
      <div className="flex items-center gap-5 border-t pt-1.5 border-[rgba(0,0,0,0.51)]">
        <Image
          width={60}
          className="max-w-11 lg:max-w-[60px] object-contain"
          height={60}
          alt={data.name}
          src={data.image}
        />
        <div>
          <h5 className="text-xs lg:text-sm font-bold">{data.name}</h5>
          <h6 className="text-[10px] text-aswadBlack">
            {data.role} <br /> {data.company}
          </h6>
        </div>
      </div>
    </article>
  );
};

export default TestimoniaCard;
