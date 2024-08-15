import Image from "next/image";
import React from "react";

const networks = [
  { src: "/img/pluto.webp", alt: "Pluto" },
  { src: "/img/discovery.webp", alt: "Discovery" },
  { src: "/img/tubi.webp", alt: "Tubi" },
  { src: "/img/paramount.webp", alt: "Paramount" },
  { src: "/img/mlb.webp", alt: "MLB" },
  { src: "/img/amc.png", alt: "AMC" },
  { src: "/img/fubo.webp", alt: "Fubo" },
  { src: "/img/fox-sports.webp", alt: "Fox Sports" },
  { src: "/img/epsilon.png", alt: "Epsilon" },
  { src: "/img/news18.webp", alt: "News18" },
];

const MobileNetwork = () => {
  return (
    <section className="px-4 max-w-[1007px] w-full mx-auto py-6">
      <h3 className="text-[12.027px] sm:text-base md:text-xl lg:text-2xl font-bold font-lato text-center text-thunder">
        $5M Revenue Boost Across Our Media Network
      </h3>
      <div className="grid place-content-center place-items-center grid-cols-5 gap-[9px] lg:gap-5 mt-2 sm:mt-5  md:mt-8 lg:mt-10">
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
