import Image from "next/image";
import React from "react";
import { networks } from "../Helper";

const MobileNetwork = () => {
  return (
    <section className="px-4 max-w-[90%] lg:max-w-[1007px] w-full mx-auto py-6">
      <h3 className="text-[12.027px] sm:text-base md:text-xl lg:text-2xl font-bold font-lato text-center text-thunder">
        $5M Revenue Boost Across Our Media Network
      </h3>
      <div className="grid place-content-center place-items-center grid-cols-5 gap-[9px] lg:gap-5 mt-4 sm:mt-7 lg:mt-10">
        {networks.map((network, index) => (
          <Image
            key={index}
            src={network.src}
            alt={network.alt}
            width={171}
            height={99}
          />
        ))}
      </div>
    </section>
  );
};

export default MobileNetwork;
