import React from "react";
import UnifiedCard from "./UnifiedCard";
import { ForCasting, HandShakeIcon, SharedIcon } from "../common/Icons";
import SecondaryButton from "../common/SecondaryButton";
import Link from "next/link";

const CardData = [
  {
    icon: <HandShakeIcon />,
    description: "Seamless cross-promotion between channels",
  },
  {
    icon: <SharedIcon />,
    description: "Shared audience insights across platforms",
  },
  {
    icon: <ForCasting />,
    description: "Integrated revenue reporting and forecasting",
  },
];

const UnifiedPower: React.FC = () => {
  return (
    <section className="max-w-[1182px] px-4 w-full mx-auto bg-[#f5e9f7] py-16">
      <h3 className="text-center text-2xl md:text-3xl lg:text-4xl text-[#3a3a3a] font-semibold mb-10">
        Unified Power for All Media
      </h3>
      <div className="flex flex-col gap-5 xl:gap-10 md:flex-row items-center w-full  mt-12">
        <div className="md:w-[33%]">
          <UnifiedCard data={CardData[0]} />
        </div>

        <div className="flex md:w-[66%] justify-center gap-5 xl:gap-10 w-full flex-nowrap">
          <UnifiedCard data={CardData[1]} />
          <UnifiedCard data={CardData[2]} />
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <SecondaryButton href="/contact" className="mt-11">
          Contact Us
        </SecondaryButton>
      </div>
    </section>
  );
};

export default UnifiedPower;
