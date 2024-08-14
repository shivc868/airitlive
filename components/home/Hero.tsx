import React from "react";
import DataSummaryMetrics from "./DataSummaryMetrics";
import { styles } from "../common/style";

const Hero = () => {
  return (
    <section className="px-4">
      <div className={`${styles.container} py-40 flex flex-col gap-6`}>
        <h1 className="flex flex-col text-[68px] leading-[1] font-helvetica-bold font-bold tracking-[-2px]">
          <span className="gradient-hero-main-text leading-[1]">
            One AI Partner
          </span>
          <span className="gradient-hero-main-text leading-[1]">
            Three Media Powerhouses
          </span>
        </h1>
        <p className="text-[28px] text-plum font-lato font-medium leading-[1.2]">
          Revolutionizing monetization for Sports, News, and Entertainment.
        </p>
        <div>
          <button className="btn-primary">Get in touch</button>
        </div>
      </div>

      <div className={styles.container}>
        <DataSummaryMetrics />
      </div>
    </section>
  );
};

export default Hero;
