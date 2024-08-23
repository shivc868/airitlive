import Image from "next/image";
import { networks } from "../common/Helper";
import SecondaryButton from "../common/SecondaryButton";

const MediaNetwork = () => {
  return (
    <section
      id="media-nextwork"
      className="px-4 pb-14 lg:pb-16 lg:max-w-[1007px] w-full mx-auto"
    >
      <h3 className="text-base   sm:text-lg md:text-xl lg:text-2xl font-bold font-lato text-center text-thunder">
        $5M Revenue Boost Across Our Media Network"
      </h3>
      <div className="grid place-content-center place-items-center grid-cols-4 gap-[9px] lg:gap-5 mt-4 sm:mt-7 lg:mt-10">
        {networks.map((network, index) => (
          <Image
            key={index}
            src={network.src}
            alt={network.alt}
            width={171}
            height={99}
            className="max-h-[60px]  md:max-h-[99px] hover:scale-[0.94] cursor-pointer transition-all duration-200 h-full w-full rounded-xl overflow-hidden md:rounded-[18px]"
          />
        ))}
      </div>
      <SecondaryButton className="mx-auto !py-1.5 mt-[30px]">
        More clients
      </SecondaryButton>
    </section>
  );
};

export default MediaNetwork;
