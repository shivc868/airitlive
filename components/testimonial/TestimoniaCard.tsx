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
    <article className="bg-white cursor-pointer gap-3 font-inter p-5 mx-2 sm:mx-2 xl:mx-4 rounded-[6.714px] max-w-[340px] w-full lg:max-w-[440px] flex flex-col justify-between">
      <MdIcon />
      <div className="flex-1">
        <p className="text-aswadBlack text-[14px] sm:text-[16px] lg:text-[18px] leading-[170%]">
          {data.feedback}
        </p>
      </div>
      <div className="flex items-center gap-5 border-t pt-1.5 border-[rgba(0,0,0,0.51)]">
        <Image
          width={60}
          className="min-h-11 max-w-11  lg:min-h-[60px] max-h-[60px] lg:max-w-[60px] object-cover"
          height={60}
          alt={data.name}
          src={data.image}
        />
        <div>
          <h5 className="text-[14px] lg:text-base font-bold">{data.name}</h5>
          <h6 className="text-[12px] text-aswadBlack">
            {data.role} <br /> {data.company}
          </h6>
        </div>
      </div>
    </article>
  );
};

export default TestimoniaCard;
