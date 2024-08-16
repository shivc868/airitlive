import React from "react";
import UnifiedCard from "./UnifiedCard";
import { ForCasting, HandShakeIcon, SharedIcon } from "../common/Icons";
import SecondaryButton from "../common/SecondaryButton";

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
    <section className="max-w-[1182px] px-4 w-full mx-auto">
      <div className="flex flex-wrap gap-8  justify-between items-center w-full">
        {CardData.map((data, index) => (
          <UnifiedCard key={index} data={data} />
        ))}
      </div>
      <SecondaryButton className="mx-auto mt-11">Contact Us</SecondaryButton>
    </section>
  );
};

export default UnifiedPower;
