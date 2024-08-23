import React from "react";
import { styles } from "../common/style";
import { EntertainmentIcon, NewsIcon, SportsIcon } from "../common/Icons";
import PerformanceMetricsCards from "./PerformanceMetricsCards";
import SecondaryButton from "../common/SecondaryButton";

const Amplify = () => {
  return (
    <section id="amplify" className="px-4 py-14 lg:pt-20 lg:pb-16">
      <div className={styles.container}>
        <div className="flex lg:flex-row flex-col items-center justify-between sm:gap-10 gap-6 md:gap-14 lg:gap-3">
          <div className="flex flex-col gap-3 lg:pl-16 lg:gap-12">
            <h2 className="section-heading">Amplify your Content</h2>
            <div className="lg:block hidden">
              <SecondaryButton className="!py-1.5 lg:text-xl">
                Know More
              </SecondaryButton>
            </div>
          </div>

          <div className="flex flex-col md:flex-row  relative items-center gap-3 lg:gap-0 justify-center">
            <div className="flex lg:flex-col gap-3 lg:gap-14">
              <PerformanceMetricsCards
                icon={<NewsIcon />}
                percentage="95+"
                category="News"
                description="higher engagement during live events"
              />
              <PerformanceMetricsCards
                icon={<SportsIcon />}
                percentage="60%"
                category="Sports"
                description="increased ad relevance in breaking stories"
              />
            </div>
            <div className="hidden lg:block w-[250px] h-[250px]"></div>
            <div className="lg:absolute right-0">
              <PerformanceMetricsCards
                icon={<EntertainmentIcon />}
                percentage="70%"
                category="Enternaiment"
                description="better viewer retention during binge sessions"
              />
            </div>
          </div>

          <div className="block lg:hidden">
            <SecondaryButton className="!py-1.5 lg:text-xl">
              Know More
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amplify;
