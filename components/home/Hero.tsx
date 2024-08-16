import React from "react";
import DataSummaryMetrics from "./DataSummaryMetrics";
import { styles } from "../common/style";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="px-4">
      <div
        className={`${styles.container} py-28 sm:py-40 flex flex-col gap-4 sm:gap-6`}
      >
        <h1 className="flex flex-col text-[30px] sm:text-[50px] lg:text-[68px] leading-[1] font-helvetica-bold font-bold tracking-[-2px]">
          <span className="gradient-hero-main-text text-center sm:text-start leading-[1]">
            One AI Partner
          </span>
          <span className="gradient-hero-main-text text-center sm:text-start leading-[1]">
            Three Media Powerhouses
          </span>
        </h1>
        <p className="text-lg text-center sm:text-start sm:text-[24px] lg:text-[28px] text-plum font-lato font-medium leading-[1.2]">
          Revolutionizing monetization for Sports, News, and Entertainment.
        </p>
        <div className="flex sm:block justify-center">
          <Link href="/contact">
            <button className="btn-primary">Get in touch</button>
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        <DataSummaryMetrics />
      </div>
    </section>
  );
};

export default Hero;
